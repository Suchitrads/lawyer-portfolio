import React from 'react';
import { EducationItem, ExperienceItem } from '../config/portfolio';

interface EducationTimelineProps {
  items: EducationItem[];
  type: 'education';
}

interface ExperienceTimelineProps {
  items: ExperienceItem[];
  type: 'experience';
}

type TimelineProps = EducationTimelineProps | ExperienceTimelineProps;

export const Timeline: React.FC<TimelineProps> = (props) => {
  if (props.type === 'education') {
    return (
      <div className="relative border-l border-[#111111] pl-6 sm:pl-8 space-y-10 my-2">
        {props.items.map((item, index) => (
          <div key={index} className="relative">
            {/* Small solid black dot on vertical line */}
            <span 
              className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-[#111111] border-2 border-[#FFFFFF]"
              aria-hidden="true"
            />

            {/* Period / Year */}
            <span className="font-sans text-xs sm:text-sm font-bold text-[#111111] block mb-1">
              {item.period}
            </span>

            {/* Title / Qualification with Emoji */}
            <div className="flex items-center space-x-2">
              <span className="text-base select-none" aria-hidden="true">{item.emoji}</span>
              <h3 className="font-serif text-lg sm:text-xl text-[#111111] font-semibold tracking-tight leading-snug">
                {item.title}
              </h3>
            </div>

            {/* Institution */}
            <h4 className="text-xs sm:text-sm text-[#777777] font-medium mt-1 mb-2 pl-6">
              {item.institution}
            </h4>

            {/* Bullet point */}
            <p className="text-xs sm:text-sm text-[#111111] flex items-center space-x-1.5 pl-6">
              <span className="text-[#111111] font-bold">•</span>
              <span>{item.bullet}</span>
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative border-l border-[#111111] pl-6 sm:pl-8 space-y-10 my-2">
      {props.items.map((item, index) => (
        <div key={index} className="relative">
          {/* Small solid black dot on vertical line */}
          <span 
            className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-[#111111] border-2 border-[#FFFFFF]"
            aria-hidden="true"
          />

          {/* Period / Year */}
          <span className="font-sans text-xs sm:text-sm font-bold text-[#111111] block mb-1">
            {item.period}
          </span>

          {/* Designation with Emoji */}
          <div className="flex items-center space-x-2">
            <span className="text-base select-none" aria-hidden="true">{item.emoji}</span>
            <h3 className="font-serif text-lg sm:text-xl text-[#111111] font-semibold tracking-tight leading-snug">
              {item.title}
            </h3>
          </div>

          {/* Organization */}
          <h4 className="text-xs sm:text-sm text-[#777777] font-medium mt-1 mb-2 pl-6">
            {item.institution}
          </h4>

          {/* Bullets */}
          <div className="space-y-1 pl-6">
            {item.bullets.map((b, bIdx) => (
              <p key={bIdx} className="text-xs sm:text-sm text-[#111111] flex items-start space-x-1.5">
                <span className="text-[#111111] font-bold">•</span>
                <span>{b}</span>
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
