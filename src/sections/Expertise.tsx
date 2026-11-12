import React from 'react';
import { portfolioConfig } from '../config/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { PracticeAreas } from '../components/PracticeAreas';

export const ExpertiseSection: React.FC = () => {
  const { expertise } = portfolioConfig;

  return (
    <section id="expertise" className="py-20 lg:py-28 border-b border-[#E5E5E5] bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 cols): Heading & Lady Justice Illustration */}
          <div className="lg:col-span-5">
            <SectionHeading
              label={expertise.label}
              heading={expertise.heading}
              description={expertise.description}
              illustrationSrc={expertise.illustration}
              illustrationAlt="Classical Lady Justice Illustration"
            />
          </div>

          {/* Right Column (7 cols): Numbered Practice Area List */}
          <div className="lg:col-span-7 pt-4">
            <PracticeAreas items={expertise.items} />
          </div>

        </div>
      </div>
    </section>
  );
};
