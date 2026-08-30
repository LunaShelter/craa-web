import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

/**
 * Section header — left-aligned by default (Organic direction: flush-left
 * headings, whitespace on the right). Display type is Caprasimo.
 */
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = false,
  className = '',
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 ${isCenter ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <div
          className={`text-[11px] font-bold uppercase tracking-[0.14em] mb-4 ${
            light ? 'text-[#2BC4B5]' : 'text-[#7A93A8]'
          }`}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className={`font-heading text-[36px] lg:text-[48px] leading-[1.1]
          ${light ? 'text-white' : 'text-[#012B4E]'}
          ${isCenter ? 'mx-auto' : ''} max-w-[720px]`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-[17px] leading-[1.7] max-w-[620px]
            ${light ? 'text-white/65' : 'text-[#4A6580]'}
            ${isCenter ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
