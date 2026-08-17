import { teamMembers, shelterHistory } from '@/data/team';

export const teamService = {
  getAll: () => teamMembers,
  getById: (id: string) => teamMembers.find((m) => m.id === id),
  getShelterHistory: () => shelterHistory,
};
