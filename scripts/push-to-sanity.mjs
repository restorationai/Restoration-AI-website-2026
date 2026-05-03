/**
 * Push RAI-009 "After-Hours Answering Service for Restoration" as a Sanity draft.
 *
 * Prerequisites:
 *   1. Create a write token at https://sanity.io/manage → project sloj5um4 → API → Tokens
 *      (Editor or higher permission level)
 *   2. Add it to .env.local:  SANITY_API_TOKEN=skXXXXXXXXXXXXXXXXXXXXXX
 *   3. Run: node scripts/push-to-sanity.mjs
 *
 * The script creates a draft document (_id prefixed with "drafts.")
 * so it appears in Sanity Studio as a draft, not yet published.
 * After reviewing in the Studio, click "Publish" to make it live.
 * Then update CONTENT_MANIFEST.json: set sanity_id and automation_status → "Published".
 */

import { createClient } from '@sanity/client';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load token from .env.local
function loadEnv() {
  try {
    const envPath = join(__dirname, '..', '.env.local');
    const lines = readFileSync(envPath, 'utf-8').split('\n');
    for (const line of lines) {
      const [key, ...rest] = line.split('=');
      if (key?.trim() === 'SANITY_API_TOKEN') return rest.join('=').trim();
    }
  } catch {}
  return process.env.SANITY_API_TOKEN;
}

const token = loadEnv();
if (!token) {
  console.error(
    '\n❌  No SANITY_API_TOKEN found.\n' +
    '    1. Go to https://sanity.io/manage → project sloj5um4 → API → Tokens\n' +
    '    2. Create a token with Editor permissions\n' +
    '    3. Add to .env.local:  SANITY_API_TOKEN=skXXXXXXXXXXXXXX\n' +
    '    4. Re-run this script\n'
  );
  process.exit(1);
}

const client = createClient({
  projectId: 'sloj5um4',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
});

// --- Portable Text helpers ---
let keyCounter = 0;
const key = () => `k${String(++keyCounter).padStart(7, '0')}`;

const h2 = (text) => ({
  _type: 'block', _key: key(), style: 'h2', markDefs: [],
  children: [{ _type: 'span', _key: key(), text, marks: [] }],
});

const p = (...spans) => ({
  _type: 'block', _key: key(), style: 'normal', markDefs: [],
  children: spans,
});

const span = (text, marks = []) => ({ _type: 'span', _key: key(), text, marks });
const bold = (text) => span(text, ['strong']);

// --- Blog post document ---
const doc = {
  _id: 'drafts.rai-009-after-hours-answering-service',
  _type: 'post',

  title: 'After-Hours Answering Service for Restoration Contractors: Why Taking a Message Costs You the Job',

  slug: { _type: 'slug', current: 'after-hours-answering-service-restoration' },

  seoTitle: 'After-Hours AI Answering Service for Restoration Companies',

  seoDescription:
    'Standard answering services take a message and wait. Restoration AI triages every after-hours call by IICRC water category and dispatches crews in minutes — before your competitors wake up.',

  publishedAt: null,

  body: [
    p(
      span(
        'Every restoration contractor has lost a job to voicemail. The homeowner calls at 2am with a burst pipe, gets a recorded message, and dials the next number on Google. By morning, the crew is already scoped and on site — and your callback arrives too late. Traditional after-hours answering services promise to solve this problem. They don\'t — because '
      ),
      bold('taking a message is not the same as triaging an emergency.')
    ),
    p(
      span(
        'The difference is IICRC water categorization. A Category 1 clean-water supply line failure can wait a few hours. A Category 3 sewage backup cannot. A standard answering service operator does not know this distinction and treats every "water in the basement" call identically. Restoration AI triages the call in real time, selects the correct dispatch urgency tier, and pushes a fully populated job record to your CRM before the homeowner hangs up.'
      )
    ),

    h2('What makes an after-hours restoration call different from any other service call?'),
    p(
      span(
        'A plumber or electrician can safely return a call in the morning. Restoration contractors cannot. Water damage compounds by the hour: Category 1 losses become Category 2 within 24 hours as building materials saturate. Mold colonization begins between 24 and 48 hours. Every hour without mitigation expands the scope, increases the claim amount, and exposes the homeowner to secondary damage — damage that insurance adjusters scrutinize closely when reviewing the claim.'
      )
    ),
    p(
      span('Beyond the physical urgency, insurance carriers track response times. Preferred vendor programs at major carriers record how quickly a contractor responds to new referrals. Contractors averaging sub-60-minute response times hold preferential routing. Those who routinely let calls go to voicemail after hours risk losing their spot on referral lists entirely.')
    ),

    h2('What is IICRC water categorization and why does it determine dispatch urgency?'),
    p(span('The IICRC S500 Standard classifies water losses into three categories based on contamination level:')),
    p(
      bold('Category 1 — Clean Water: '),
      span('Originates from a sanitary source. Supply line failures, toilet tank overflows, melting ice. No biological contaminants. Crew response within 4–8 hours is generally acceptable without significant secondary damage risk.')
    ),
    p(
      bold('Category 2 — Gray Water: '),
      span('Contains chemical, biological, or physical contaminants that can cause discomfort or illness. Washing machine discharge, dishwasher overflow, toilet bowl water with urine. Response within 2–4 hours is the operational standard.')
    ),
    p(
      bold('Category 3 — Black Water: '),
      span('Grossly unsanitary. Sewage backups, flooding from external sources, seawater. Immediate response is required. Crew must arrive with proper PPE; structural containment decisions cannot wait until morning.')
    ),
    p(
      span('A standard answering service operator hears "water in the basement" and writes it down. An AI receptionist trained on IICRC protocols asks: What is the source of the water? Is it discolored? Is there a sewage smell? From three intake questions, it classifies the loss and triggers the appropriate dispatch tier automatically.')
    ),

    h2('Why do traditional after-hours answering services fail restoration contractors?'),
    p(span('Answering services were designed for appointment-based businesses. They are optimized to collect a name, phone number, and callback time — not to make operational decisions. For restoration, that model fails in three specific ways:')),
    p(
      bold('No triage, no urgency. '),
      span('Without IICRC-based triage, all calls look the same. Your on-call crew wakes up to a voicemail saying "water damage" with no way to assess whether to respond immediately or wait until morning.')
    ),
    p(
      bold('Per-minute billing creates incentives to rush. '),
      span('Live answering services bill by the minute. Operators are trained to end calls quickly. A 90-second intake call does not capture enough data to dispatch a restoration crew correctly.')
    ),
    p(
      bold('Surge failure during storm events. '),
      span('The highest-value restoration opportunities happen when call volumes spike simultaneously across your market. Live answering services overflow. Hold times lengthen. Callers abandon and call the next contractor. An AI system handles unlimited concurrent calls with no degradation in quality — no surge pricing, no busy signals.')
    ),

    h2('How does AI triage an after-hours restoration call using IICRC categories?'),
    p(span('The intake sequence for an AI restoration receptionist follows a decision tree designed around IICRC categories. On a typical call:')),
    p(span('1. The AI identifies the caller\'s language and switches to their native language if needed (42+ languages supported).')),
    p(span('2. It confirms the property address and whether the caller is the homeowner, tenant, or property manager.')),
    p(span('3. It asks a structured series of water source questions to determine Category 1, 2, or 3.')),
    p(span('4. Based on Category, it selects a dispatch urgency tier: immediate (Cat 3), same-day (Cat 2), or scheduled (Cat 1).')),
    p(span('5. It sends an SMS confirmation to the homeowner with the crew\'s estimated arrival window.')),
    p(span('6. It pushes a fully populated job record to the connected CRM before the call ends.')),
    p(span('The entire intake runs 3–4 minutes. The CRM record is live before the homeowner hangs up. On-call crew receives an automated SMS or call with job details and address — no manual transfer required.')),

    h2('What data does AI capture at 2am that enables immediate crew dispatch?'),
    p(span('Most answering services collect four fields: name, number, address, problem description. That is insufficient for restoration dispatch. An AI intake captures:')),
    p(span('Property address and unit number · Loss type (water, fire, mold, wind) · IICRC water category (derived from intake questions) · Affected areas and approximate square footage · Insurance carrier if known · Homeowner authorization to proceed · Preferred crew arrival window.')),
    p(
      span('This data is not just useful — it is required for insurance documentation. The '),
      bold('First Notice of Loss (FNOL)'),
      span(' file your crew builds starts at the intake call. A complete AI intake generates a clean FNOL record automatically, which insurers receive faster and flag fewer compliance issues on.')
    ),

    h2('How does after-hours AI integrate with restoration CRMs like JobNimbus and Albiware?'),
    p(span('Restoration AI connects via native API or webhook to the major restoration CRM platforms. After an after-hours intake call:')),
    p(bold('JobNimbus: '), span('New job created with all intake fields mapped. Contact record, job record, and initial note are populated.')),
    p(bold('Albiware: '), span('Job intake form pre-filled and assigned to on-call crew. Work order draft created.')),
    p(bold('Xcelerate: '), span('Lead record created with IICRC category flagged. Dispatch queue entry added.')),
    p(bold('DASH: '), span('Job record initiated with loss type, category, and address pre-populated.')),
    p(span('No manual data entry. No re-typing from a paper message at 7am. The record exists from the moment the call ends, with a complete call transcript and recording attached.')),

    h2('What does an AI after-hours answering service cost vs. a 24/7 human service?'),
    p(span('A 24/7 live answering service for a mid-volume restoration company handling 150 inbound calls per month typically costs $1,200–$2,100 per month — roughly $8–$14 per call — with overage charges during storm surges.')),
    p(span('Restoration AI running 24/7 on the same call volume costs $349/month: approximately $2.32 per call, with no surge pricing and no overage fees.')),
    p(
      span('The more important comparison is not cost — it\'s '),
      bold('conversion rate.'),
      span(' A human answering service that takes a message converts at roughly 40% because callbacks are delayed and callers have already found an alternative. An AI service that triages and dispatches immediately converts above 70% because the homeowner receives a confirmation and crew ETA before hanging up.')
    ),

    h2('How does Restoration AI solve after-hours call coverage for restoration contractors?'),
    p(
      span(
        'Restoration AI answers every call — at 2am, during storm surges, on holidays — triages by IICRC water category, and dispatches crews without a human in the loop. Setup takes five minutes. There is no per-minute billing, no surge pricing, and no message queue to clear in the morning. '
      )
    ),
    p(
      span('To see how it works for your operation, '),
      span('book a strategy call', ['strong']),
      span(' and we will walk through your current after-hours coverage gap and show you exactly how the IICRC triage logic works on a live demo call.')
    ),
  ],
};

async function main() {
  console.log('\n📄  Pushing draft: RAI-009 — After-Hours Answering Service\n');

  const existing = await client.fetch(`*[_id == $id][0]._id`, { id: doc._id });
  if (existing) {
    console.log('⚠️   Draft already exists in Sanity. Patching...');
    const { _id, ...fields } = doc;
    await client.patch(_id).set(fields).commit();
    console.log('✅  Draft updated:', doc._id);
  } else {
    await client.create(doc);
    console.log('✅  Draft created:', doc._id);
  }

  console.log('\nNext steps:');
  console.log('  1. Open https://restorationai.io/studio to review the draft');
  console.log('  2. Publish from the Studio when ready');
  console.log('  3. Update CONTENT_MANIFEST.json:');
  console.log('     - Set sanity_id to "rai-009-after-hours-answering-service"');
  console.log('     - Set automation_status to "Published"');
  console.log('     - Add publishedAt date\n');
}

main().catch((err) => {
  console.error('❌  Push failed:', err.message);
  process.exit(1);
});
