import React from 'react';

interface SectionHeadingProps {
  label?: string;
  heading: string;
  description?: string;
  illustrationSrc?: string;
  illustrationAlt?: string;
  className?: string;
  children?: React.ReactNode;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  heading,
  description,
  illustrationSrc,
  illustrationAlt = 'Section illustration',
  className = '',
  children,
}) => {
  return (
    <div className={`flex flex-col justify-between h-full ${className}`}>
      <div>
        {label && (
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#777777] font-semibold block mb-3 font-mono">
            {label}
          </span>
        )}
        <h2 className="font-serif text-5xl sm:text-6xl font-normal text-[#111111] leading-[1.05] tracking-tight whitespace-pre-line">
          {heading}
        </h2>
        {description && (
          <p className="font-serif italic text-base sm:text-lg text-[#111111] leading-relaxed max-w-sm mt-4 whitespace-pre-line">
            {description}
          </p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>

      {illustrationSrc && (
        <div className="mt-8 lg:mt-12 pt-2">
          <img
            src={illustrationSrc}
            alt={illustrationAlt}
            className="w-40 sm:w-48 h-auto max-h-44 object-contain opacity-85 select-none"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
};
