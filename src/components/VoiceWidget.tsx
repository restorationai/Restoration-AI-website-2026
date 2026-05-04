"use client";

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Square, Loader2, AlertCircle, Lock } from 'lucide-react';

enum CallStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  ACTIVE = 'ACTIVE',
  ERROR = 'ERROR',
}

interface WebhookResponse {
  access_token: string;
  call_id?: string;
}

interface VoiceFormData {
  name: string;
  company: string;
  phone: string;
  timezone: string;
}

interface VoiceWidgetProps {
  externalId: string;
  webhookUrl: string;
  className?: string;
  buttonLabel?: string;
}

const US_TIMEZONES = [
  { label: 'Eastern Time (New York, Miami, DC)', value: 'America/New_York' },
  { label: 'Central Time (Chicago, Houston, Nashville)', value: 'America/Chicago' },
  { label: 'Mountain Time (Denver, Salt Lake City)', value: 'America/Denver' },
  { label: 'Arizona Time (Phoenix - No DST)', value: 'America/Phoenix' },
  { label: 'Pacific Time (Los Angeles, Seattle, Las Vegas)', value: 'America/Los_Angeles' },
  { label: 'Alaska Time (Anchorage)', value: 'America/Anchorage' },
  { label: 'Hawaii Time (Honolulu)', value: 'Pacific/Honolulu' },
];

export const VoiceWidget: React.FC<VoiceWidgetProps> = ({
  externalId,
  webhookUrl,
  className = '',
  buttonLabel = 'Unlock Agent',
}) => {
  const [status, setStatus] = useState<CallStatus>(CallStatus.IDLE);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState<VoiceFormData>({
    name: '',
    company: '',
    phone: '',
    timezone: '',
  });

  const retellClientRef = useRef<any>(null);

  useEffect(() => {
    try {
      const detected = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const exists = US_TIMEZONES.some(tz => tz.value === detected);
      setFormData(prev => ({ ...prev, timezone: exists ? detected : 'America/New_York' }));
    } catch {
      setFormData(prev => ({ ...prev, timezone: 'America/New_York' }));
    }

    import('retell-client-js-sdk').then(module => {
      retellClientRef.current = new module.RetellWebClient();

      retellClientRef.current.on('call_started', () => setStatus(CallStatus.ACTIVE));
      retellClientRef.current.on('call_ended', () => setStatus(CallStatus.IDLE));
      retellClientRef.current.on('error', (err: any) => {
        console.error('Retell SDK Error:', err);
        setErrorMessage('Voice connection error. Please refresh.');
        setStatus(CallStatus.ERROR);
      });
    }).catch(err => {
      console.error('Failed to load Retell SDK:', err);
      setErrorMessage('Failed to load voice engine.');
    });

    return () => {
      retellClientRef.current?.stopCall();
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleToggleCall = useCallback(async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (status === CallStatus.ACTIVE) {
      retellClientRef.current?.stopCall();
      return;
    }

    if (!formData.name.trim() || !formData.company.trim() || !formData.phone.trim() || !formData.timezone) {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    setErrorMessage(null);
    setStatus(CallStatus.LOADING);

    try {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        stream.getTracks().forEach(track => track.stop());
      } catch {
        throw new Error('Microphone access denied.');
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          id: externalId,
          name: formData.name,
          company: formData.company,
          phone: formData.phone,
          timezone: `{{current_time_${formData.timezone}}}`,
        }),
      });

      if (!response.ok) throw new Error(`Server error (${response.status})`);

      const data: WebhookResponse = await response.json();

      if (!data.access_token) throw new Error('Invalid session response.');
      if (!retellClientRef.current) throw new Error('Voice engine not ready.');

      await retellClientRef.current.startCall({ accessToken: data.access_token });
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to start call');
      setStatus(CallStatus.ERROR);
      setTimeout(() => setStatus(c => (c === CallStatus.ERROR ? CallStatus.IDLE : c)), 6000);
    }
  }, [status, webhookUrl, externalId, formData]);

  const isFormDisabled = status === CallStatus.LOADING || status === CallStatus.ACTIVE;

  return (
    <div className={`w-full max-w-lg mx-auto bg-white rounded-2xl border border-slate-100 overflow-hidden transition-all duration-500 ${className}`}>
      <div className="px-4 py-2">
        <form id="voice-form" onSubmit={handleToggleCall} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                disabled={isFormDisabled}
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-[#F8FAFC] border border-slate-200 rounded-lg px-4 py-3 text-slate-900 text-sm font-semibold focus:outline-none focus:border-blue-500 transition-all placeholder-slate-300"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Company</label>
              <input
                type="text"
                name="company"
                placeholder="Restoration Pro"
                disabled={isFormDisabled}
                value={formData.company}
                onChange={handleInputChange}
                className="w-full bg-[#F8FAFC] border border-slate-200 rounded-lg px-4 py-3 text-slate-900 text-sm font-semibold focus:outline-none focus:border-blue-500 transition-all placeholder-slate-300"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="(555) 000-0000"
                disabled={isFormDisabled}
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-[#F8FAFC] border border-slate-200 rounded-lg px-4 py-3 text-slate-900 text-sm font-semibold focus:outline-none focus:border-blue-500 transition-all placeholder-slate-300"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Time Zone</label>
              <div className="relative">
                <select
                  name="timezone"
                  disabled={isFormDisabled}
                  value={formData.timezone}
                  onChange={handleInputChange}
                  className="w-full bg-[#F8FAFC] border border-slate-200 rounded-lg px-4 py-3 text-slate-900 text-sm font-semibold focus:outline-none focus:border-blue-500 transition-all appearance-none cursor-pointer"
                >
                  {US_TIMEZONES.map(tz => (
                    <option key={tz.value} value={tz.value}>{tz.label}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <div className="p-1">
              <button
                type={status === CallStatus.ACTIVE ? 'button' : 'submit'}
                disabled={status === CallStatus.LOADING}
                onClick={status === CallStatus.ACTIVE ? handleToggleCall : undefined}
                className={`
                  w-full flex items-center justify-center gap-2 py-4 rounded-[1rem] font-black text-base transition-all duration-300 transform active:scale-[0.98] shadow-md
                  ${status === CallStatus.ACTIVE ? 'bg-red-500 hover:bg-red-600 text-white' :
                    status === CallStatus.LOADING ? 'bg-blue-500 text-white cursor-wait' :
                    'bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white shadow-lg shadow-blue-900/25'}
                `}
              >
                {status === CallStatus.LOADING ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : status === CallStatus.ACTIVE ? (
                  <Square className="w-4 h-4 fill-current" />
                ) : (
                  <Lock className="w-4 h-4" />
                )}
                <span className="uppercase tracking-tight">
                  {status === CallStatus.LOADING ? 'Initializing...' :
                   status === CallStatus.ACTIVE ? 'End Session' : buttonLabel}
                </span>
              </button>
            </div>
          </div>
        </form>

        {errorMessage && (
          <div className="mt-4 text-[10px] leading-tight text-red-600 font-bold bg-red-50 px-3 py-2 rounded-lg border border-red-100 flex items-center gap-2">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            {errorMessage}
          </div>
        )}

        {status === CallStatus.ACTIVE && (
          <div className="mt-4 flex flex-col items-center gap-1">
            <div className="flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full border border-green-100">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <p className="text-[9px] text-green-700 font-black uppercase tracking-widest">
                Call in Progress
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
