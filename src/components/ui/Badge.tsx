import React from 'react';
import { AnimalStatus } from '@/types';

type BadgeVariant = 'adoptado' | 'en-recuperacion' | 'buscando-hogar' | 'default' | 'primary' | 'accent' | 'warning' | 'danger';

interface BadgeProps {
  variant?: BadgeVariant | string;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  adoptado:         'bg-emerald-50 text-emerald-700 border border-emerald-200',
  'en-recuperacion':'bg-amber-50 text-amber-700 border border-amber-200',
  'buscando-hogar': 'bg-[#FFF0EF] text-[#c0392b] border border-[#f5c6c3]',
  default:          'bg-[#F7EAD8] text-[#4A6580] border border-[#E8D9C8]',
  primary:          'bg-[#E8FAF9] text-[#1a9b8e] border border-[#b5e8e4]',
  accent:           'bg-[#FFFAE0] text-[#8a6d00] border border-[#f7e87b]',
  warning:          'bg-[#FFF3E5] text-[#9e5800] border border-[#fad5a5]',
  danger:           'bg-[#FFF0EF] text-[#c0392b] border border-[#f5c6c3]',
};

const statusLabels: Record<AnimalStatus, string> = {
  adoptado:         'Adoptado',
  'en-recuperacion':'En recuperación',
  'buscando-hogar': 'Buscando hogar',
};

export function StatusBadge({ status }: { status: AnimalStatus }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold tracking-wide ${variantClasses[status]}`}
    >
      {statusLabels[status]}
    </span>
  );
}

export default function Badge({
  variant = 'default',
  children,
  className = '',
}: BadgeProps) {
  const cls = variantClasses[variant as BadgeVariant] ?? variantClasses.default;
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold ${cls} ${className}`}
    >
      {children}
    </span>
  );
}
