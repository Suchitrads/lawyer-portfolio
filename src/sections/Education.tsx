import React from 'react';
import { portfolioConfig } from '../config/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { Timeline } from '../components/Timeline';

export const EducationSection: React.FC = () => {
  const { education } = portfolioConfig;

  return (
    <section id="education" className="py-20 lg:py-28 border-b border-[#E5E5E5] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 cols): Academic Journey Heading & Books Illustration */}
          <div className="lg:col-span-5">
            <SectionHeading
              label={education.label}
              heading={education.heading}
              description={education.description}
              illustrationSrc={education.illustration}
              illustrationAlt="Law Books Illustration"
            />
          </div>

          {/* Right Column (7 cols): Vertical Academic Timeline */}
          <div className="lg:col-span-7 pt-4">
            <Timeline items={education.timeline} type="education" />
          </div>

        </div>
      </div>
    </section>
  );
};
