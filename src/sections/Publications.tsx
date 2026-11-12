import React from 'react';
import { portfolioConfig } from '../config/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { PublicationList } from '../components/PublicationList';

export const PublicationsSection: React.FC = () => {
  const { publications } = portfolioConfig;

  return (
    <section id="publications" className="py-20 lg:py-28 border-b border-[#E5E5E5] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 cols): Heading & Legal Treatises Illustration */}
          <div className="lg:col-span-5">
            <SectionHeading
              label={publications.label}
              heading={publications.heading}
              description={publications.description}
              illustrationSrc={publications.illustration}
              illustrationAlt="Stack of Legal Treatises"
            />
          </div>

          {/* Right Column (7 cols): Document-Style Publication Cards */}
          <div className="lg:col-span-7 pt-4">
            <PublicationList items={publications.items} />
          </div>

        </div>
      </div>
    </section>
  );
};
