import { TransparencyItem } from '@/types';

export const transparencyItems: TransparencyItem[] = [
  {
    id: 'food',
    category: 'Alimentación',
    description: 'Alimento balanceado, vitaminas y suplementos para todos los animales del albergue.',
    amount: 6800,
    target: 8500,
    period: 'mensual',
    icon: '🍖',
    color: '#FC9A36',
  },
  {
    id: 'vet',
    category: 'Atención veterinaria',
    description: 'Cirugías, medicamentos, tratamientos y consultas veterinarias urgentes.',
    amount: 7200,
    target: 12500,
    period: 'pendiente',
    icon: '🏥',
    color: '#FD544A',
  },
  {
    id: 'infrastructure',
    category: 'Infraestructura',
    description: 'Mejora y mantenimiento de espacios, jaulas, áreas de descanso y zona de cuarentena.',
    amount: 9500,
    target: 18000,
    period: 'objetivo',
    icon: '🏗️',
    color: '#2BC4B5',
  },
  {
    id: 'sterilization',
    category: 'Esterilización',
    description: 'Campañas de esterilización para control responsable de la población animal.',
    amount: 3200,
    target: 5000,
    period: 'trimestral',
    icon: '✂️',
    color: '#FEE35A',
  },
];

export const annualReport = {
  year: 2024,
  totalRescued: 287,
  totalAdopted: 214,
  totalSpent: 186400,
  breakdown: [
    { category: 'Alimentación', percentage: 35, amount: 65240 },
    { category: 'Atención veterinaria', percentage: 30, amount: 55920 },
    { category: 'Infraestructura', percentage: 20, amount: 37280 },
    { category: 'Esterilización', percentage: 10, amount: 18640 },
    { category: 'Operaciones', percentage: 5, amount: 9320 },
  ],
};
