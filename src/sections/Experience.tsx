import React from 'react';
import { portfolioConfig } from '../config/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { Timeline } from '../components/Timeline';

export const ExperienceSection: React.FC = () => {
  const { experience } = portfolioConfig;

  return (
    <section id="experience" className="py-20 lg:py-28 border-b border-[#E5E5E5] bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 cols): Professional Experience Heading & Gavel Illustration */}
          <div className="lg:col-span-5">
            <SectionHeading
              label={experience.label}
              heading={experience.heading}
              description={experience.description}
              illustrationSrc={experience.illustration}
              illustrationAlt="Judicial Gavel Illustration"
            />
          </div>

          {/* Right Column (7 cols): Professional Work History Timeline */}
          <div className="lg:col-span-7 pt-4">
            <Timeline items={experience.timeline} type="experience" />
          </div>

        </div>
      </div>
    </section>
  );
};
