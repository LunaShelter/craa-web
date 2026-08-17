import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { teamService } from '@/services/teamService';
import { ctaButtonClasses } from '@/lib/designTokens';

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
      <section className="bg-[#012B4E] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#2BC4B5]/20 border border-[#2BC4B5]/40 text-[#2BC4B5] px-4 py-2 rounded-full text-sm font-medium mb-6">
            🐾 Sobre nosotros
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Somos CRAA — Conciencia y<br className="hidden md:block" /> Rescate Animal Ayacucho
          </h1>
          <p className="text-white/80 text-xl leading-relaxed">
            Fundados en {founded} por {founder}, trabajamos cada día para que ningún animal en Ayacucho sufra por abandono o maltrato.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#012B4E] mb-6">Nuestra historia</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                {story.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative h-80 lg:h-full min-h-80 rounded-2xl overflow-hidden shadow-xl">
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
      <section className="py-16 bg-[#FFF5EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-[#012B4E] mb-3">Misión</h3>
              <p className="text-gray-600 leading-relaxed">{mission}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold text-[#012B4E] mb-3">Visión</h3>
              <p className="text-gray-600 leading-relaxed">{vision}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-[#012B4E] mb-3">Valores</h3>
              <ul className="space-y-2">
                {values.map((v) => (
                  <li key={v.title} className="flex items-start gap-2 text-gray-600">
                    <span className="text-[#2BC4B5] font-bold">•</span>
                    <span><strong>{v.title}:</strong> {v.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Work */}
          <h2 className="text-3xl font-bold text-[#012B4E] text-center mb-10">Nuestro trabajo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {works.map((w) => (
              <div key={w.label} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
                <span className="text-4xl mb-3 block" aria-hidden="true">{w.icon}</span>
                <h4 className="font-bold text-[#012B4E] text-lg mb-2">{w.label}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#012B4E] mb-4">Nuestro equipo</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Personas apasionadas por el bienestar animal que dedican su tiempo y corazón a este trabajo.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.id} className="text-center group">
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src={member.image}
                    alt={`Foto de ${member.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold text-[#012B4E] text-lg">{member.name}</h3>
                <p className="text-[#2BC4B5] font-medium text-sm mb-2">{member.role}</p>
                {member.bio && <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#012B4E] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">¿Quieres ser parte del cambio?</h2>
          <p className="text-white/80 mb-8">Puedes ayudarnos donando, siendo voluntario o siendo partner.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donar" className={`inline-flex items-center justify-center gap-2 ${ctaButtonClasses} font-bold px-8 py-4 rounded-xl transition-all active:scale-95`}>
              DONAR AHORA ❤️
            </Link>
            <Link href="/voluntariado" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#012B4E] font-bold px-8 py-4 rounded-xl transition-all active:scale-95">
              SER VOLUNTARIO
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
