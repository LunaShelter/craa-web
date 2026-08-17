import { ImpactStat, DonationMethod } from '@/types';

export const impactStats: ImpactStat[] = [
  {
    id: 'rescued',
    icon: '🐶',
    value: 1248,
    label: 'animales rescatados',
    description: 'Desde nuestra fundación en 2018',
  },
  {
    id: 'adopted',
    icon: '❤️',
    value: 936,
    label: 'animales adoptados',
    description: 'Encontraron su hogar definitivo',
  },
  {
    id: 'sheltered',
    icon: '🏠',
    value: 87,
    label: 'animales en el albergue',
    description: 'Actualmente bajo nuestro cuidado',
  },
  {
    id: 'treatments',
    icon: '💉',
    value: 2340,
    label: 'tratamientos realizados',
    description: 'Atención veterinaria brindada',
  },
];

export const donationMethods: DonationMethod[] = [
  {
    id: 'bcp',
    type: 'bcp',
    name: 'BCP',
    description: 'Transferencia bancaria desde cualquier banco del Perú',
    data: {
      accountHolder: 'Asociación CRAA - Conciencia y Rescate Animal Ayacucho',
      accountNumber: '191-12345678-0-12',
      cci: '002-191-001234567800-12',
    },
  },
  {
    id: 'yape',
    type: 'yape',
    name: 'Yape',
    description: 'Rápido y fácil desde tu celular',
    data: {
      phone: '987 654 321',
      holderName: 'CRAA Ayacucho',
      qrImage: '/images/qr-yape-placeholder.png',
    },
  },
  {
    id: 'paypal',
    type: 'paypal',
    name: 'PayPal',
    description: '¿Estás fuera de Perú? También puedes ayudarnos desde cualquier lugar.',
    data: {
      email: 'donaciones@craa.pe',
      link: 'https://paypal.me/craayacucho',
    },
  },
];
