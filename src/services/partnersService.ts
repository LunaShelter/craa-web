import { Partner } from '@/types';
import { partners } from '@/data/partners';

export const partnersService = {
  getAll: (): Partner[] => partners,
  getFeatured: (): Partner[] => partners.filter((p) => p.featured),
  getById: (id: string): Partner | undefined => partners.find((p) => p.id === id),
};
