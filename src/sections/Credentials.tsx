import React from 'react';
import { portfolioConfig } from '../config/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { CredentialPanel } from '../components/CredentialPanel';
import { ArrowUpRight } from 'lucide-react';

interface CredentialsSectionProps {
  onViewCertificates: () => void;
}

export const CredentialsSection: React.FC<CredentialsSectionProps> = ({ onViewCertificates }) => {
  const { credentials } = portfolioConfig;

  return (
    <section id="credentials" className="py-20 lg:py-28 border-b border-[#E5E5E5] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 cols): Heading & View Certificates Button */}
          <div className="lg:col-span-5">
            <SectionHeading
              label={credentials.label}
              heading={credentials.heading}
              description={credentials.description}
            >
              <button
                type="button"
                onClick={onViewCertificates}
                className="bg-[#111111] text-[#FFFFFF] hover:bg-[#333333] transition-all px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide inline-flex items-center space-x-2 cursor-pointer shadow-xs hover:shadow"
              >
                <span>📄 View Certificates</span>
                <ArrowUpRight size={15} />
              </button>
            </SectionHeading>
          </div>

          {/* Right Column (7 cols): Document-Style Credential Cards */}
          <div className="lg:col-span-7 pt-2">
            <CredentialPanel
              cards={credentials.cards}
              sealImage={credentials.illustration}
              onViewCertificates={onViewCertificates}
            />
          </div>

        </div>
      </div>
    </section>
  );
};
