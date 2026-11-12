import React from 'react';
import { portfolioConfig } from '../config/portfolio';
import { SectionHeading } from '../components/SectionHeading';

export const AchievementsSection: React.FC = () => {
  const { achievements } = portfolioConfig;

  return (
    <section id="achievements" className="py-20 lg:py-28 border-b border-[#E5E5E5] bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 cols): Heading & Botanical Laurel Illustration */}
          <div className="lg:col-span-5">
            <SectionHeading
              label={achievements.label}
              heading={achievements.heading}
              description={achievements.description}
              illustrationSrc={achievements.illustration}
              illustrationAlt="Botanical Olive Laurel Illustration"
            />
          </div>

          {/* Right Column (7 cols): Clean Milestone Rows with Emojis */}
          <div className="lg:col-span-7 pt-4">
            <div className="space-y-8">
              {achievements.items.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-5 group">
                  {/* Clean Icon with Emoji */}
                  <div className="w-11 h-11 rounded-full bg-[#FFFFFF] border border-[#E5E5E5] flex items-center justify-center shrink-0 text-lg shadow-2xs group-hover:border-[#111111] transition-colors">
                    <span role="img" aria-label={item.title}>{item.emoji}</span>
                  </div>

                  {/* Title & Year Subtitle */}
                  <div className="pt-0.5">
                    <h3 className="font-sans text-base sm:text-lg font-bold text-[#111111] tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#777777] font-sans mt-0.5">
                      {item.subtitle}
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
