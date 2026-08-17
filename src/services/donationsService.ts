import { ImpactStat, DonationMethod } from '@/types';
import { impactStats, donationMethods } from '@/data/donations';

export const donationsService = {
  getImpactStats: (): ImpactStat[] => {
    return impactStats;
  },

  getDonationMethods: (): DonationMethod[] => {
    return donationMethods;
  },

  getDonationMethodById: (id: string): DonationMethod | undefined => {
    return donationMethods.find((m) => m.id === id);
  },
};
