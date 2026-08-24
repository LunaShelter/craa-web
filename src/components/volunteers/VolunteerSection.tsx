import Link from 'next/link';
import { VolunteerType } from '@/types';
import SectionHeader from '@/components/ui/SectionHeader';

interface VolunteerSectionProps {
  types: VolunteerType[];
}

export default function VolunteerSection({ types }: VolunteerSectionProps) {
  return (
    <section className="py-24 bg-[#012B4E]" aria-label="Voluntariado">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          title="Tú también puedes ser parte del cambio"
          subtitle="No hace falta hacer grandes cosas. Con tu tiempo y dedicación puedes transformar la vida de un animal rescatado."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {types.map((type) => (
            <div
              key={type.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                <span className="text-2xl" aria-hidden="true">{type.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{type.title}</h3>
              <p className="text-white/60 text-sm mb-5 leading-relaxed">{type.description}</p>
              <div className="mb-4">
                <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-1.5">Compromiso</p>
                <p className="text-white/80 font-medium text-sm">{type.commitment}</p>
              </div>
              <div className="pt-4 border-t border-white/10 space-y-1.5">
                {type.requirements.map((req) => (
                  <li key={req} className="flex items-center gap-2 text-white/60 text-sm list-none">
                    <span className="text-[#2BC4B5] flex-shrink-0" aria-hidden="true">✓</span>
                    {req}
                  </li>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/voluntariado"
            className="inline-flex items-center gap-2 bg-[#FEE35A] hover:bg-[#f5d83a] text-[#012B4E] font-bold px-8 py-3.5 rounded-xl text-sm transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
          >
            QUIERO SER VOLUNTARIO
          </Link>
        </div>
      </div>
    </section>
  );
}
