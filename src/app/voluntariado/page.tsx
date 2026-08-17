import type { Metadata } from 'next';
import Link from 'next/link';
import { volunteersService } from '@/services/volunteersService';
import FridayCampaignSection from '@/components/home/FridayCampaignSection';
import { ctaButtonClasses } from '@/lib/designTokens';

export const metadata: Metadata = {
  title: 'Voluntariado',
  description: 'Únete como voluntario a CRAA y ayuda a transformar vidas en Ayacucho. Voluntariado presencial, estudiantil y corporativo.',
};

export default function VoluntariadoPage() {
  const types = volunteersService.getVolunteerTypes();
  const campaign = volunteersService.getFridayCampaign();

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#012B4E] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-[#2BC4B5]/20 border border-[#2BC4B5]/40 text-[#2BC4B5] px-4 py-2 rounded-full text-sm font-medium mb-6">
            🙌 Voluntariado
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tú también puedes ser<br />parte del cambio</h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            No necesitas experiencia, solo amor por los animales y ganas de ayudar. Tu tiempo puede salvar una vida.
          </p>
          <div className="mt-8">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FEE35A] hover:bg-[#f5d83a] text-[#012B4E] font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95 text-lg"
            >
              QUIERO SER VOLUNTARIO 🙌
            </a>
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#012B4E] mb-3">Formas de ayudar</h2>
            <p className="text-gray-600 text-lg">Elige la modalidad que mejor se adapte a tu disponibilidad.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {types.map((type) => (
              <div key={type.id} className="bg-[#FFF5EC] rounded-2xl p-8 hover:shadow-md transition-all hover:-translate-y-1">
                <div className="text-4xl mb-4" aria-hidden="true">{type.icon}</div>
                <h3 className="text-xl font-bold text-[#012B4E] mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{type.description}</p>
                <div className="bg-white rounded-xl p-4 mb-4">
                  <p className="text-xs text-[#2BC4B5] font-bold uppercase tracking-wide mb-2">Compromiso requerido</p>
                  <p className="text-gray-700 font-medium text-sm">{type.commitment}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide font-bold mb-2">Requisitos</p>
                  <ul className="space-y-1">
                    {type.requirements.map((req) => (
                      <li key={req} className="flex items-center gap-2 text-gray-600 text-sm">
                        <span className="text-[#2BC4B5]" aria-hidden="true">✓</span> {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form CTA */}
      <section className="py-16 bg-gradient-to-br from-[#2BC4B5] to-[#22a99c] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-5xl mb-6" aria-hidden="true">🐾</div>
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para unirte?</h2>
          <p className="text-white/80 text-lg mb-8">
            Completa nuestro formulario de voluntariado y nos pondremos en contacto contigo en menos de 48 horas.
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#012B4E] font-bold px-10 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95 text-lg"
          >
            COMPLETAR FORMULARIO →
          </a>
          <p className="text-white/60 text-sm mt-4">
            También puedes escribirnos a{' '}
            <a href="mailto:voluntarios@craa.pe" className="text-white underline">voluntarios@craa.pe</a>
          </p>
        </div>
      </section>

      {/* Friday campaign preview */}
      <FridayCampaignSection campaign={campaign} />

      {/* CTA donar */}
      <section className="py-16 bg-[#012B4E] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">¿No puedes venir pero quieres ayudar?</h2>
          <p className="text-white/80 mb-8">Una donación también es una forma poderosa de contribuir.</p>
          <Link href="/donar" className={`inline-flex items-center gap-2 ${ctaButtonClasses} font-bold px-8 py-4 rounded-xl transition-all active:scale-95`}>
            DONAR AHORA ❤️
          </Link>
        </div>
      </section>
    </div>
  );
}
