import React from 'react';
import { portfolioConfig } from '../config/portfolio';
import { ArrowUpRight } from 'lucide-react';

export const HomeSection: React.FC = () => {
  const { lawyer } = portfolioConfig;

  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] flex flex-col justify-center py-12 lg:py-16 border-b border-[#E5E5E5] bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (7 cols): Editorial Introduction */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Small uppercase label with balance scale emoji */}
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#777777] font-semibold mb-3 flex items-center space-x-1.5 font-mono">
              <span>{lawyer.label}</span>
            </span>

            {/* Main Heading: Aarohi Desai in Large Editorial Serif */}
            <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-normal text-[#111111] leading-[0.92] tracking-tight mb-4">
              <span>{lawyer.firstName}</span>
              <br />
              <span>{lawyer.lastName}</span>
            </h1>

            {/* Professional Designation */}
            <p className="text-xs sm:text-sm uppercase tracking-[0.18em] font-medium text-[#777777] mb-6 font-mono">
              {lawyer.designation}
            </p>

            {/* Tagline in Italic Serif */}
            <div className="mb-8 max-w-lg">
              <p className="font-serif italic text-2xl sm:text-3xl text-[#111111] leading-snug whitespace-pre-line">
                “{lawyer.tagline}”
              </p>
            </div>

            {/* Rounded Pill Action Buttons with Emojis */}
            <div className="flex flex-wrap items-center gap-4 mb-14">
              <a
                href="#about"
                className="bg-[#111111] text-[#FFFFFF] hover:bg-[#333333] transition-all px-7 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide flex items-center space-x-2 shadow-xs hover:shadow"
              >
                <span>🔍 Explore My Profile</span>
                <ArrowUpRight size={15} />
              </a>
              <a
                href="#contact"
                className="bg-[#FAFAFA] border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-[#FFFFFF] transition-all px-7 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide flex items-center space-x-1.5"
              >
                <span>💬 Let's Connect</span>
              </a>
            </div>

            {/* Bottom Statistics with Visual Emojis */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#E5E5E5] max-w-lg">
              {lawyer.stats.map((st, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="flex items-center space-x-1.5 mb-1">
                    <span className="text-sm select-none" aria-hidden="true">{st.emoji}</span>
                    <span className="font-serif text-3xl sm:text-4xl text-[#111111] font-normal leading-none">
                      {st.number}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#777777] font-sans">
                    {st.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column (5 cols): True Architectural Roman Arched Portrait (100% Complete, No Cuts) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto lg:mr-0">
              
              {/* Crisp Architectural Arch Frame with Subtle Shadow */}
              <div className="aspect-[3/4] rounded-t-[180px] sm:rounded-t-[220px] rounded-b-2xl overflow-hidden border border-[#111111]/20 bg-[#F1F1F1] shadow-2xl relative group">
                <img
                  src={lawyer.heroImage}
                  alt={`Advocate ${lawyer.name}`}
                  className="w-full h-full object-cover object-top grayscale contrast-105 group-hover:scale-102 transition-transform duration-700"
                  width={896}
                  height={1200}
                  loading="eager"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
