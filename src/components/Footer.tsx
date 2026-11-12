import React from 'react';
import { portfolioConfig } from '../config/portfolio';

export const Footer: React.FC = () => {
  const { lawyer } = portfolioConfig;

  return (
    <footer className="bg-[#FFFFFF] border-t border-[#E5E5E5] py-10 text-xs text-[#777777]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#E5E5E5]">
          <div className="flex items-center space-x-3">
            <span className="font-serif text-2xl font-bold text-[#111111]">
              {lawyer.brandLogo}
            </span>
            <div>
              <span className="font-bold text-[#111111] text-sm block">
                {lawyer.name}
              </span>
              <span className="text-[11px] text-[#777777] uppercase tracking-wider font-mono">
                {lawyer.designation}
              </span>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="py-6 text-[11px] leading-relaxed text-[#777777]">
          <p>
            <strong>Statutory Legal Notice:</strong> The information provided on this portfolio website is for general informational purposes only and does not constitute formal legal advice, legal advertising, or solicitation under the Bar Council Rules. Communicating with chambers through this website or submitting an intake inquiry does not create an advocate-client relationship. Visitors are advised to seek independent legal counsel suited to their specific factual situation.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] font-mono text-[#777777]">
          <span>All rights reserved to infieight 2026.</span>
          <span>Bar Council Enrolment: [BCI/D/2021/XXXX]</span>
        </div>
      </div>
    </footer>
  );
};
