import { Animal, AnimalStatus, AnimalType } from '@/types';
import { animals } from '@/data/animals';

// Service layer: currently uses mock data
// To connect to a real API, replace the implementations below
// while keeping the same function signatures.

export const animalsService = {
  getAll: (): Animal[] => {
    return animals;
  },

  getFeatured: (): Animal[] => {
    return animals.filter((a) => a.featured);
  },

  getById: (id: string): Animal | undefined => {
    return animals.find((a) => a.id === id);
  },

  getByStatus: (status: AnimalStatus): Animal[] => {
    return animals.filter((a) => a.status === status);
  },

  getByType: (type: AnimalType): Animal[] => {
    return animals.filter((a) => a.type === type);
  },

  getAvailableForAdoption: (): Animal[] => {
    return animals.filter((a) => a.status === 'buscando-hogar');
  },
};
