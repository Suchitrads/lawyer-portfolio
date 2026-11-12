import React, { useState } from 'react';
import { PracticeArea } from '../config/portfolio';
import { ArrowUpRight } from 'lucide-react';

interface PracticeAreasProps {
  items: PracticeArea[];
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ items }) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="border-t border-[#E5E5E5] divide-y divide-[#E5E5E5]">
      {items.map((item) => {
        const isOpen = activeId === item.id;

        return (
          <div
            key={item.id}
            onClick={() => toggleItem(item.id)}
            className={`group py-5 transition-all duration-200 cursor-pointer ${
              isOpen ? 'bg-[#F1F1F1]/50 px-4 -mx-4' : 'hover:bg-[#F1F1F1]/30 hover:px-2 hover:-mx-2'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-baseline space-x-4 sm:space-x-6">
                <span className="font-mono text-xs sm:text-sm text-[#777777] group-hover:text-[#111111] transition-colors">
                  {item.number}
                </span>
                <span className="text-base sm:text-lg select-none" aria-hidden="true">
                  {item.emoji}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#111111] font-normal tracking-tight group-hover:translate-x-0.5 transition-transform">
                  {item.title}
                </h3>
              </div>

              <div className="flex items-center space-x-3 text-[#111111]">
                <ArrowUpRight
                  size={18}
                  className={`transition-transform duration-200 ${
                    isOpen ? 'rotate-45' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                  }`}
                />
              </div>
            </div>

            {/* Revealed description */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-60 opacity-100 mt-4 pt-3 border-t border-[#E5E5E5]/60' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-xs sm:text-sm text-[#777777] leading-relaxed max-w-2xl pl-12 sm:pl-16">
                {item.details}
              </p>
              <div className="mt-2.5 pl-12 sm:pl-16 text-[11px] font-mono text-[#111111] opacity-75">
                Statutory Framework: {item.statutes}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
