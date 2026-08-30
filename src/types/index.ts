// Types for CRAA - Conciencia y Rescate Animal Ayacucho

export type AnimalStatus = 'adoptado' | 'en-recuperacion' | 'buscando-hogar';
export type AnimalType = 'perro' | 'perra' | 'gato' | 'gata';

export interface Animal {
  id: string;
  name: string;
  type: AnimalType;
  age: string;
  story: string;
  status: AnimalStatus;
  image: string;
  breed?: string;
  weight?: string;
  rescueDate?: string;
  featured?: boolean;
}

export interface ImpactStat {
  id: string;
  icon: string;
  value: number;
  label: string;
  description?: string;
}

export interface DonationMethod {
  id: string;
  type: 'bcp' | 'yape' | 'paypal';
  name: string;
  description: string;
  data: BcpData | YapeData | PaypalData;
}

export interface BcpData {
  accountHolder: string;
  accountNumber: string;
  cci: string;
}

export interface YapeData {
  phone: string;
  holderName: string;
  qrImage: string;
}

export interface PaypalData {
  email: string;
  link: string;
}

export interface TransparencyItem {
  id: string;
  category: string;
  description: string;
  amount: number;
  target: number;
  period: string;
  icon: string;
  color: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  image?: string;
  collaborationType: string;
  description: string;
  website?: string;
  featured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
  social?: {
    instagram?: string;
    facebook?: string;
  };
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'ropa' | 'accesorios' | 'alimentos' | 'juguetes' | 'otros';
  stock: number;
  featured?: boolean;
}

export interface VolunteerType {
  id: string;
  title: string;
  description: string;
  icon: string;
  requirements: string[];
  commitment: string;
}

export interface FridayCampaign {
  location: string;
  address: string;
  day: string;
  hours: string;
  description: string;
  activities: CampaignActivity[];
}

export interface CampaignActivity {
  icon: string;
  title: string;
  description: string;
}
