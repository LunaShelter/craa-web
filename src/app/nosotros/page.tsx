import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { teamService } from '@/services/teamService';

export const metadata: Metadata = {
  title: 'Nosotros',
  description: 'Conoce la historia, misión, visión y equipo de CRAA — Conciencia y Rescate Animal Ayacucho.',
};

export default function NosotrosPage() {
  const { mission, vision, values, story, founded, founder } = teamService.getShelterHistory();
  const team = teamService.getAll();

  const works = [
    { icon: '🐾', label: 'Rescate', desc: 'Operativos de rescate en toda la región de Ayacucho, disponibles 24/7.' },
    { icon: '🏥', label: 'Atención veterinaria', desc: 'Diagnóstico, tratamiento y seguimiento a cada animal rescatado.' },
    { icon: '🍖', label: 'Alimentación', desc: 'Dieta balanceada y adecuada para cada animal según su condición.' },
    { icon: '💉', label: 'Vacunación', desc: 'Protocolo completo de vacunación antes de cada adopción.' },
    { icon: '✂️', label: 'Esterilización', desc: 'Campañas de esterilización para control responsable de la población.' },
    { icon: '🏠', label: 'Adopción', desc: 'Proceso responsable para encontrar la familia perfecta para cada animal.' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#012B4E] text-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Somos CRAA — Conciencia y<br className="hidden md:block" /> Rescate Animal Ayacucho
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
            Fundados en {founded} por {founder}, trabajamos cada día para que ningún animal en Ayacucho sufra por abandono o maltrato.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-[#012B4E] mb-6 tracking-tight leading-tight">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-[#4A6580] leading-relaxed text-base">
                {story.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-[0_12px_40px_0_rgba(1,43,78,0.15)]" style={{ aspectRatio: '4/3' }}>
              <Image
                src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=800&q=80"
                alt="Equipo CRAA con animales rescatados"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20 bg-[#FFF5EC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">            <div className="bg-white rounded-2xl p-7 border border-[#F0E6D8] shadow-[0_2px_8px_0_rgba(1,43,78,0.06)]">
              <div className="text-[10px] text-[#2BC4B5] uppercase tracking-widest font-bold mb-4">Misión</div>
              <h3 className="text-lg font-bold text-[#012B4E] mb-3">¿Qué hacemos?</h3>
              <p className="text-[#4A6580] leading-relaxed text-sm">{mission}</p>
            </div>
            <div className="bg-white rounded-2xl p-7 border border-[#F0E6D8] shadow-[0_2px_8px_0_rgba(1,43,78,0.06)]">
              <div className="text-[10px] text-[#2BC4B5] uppercase tracking-widest font-bold mb-4">Visión</div>
              <h3 className="text-lg font-bold text-[#012B4E] mb-3">¿Hacia dónde vamos?</h3>
              <p className="text-[#4A6580] leading-relaxed text-sm">{vision}</p>
            </div>
            <div className="bg-white rounded-2xl p-7 border border-[#F0E6D8] shadow-[0_2px_8px_0_rgba(1,43,78,0.06)]">
              <div className="text-[10px] text-[#2BC4B5] uppercase tracking-widest font-bold mb-4">Valores</div>
              <h3 className="text-lg font-bold text-[#012B4E] mb-3">Nuestros principios</h3>
              <ul className="space-y-2">
                {values.map((v) => (
                  <li key={v.title} className="flex items-start gap-2 text-[#4A6580] text-sm">
                    <span className="text-[#2BC4B5] font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span><strong className="text-[#012B4E]">{v.title}:</strong> {v.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Work */}
          <h2 className="text-4xl font-extrabold text-[#012B4E] mb-10 tracking-tight text-center">Nuestro trabajo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {works.map((w) => (
              <div key={w.label} className="bg-white rounded-2xl p-6 border border-[#F0E6D8] shadow-[0_1px_4px_0_rgba(1,43,78,0.04)] hover:shadow-[0_4px_16px_0_rgba(1,43,78,0.10)] hover:-translate-y-0.5 transition-all duration-200">
                <span className="text-3xl mb-3 block" aria-hidden="true">{w.icon}</span>
                <h4 className="font-bold text-[#012B4E] text-base mb-2">{w.label}</h4>
                <p className="text-[#4A6580] text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-[#012B4E] mb-4 tracking-tight">Nuestro equipo</h2>
            <p className="text-[#4A6580] text-lg max-w-2xl mx-auto">
              Personas apasionadas por el bienestar animal que dedican su tiempo y corazón a este trabajo.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.id} className="text-center group">
                <div className="relative w-36 h-36 mx-auto mb-4 rounded-2xl overflow-hidden shadow-[0_4px_16px_0_rgba(1,43,78,0.12)]">
                  <Image
                    src={member.image}
                    alt={`Foto de ${member.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold text-[#012B4E] text-base">{member.name}</h3>
                <p className="text-[#2BC4B5] font-semibold text-xs uppercase tracking-wide mb-2">{member.role}</p>
                {member.bio && <p className="text-[#7A93A8] text-sm leading-relaxed">{member.bio}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#012B4E] text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">¿Quieres ser parte del cambio?</h2>
          <p className="text-white/55 mb-10 text-lg">Puedes ayudarnos donando, siendo voluntario o siendo partner.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donar" className="inline-flex items-center justify-center gap-2 bg-[#2BC4B5] hover:bg-[#22a99c] text-white font-bold px-8 py-3.5 rounded-xl transition-all active:scale-95 text-sm shadow-lg">
              DONAR AHORA
            </Link>
            <Link href="/voluntariado" className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:border-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-xl transition-all active:scale-95 text-sm">
              SER VOLUNTARIO
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
