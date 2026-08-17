import Link from 'next/link';
import { VolunteerType } from '@/types';
import SectionHeader from '@/components/ui/SectionHeader';

interface VolunteerSectionProps {
  types: VolunteerType[];
}

export default function VolunteerSection({ types }: VolunteerSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-[#2BC4B5] to-[#22a99c]" aria-label="Voluntariado">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Tú también puedes ser parte del cambio"
          subtitle="No hace falta hacer grandes cosas. Con tu tiempo y dedicación puedes transformar la vida de un animal rescatado."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {types.map((type) => (
            <div
              key={type.id}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4" aria-hidden="true">{type.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{type.title}</h3>
              <p className="text-white/80 text-sm mb-4 leading-relaxed">{type.description}</p>
              <div className="mb-4">
                <p className="text-white/60 text-xs uppercase tracking-wide font-bold mb-2">Compromiso</p>
                <p className="text-white font-medium text-sm">{type.commitment}</p>
              </div>
              <ul className="space-y-1">
                {type.requirements.map((req) => (
                  <li key={req} className="flex items-center gap-2 text-white/80 text-sm">
                    <span className="text-[#FEE35A]" aria-hidden="true">✓</span> {req}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/voluntariado"
            className="inline-flex items-center gap-2 bg-[#FEE35A] hover:bg-[#f5d83a] text-[#012B4E] font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
          >
            QUIERO SER VOLUNTARIO 🙌
          </Link>
        </div>
      </div>
    </section>
  );
}
