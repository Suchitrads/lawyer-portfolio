import React from 'react';
import { PublicationItem } from '../config/portfolio';
import { ArrowUpRight } from 'lucide-react';

interface PublicationListProps {
  items: PublicationItem[];
}

export const PublicationList: React.FC<PublicationListProps> = ({ items }) => {
  return (
    <div className="space-y-4">
      {items.map((pub, idx) => (
        <a
          key={idx}
          href="#contact"
          className="bg-[#FFFFFF] border border-[#E5E5E5] rounded-xl p-5 shadow-xs hover:border-[#111111] hover:shadow-sm transition-all flex items-center justify-between group cursor-pointer"
        >
          <div className="flex items-center space-x-4 pr-4">
            <div className="w-11 h-11 rounded-lg bg-[#F1F1F1] flex items-center justify-center shrink-0 text-xl shadow-2xs">
              <span role="img" aria-label="Publication article">{pub.emoji}</span>
            </div>
            <div>
              <h3 className="font-sans text-base font-bold text-[#111111] tracking-tight leading-snug">
                {pub.title}
              </h3>
              <p className="text-xs text-[#777777] font-sans mt-0.5">
                {pub.journal}
              </p>
            </div>
          </div>

          <div className="text-[#111111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0">
            <ArrowUpRight size={18} />
          </div>
        </a>
      ))}
    </div>
  );
};
