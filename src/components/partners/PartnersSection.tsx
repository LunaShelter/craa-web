import Link from 'next/link';
import Image from 'next/image';
import { Partner } from '@/types';
import SectionHeader from '@/components/ui/SectionHeader';

interface PartnersSectionProps {
  partners: Partner[];
}

export default function PartnersSection({ partners }: PartnersSectionProps) {
  return (
    <section className="py-24 bg-white" aria-label="Partners y auspiciadores">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          title="Juntos podemos hacer más"
          subtitle="Empresas, organizaciones e instituciones que creen en nuestra misión y nos ayudan a seguir adelante."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group bg-[#F7EAD8] rounded-2xl overflow-hidden border border-[#E8D9C8] hover:shadow-[0_8px_24px_0_rgba(1,43,78,0.10)] hover:-translate-y-1 transition-all duration-300"
            >
              {partner.image && (
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[#012B4E]/25" />
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-[#2BC4B5] text-white text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wide">
                      {partner.collaborationType}
                    </span>
                  </div>
                </div>
              )}
              <div className="p-5">
                <h3 className="font-bold text-[#012B4E] text-base mb-2">{partner.name}</h3>
                <p className="text-[#4A6580] text-sm leading-relaxed">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/partners"
            className="inline-flex items-center gap-2 bg-[#012B4E] hover:bg-[#024070] text-white font-semibold px-8 py-3.5 rounded-xl text-sm transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
          >
            QUIERO SER PARTNER
          </Link>
        </div>
      </div>
    </section>
  );
}
