import React from 'react';
import { CredentialCard } from '../config/portfolio';
import { ArrowUpRight } from 'lucide-react';

interface CredentialPanelProps {
  cards: CredentialCard[];
  sealImage: string;
  onViewCertificates: () => void;
}

export const CredentialPanel: React.FC<CredentialPanelProps> = ({
  cards,
  sealImage,
  onViewCertificates,
}) => {
  return (
    <div className="relative">
      <div className="space-y-5">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={onViewCertificates}
            className="bg-[#FFFFFF] border border-[#E5E5E5] rounded-xl p-6 sm:p-7 shadow-xs hover:border-[#111111] hover:shadow-sm transition-all cursor-pointer group"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4 sm:space-x-5">
                {/* Circular Grey Icon Container with Emoji */}
                <div className="w-12 h-12 rounded-full bg-[#F1F1F1] flex items-center justify-center shrink-0 text-xl shadow-2xs">
                  <span role="img" aria-label={card.title}>{card.emoji}</span>
                </div>

                {/* Text and details */}
                <div className="pt-0.5">
                  <h3 className="font-sans text-base sm:text-lg font-bold text-[#111111] tracking-tight mb-2">
                    {card.title}
                  </h3>
                  <div className="space-y-1">
                    {card.lines.map((line, lIdx) => (
                      <p key={lIdx} className="text-xs sm:text-sm text-[#777777] font-sans">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Arrow Up Right */}
              <div className="text-[#111111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 pt-1">
                <ArrowUpRight size={18} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Circular Bar Council Seal Watermark at bottom right - Crisp HD */}
      <div className="flex justify-end mt-8 pr-2">
        <img
          src={sealImage}
          alt="Bar Council Seal"
          className="w-24 sm:w-28 h-24 sm:h-28 object-contain opacity-85 select-none"
          width={630}
          height={630}
          loading="lazy"
        />
      </div>
    </div>
  );
};
