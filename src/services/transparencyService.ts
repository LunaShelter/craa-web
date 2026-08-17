import { TransparencyItem } from '@/types';
import { transparencyItems, annualReport } from '@/data/transparency';

export const transparencyService = {
  getItems: (): TransparencyItem[] => {
    return transparencyItems;
  },

  getAnnualReport: () => {
    return annualReport;
  },
};
