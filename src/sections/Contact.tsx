import React from 'react';
import { portfolioConfig } from '../config/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { ContactForm } from '../components/ContactForm';

export const ContactSection: React.FC = () => {
  const { contact } = portfolioConfig;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 cols): Heading & Contact Coordinates with Classical Architecture Background */}
          <div className="lg:col-span-5 relative flex flex-col justify-between">
            <div>
              <SectionHeading
                label={contact.label}
                heading={contact.heading}
                description={contact.description}
              />

              {/* Contact Information List with Emojis */}
              <div className="mt-10 space-y-4 text-xs sm:text-sm text-[#111111]">
                
                {/* Email */}
                <div className="flex items-center space-x-3.5">
                  <span className="text-base select-none" aria-hidden="true">✉️</span>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-xs sm:text-sm text-[#111111] hover:underline font-mono"
                  >
                    {contact.email}
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-3.5">
                  <span className="text-base select-none" aria-hidden="true">📞</span>
                  <span className="text-xs sm:text-sm text-[#111111] font-mono">
                    {contact.phone}
                  </span>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-3.5">
                  <span className="text-base select-none" aria-hidden="true">📍</span>
                  <span className="text-xs sm:text-sm text-[#111111]">
                    {contact.location}
                  </span>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center space-x-3.5">
                  <span className="text-base select-none" aria-hidden="true">🔗</span>
                  <a
                    href={`https://${contact.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-[#111111] hover:underline"
                  >
                    {contact.linkedin}
                  </a>
                </div>

              </div>
            </div>

            {/* Classical Courthouse Architectural Engraving - Crisp HD */}
            <div className="mt-8 pt-4">
              <img
                src={contact.illustration}
                alt="Classical Courthouse Colonnade"
                className="w-56 sm:w-64 h-auto object-contain opacity-75"
                width={1350}
                height={1125}
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column (7 cols): Rounded Grey Form Container */}
          <div className="lg:col-span-7 pt-2">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
};
