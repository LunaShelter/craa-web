import Link from 'next/link';
import Image from 'next/image';
import { Partner } from '@/types';

interface PartnersSectionProps {
  partners: Partner[];
}

export default function PartnersSection({ partners }: PartnersSectionProps) {
  return (
    <section className="pb-20 lg:pb-26 bg-[#FFF5EC]" aria-label="Partners y auspiciadores">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12 mb-11">
          <div className="max-w-[560px]">
            <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A93A8] mb-4">Partners</div>
            <h2 className="font-heading text-[36px] lg:text-[48px] text-[#012B4E] leading-[1.1] mb-4">
              Juntos podemos hacer más
            </h2>
            <p className="text-[#4A6580] text-base leading-[1.7]">
              Empresas, organizaciones e instituciones que creen en nuestra misión y nos ayudan a seguir adelante.
            </p>
          </div>
          <Link
            href="/partners"
            className="inline-flex self-start items-center gap-2.5 bg-[#012B4E] hover:bg-[#024070] text-white font-bold px-8 py-4 rounded-full text-sm tracking-[0.02em] flex-shrink-0 transition-all duration-200 active:scale-95"
          >
            QUIERO SER PARTNER
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group bg-white border border-[#F0E6D8] rounded-[28px] overflow-hidden hover:shadow-[0_16px_32px_-18px_rgba(1,43,78,0.25)] hover:-translate-y-1 transition-all duration-300 h-full"
            >
              {partner.image && (
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-cover [filter:saturate(0.85)_contrast(0.93)_brightness(1.02)] transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute bottom-3.5 left-3.5">
                    <span className="bg-white text-[#012B4E] text-[10px] font-extrabold px-[15px] py-[7px] rounded-full uppercase tracking-[0.1em]">
                      {partner.collaborationType}
                    </span>
                  </div>
                </div>
              )}
              <div className="p-6">
                <h3 className="font-bold text-[#012B4E] text-[17px] mb-2">{partner.name}</h3>
                <p className="text-[#4A6580] text-sm leading-[1.65]">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
