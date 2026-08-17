'use client';

import React from 'react';

import { ctaButtonClasses } from '@/lib/designTokens';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'coral';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  fullWidth?: boolean;
  as?: 'button' | 'a';
  href?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[#2BC4B5] hover:bg-[#22a99c] text-white font-semibold shadow-md hover:shadow-lg active:scale-95',
  secondary:
    'bg-[#FEE35A] hover:bg-[#f5d83a] text-[#012B4E] font-semibold shadow-md hover:shadow-lg active:scale-95',
  outline:
    'border-2 border-[#2BC4B5] text-[#2BC4B5] hover:bg-[#2BC4B5] hover:text-white font-semibold active:scale-95',
  ghost:
    'text-[#012B4E] hover:bg-[#FFF5EC] font-medium',
  coral:
    `${ctaButtonClasses} font-semibold shadow-md hover:shadow-lg active:scale-95`,
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-xl',
  xl: 'px-10 py-5 text-xl rounded-2xl',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2 cursor-pointer
        transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2BC4B5] focus:ring-offset-2
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
