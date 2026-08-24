import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 ${isCenter ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 eyebrow mb-4 ${light ? 'eyebrow-white' : 'eyebrow-primary'}`}>
          {eyebrow}
        </div>
      )}
      <h2
        className={`text-4xl md:text-5xl font-extrabold leading-tight tracking-tight
          ${light ? 'text-white' : 'text-[#012B4E]'}
          ${isCenter ? 'mx-auto' : ''}
          max-w-2xl ${isCenter ? '' : ''}
        `}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed max-w-2xl
            ${light ? 'text-white/70' : 'text-[#4A6580]'}
            ${isCenter ? 'mx-auto' : ''}
          `}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
