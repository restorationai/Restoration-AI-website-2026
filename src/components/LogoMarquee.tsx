"use client";

import React from 'react';
import { motion } from 'framer-motion';

const companies = [
  { name: "Voda", logo: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69d2b359c9e9d61b8651140d.jpg" },
  { name: "Paul Davis", logo: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69d2b6653d829c73b24abf7d.png" },
  { name: "ServiceMaster", logo: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69d2b359a7dcb4cff0b96d01.png" },
  { name: "Servpro", logo: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69d2b3594cde4bbc2adc0764.webp" },
  { name: "Restoration 1", logo: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69eac0c96588a29ac2cf92fd.png" },
  { name: "DryMedic", logo: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69d2b55e4cde4bbc2adc5d8b.png" },
  { name: "Dry1Out", logo: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69d2b602fa2dde974256d75c.png" },
];

export default function LogoMarquee() {
  return (
    <div className="w-full overflow-hidden py-4 flex flex-nowrap">
      
      {/* Block 1 */}
      <div className="flex animate-marquee shrink-0 items-center min-w-max select-none">
        {companies.map((company, index) => (
          <div 
            key={`${company.name}-${index}-1`} 
            className="flex items-center justify-center px-12 md:px-16 shrink-0"
          >
            <motion.img 
              src={company.logo} 
              alt={company.name}
              className={`${company.name === 'Restoration 1' ? 'h-32 md:h-48' : 'h-16 md:h-24'} w-auto object-contain transition-all duration-300 transform hover:scale-110`}
            />
          </div>
        ))}
      </div>

      {/* Block 2 (Duplicate for Seamless Loop) */}
      <div className="flex animate-marquee shrink-0 items-center min-w-max select-none" aria-hidden="true">
        {companies.map((company, index) => (
          <div 
            key={`${company.name}-${index}-2`} 
            className="flex items-center justify-center px-12 md:px-16 shrink-0"
          >
            <motion.img 
              src={company.logo} 
              alt={company.name}
              className={`${company.name === 'Restoration 1' ? 'h-32 md:h-48' : 'h-16 md:h-24'} w-auto object-contain transition-all duration-300 transform hover:scale-110`}
            />
          </div>
        ))}
      </div>

    </div>
  );
}
