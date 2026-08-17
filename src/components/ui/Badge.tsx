import React from 'react';
import { AnimalStatus } from '@/types';

type BadgeVariant = 'adoptado' | 'en-recuperacion' | 'buscando-hogar' | 'default';

interface BadgeProps {
  variant?: BadgeVariant | string;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  adoptado: 'bg-green-100 text-green-700',
  'en-recuperacion': 'bg-yellow-100 text-yellow-700',
  'buscando-hogar': 'bg-[#FD544A] text-white',
  default: 'bg-gray-100 text-gray-700',
};

const statusLabels: Record<AnimalStatus, string> = {
  adoptado: '✅ Adoptado',
  'en-recuperacion': '🏥 En recuperación',
  'buscando-hogar': '🏠 Buscando hogar',
};

export function StatusBadge({ status }: { status: AnimalStatus }) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variantClasses[status]}`}
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
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${cls} ${className}`}
    >
      {children}
    </span>
  );
}
