'use client';

import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'white' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  fullWidth?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[#2BC4B5] hover:bg-[#22a99c] text-white font-semibold shadow-md hover:shadow-lg active:scale-95 focus:ring-[#2BC4B5]',
  secondary:
    'bg-[#012B4E] hover:bg-[#024070] text-white font-semibold shadow-md hover:shadow-lg active:scale-95 focus:ring-[#012B4E]',
  outline:
    'border-2 border-[#2BC4B5] text-[#2BC4B5] hover:bg-[#2BC4B5] hover:text-white font-semibold active:scale-95 focus:ring-[#2BC4B5]',
  ghost:
    'border-2 border-[#012B4E] text-[#012B4E] hover:bg-[#012B4E] hover:text-white font-semibold active:scale-95 focus:ring-[#012B4E]',
  white:
    'border-2 border-white/50 text-white hover:border-white hover:bg-white/10 font-semibold active:scale-95 focus:ring-white',
  danger:
    'bg-[#FD544A] hover:bg-[#e04540] text-white font-semibold shadow-md hover:shadow-lg active:scale-95 focus:ring-[#FD544A]',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm:  'px-4 py-2 text-sm rounded-lg',
  md:  'px-6 py-3 text-sm rounded-xl',
  lg:  'px-8 py-3.5 text-base rounded-xl',
  xl:  'px-10 py-4 text-base rounded-xl',
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
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
      {...props}
    >
      {children}
    </button>
  );
}
