import Link from 'next/link';
import Image from 'next/image';
import { Partner } from '@/types';
import SectionHeader from '@/components/ui/SectionHeader';

interface PartnersSectionProps {
  partners: Partner[];
}

export default function PartnersSection({ partners }: PartnersSectionProps) {
  return (
    <section className="py-20 bg-white" aria-label="Partners y auspiciadores">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Juntos podemos hacer más"
          subtitle="Empresas, organizaciones e instituciones que creen en nuestra misión y nos ayudan a seguir adelante."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-[#FFF5EC] rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              {partner.image && (
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={partner.image}
                    alt={`${partner.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[#012B4E]/30" />
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-[#2BC4B5] text-white text-xs font-bold px-3 py-1 rounded-full">
                      {partner.collaborationType}
                    </span>
                  </div>
                </div>
              )}
              <div className="p-5">
                <h3 className="font-bold text-[#012B4E] text-lg mb-2">{partner.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/partners"
            className="inline-flex items-center gap-2 bg-[#012B4E] hover:bg-[#024070] text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
          >
            QUIERO SER PARTNER 🤝
          </Link>
        </div>
      </div>
    </section>
  );
}
