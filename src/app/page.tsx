import Hero from '@/components/home/Hero';
import ImpactCounter from '@/components/home/ImpactCounter';
import DonationSection from '@/components/donations/DonationSection';
import AnimalsSection from '@/components/animals/AnimalsSection';
import TransparencySection from '@/components/transparency/TransparencySection';
import FridayCampaignSection from '@/components/home/FridayCampaignSection';
import VolunteerSection from '@/components/volunteers/VolunteerSection';
import PartnersSection from '@/components/partners/PartnersSection';
import HistorySection from '@/components/home/HistorySection';
import { donationsService } from '@/services/donationsService';
import { animalsService } from '@/services/animalsService';
import { transparencyService } from '@/services/transparencyService';
import { volunteersService } from '@/services/volunteersService';
import { partnersService } from '@/services/partnersService';

export default function HomePage() {
  const stats = donationsService.getImpactStats();
  const methods = donationsService.getDonationMethods();
  const featuredAnimals = animalsService.getFeatured();
  const transparencyItems = transparencyService.getItems();
  const volunteerTypes = volunteersService.getVolunteerTypes();
  const fridayCampaign = volunteersService.getFridayCampaign();
  const featuredPartners = partnersService.getFeatured();

  return (
    <>
      <Hero />
      <ImpactCounter stats={stats} />
      <DonationSection methods={methods} />
      <AnimalsSection animals={featuredAnimals} />
      <TransparencySection items={transparencyItems} />
      <HistorySection />
      <FridayCampaignSection campaign={fridayCampaign} />
      <VolunteerSection types={volunteerTypes} />
      <PartnersSection partners={featuredPartners} />
    </>
  );
}
