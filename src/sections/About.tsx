import React from 'react';
import { portfolioConfig } from '../config/portfolio';

export const AboutSection: React.FC = () => {
  const { about, lawyer } = portfolioConfig;

  return (
    <section id="about" className="py-20 lg:py-28 border-b border-[#E5E5E5] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
          
          {/* Left Column (5 cols): Photo with Offset Black Rectangle & Cursive Signature */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
            <div className="relative max-w-sm w-full">
              {/* Solid black box behind photo offset top-left */}
              <div 
                className="absolute -top-3.5 -left-3.5 w-full h-full bg-[#111111]" 
                aria-hidden="true" 
              />
              {/* Photo with thin border - Complete Uncut HD Portrait */}
              <div className="relative z-10 bg-white border border-[#111111] overflow-hidden aspect-[4/5] shadow-lg">
                <img
                  src={lawyer.aboutImage}
                  alt={`Advocate ${lawyer.name}`}
                  className="w-full h-full object-cover object-top grayscale contrast-105"
                  width={896}
                  height={1200}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Crisp HD Cursive Signature beneath portrait */}
            <div className="mt-8 flex justify-center lg:justify-start w-full max-w-sm pl-2">
              <img
                src={lawyer.signatureImage}
                alt="Aarohi Desai Signature"
                className="h-10 sm:h-12 w-auto object-contain select-none"
                width={1125}
                height={288}
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column (7 cols): Editorial Text & Core Values */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#777777] font-semibold mb-3 flex items-center space-x-1.5 font-mono">
              <span>{about.label}</span>
            </span>

            <h2 className="font-serif text-5xl sm:text-6xl font-normal text-[#111111] leading-[1.08] tracking-tight whitespace-pre-line mb-6">
              {about.heading}
            </h2>

            {/* Exact Bio text */}
            <p className="text-sm sm:text-base text-[#111111] leading-relaxed mb-12 max-w-2xl">
              {about.bio}
            </p>

            {/* 3 Core Values Horizontally with Emojis */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#E5E5E5] max-w-xl">
              {about.values.map((val, idx) => (
                <div key={idx} className="flex flex-col items-start space-y-2">
                  <div className="w-11 h-11 rounded-full bg-[#F1F1F1] flex items-center justify-center text-xl shadow-2xs mb-1">
                    <span role="img" aria-label={val.title}>{val.emoji}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg text-[#111111] font-normal tracking-tight leading-tight">
                      {val.title}
                    </h3>
                    <p className="text-xs text-[#777777] font-sans mt-0.5 leading-tight">
                      {val.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
