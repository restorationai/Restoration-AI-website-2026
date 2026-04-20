"use client";

import React from 'react';
import { motion } from 'framer-motion';

const companies = [
  { name: "Servpro", logo: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69d2b3594cde4bbc2adc0764.webp" },
  { name: "Paul Davis", logo: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69d2b6653d829c73b24abf7d.png" },
  { name: "ServiceMaster", logo: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69d2b359a7dcb4cff0b96d01.png" },
  { name: "Voda", logo: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69d2b359c9e9d61b8651140d.jpg" },
  { name: "1800 Water Damage", logo: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69d2b35984c045c2746ce839.webp" },
  { name: "DryMedic", logo: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69d2b55e4cde4bbc2adc5d8b.png" },
  { name: "Dry1Out", logo: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69d2b602fa2dde974256d75c.png" },
];

export default function LogoMarquee() {
  return (
    <div className="w-full overflow-hidden py-4">
      <div className="flex w-fit animate-marquee transition-all duration-700 select-none">
        {/* Double the array for seamless looping */}
        {[...companies, ...companies].map((company, index) => (
          <div 
            key={`${company.name}-${index}`} 
            className="flex items-center justify-center px-12 md:px-16 shrink-0"
          >
            <motion.img 
              src={company.logo} 
              alt={company.name}
              className="h-16 md:h-24 w-auto object-contain transition-all duration-300 transform hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
