import Link from 'next/link';
import { VolunteerType } from '@/types';

interface VolunteerSectionProps {
  types: VolunteerType[];
}

export default function VolunteerSection({ types }: VolunteerSectionProps) {
  return (
    <section className="pb-20 lg:pb-26 bg-[#FFF5EC]" aria-label="Voluntariado">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12 mb-11">
          <div className="max-w-[600px]">
            <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A93A8] mb-4">Voluntariado</div>
            <h2 className="font-heading text-[36px] lg:text-[48px] text-[#012B4E] leading-[1.1]">
              Tú también puedes ser parte del cambio
            </h2>
          </div>
          <Link
            href="/voluntariado"
            className="inline-flex self-start items-center gap-2.5 bg-[#FEE35A] hover:bg-[#f5d83a] text-[#012B4E] font-extrabold px-8 py-4 rounded-full text-sm tracking-[0.02em] flex-shrink-0 transition-all duration-200 active:scale-95"
          >
            QUIERO SER VOLUNTARIO
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {types.map((type) => (
            <div key={type.id} className="bg-white border border-[#F0E6D8] rounded-[28px] p-[30px] h-full flex flex-col">
              <div className="w-13 h-13 w-[52px] h-[52px] rounded-full bg-[#F7EAD8] flex items-center justify-center mb-[22px]">
                <span className="text-2xl" aria-hidden="true">{type.icon}</span>
              </div>
              <h3 className="font-heading text-[22px] text-[#012B4E] mb-2.5">{type.title}</h3>
              <p className="text-[#4A6580] text-sm mb-[22px] leading-[1.65]">{type.description}</p>

              <div className="bg-[#FFF5EC] rounded-[18px] px-[18px] py-3.5 mb-5">
                <p className="text-[10px] text-[#7A93A8] uppercase tracking-[0.14em] font-bold mb-1">Compromiso</p>
                <p className="text-[#012B4E] font-semibold text-sm">{type.commitment}</p>
              </div>

              <ul className="flex flex-col gap-2 mt-auto">
                {type.requirements.map((req) => (
                  <li key={req} className="flex items-start gap-2.5 text-[#4A6580] text-sm">
                    <span className="text-[#2BC4B5] font-bold flex-shrink-0" aria-hidden="true">✓</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
