import type { Metadata } from 'next';
import Link from 'next/link';
import { volunteersService } from '@/services/volunteersService';
import FridayCampaignSection from '@/components/home/FridayCampaignSection';

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
      <section className="bg-[#012B4E] text-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Tú también puedes ser<br />parte del cambio
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            No necesitas experiencia, solo amor por los animales y ganas de ayudar. Tu tiempo puede salvar una vida.
          </p>
          <div className="mt-10">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FEE35A] hover:bg-[#f5d83a] text-[#012B4E] font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95 text-sm"
            >
              QUIERO SER VOLUNTARIO
            </a>
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-extrabold text-[#012B4E] mb-3 tracking-tight">Elige cómo contribuir</h2>
            <p className="text-[#4A6580] text-base">Elige la modalidad que mejor se adapte a tu disponibilidad.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {types.map((type) => (
              <div key={type.id} className="bg-[#F7EAD8] rounded-2xl p-7 border border-[#E8D9C8] hover:shadow-[0_4px_16px_0_rgba(1,43,78,0.10)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-5 shadow-sm">
                  <span className="text-2xl" aria-hidden="true">{type.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-[#012B4E] mb-2">{type.title}</h3>
                <p className="text-[#4A6580] mb-5 leading-relaxed text-sm">{type.description}</p>
                <div className="bg-white rounded-xl p-4 mb-4 border border-[#F0E6D8]">
                  <p className="text-[10px] text-[#2BC4B5] font-bold uppercase tracking-widest mb-1.5">Compromiso requerido</p>
                  <p className="text-[#012B4E] font-semibold text-sm">{type.commitment}</p>
                </div>
                <div>
                  <p className="text-[10px] text-[#7A93A8] uppercase tracking-widest font-bold mb-2">Requisitos</p>
                  <ul className="space-y-1.5">
                    {type.requirements.map((req) => (
                      <li key={req} className="flex items-center gap-2 text-[#4A6580] text-sm">
                        <span className="text-[#2BC4B5] flex-shrink-0" aria-hidden="true">✓</span> {req}
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
      <section className="py-24 bg-[#012B4E] text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">Completa el formulario</h2>
          <p className="text-white/55 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Completa nuestro formulario de voluntariado y nos pondremos en contacto contigo en menos de 48 horas.
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FEE35A] hover:bg-[#f5d83a] text-[#012B4E] font-bold px-10 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95 text-sm"
          >
            COMPLETAR FORMULARIO →
          </a>
          <p className="text-white/30 text-sm mt-5">
            También puedes escribirnos a{' '}
            <a href="mailto:voluntarios@craa.pe" className="text-white/60 hover:text-white underline">voluntarios@craa.pe</a>
          </p>
        </div>
      </section>

      {/* Friday campaign preview */}
      <FridayCampaignSection campaign={campaign} />

      {/* CTA donar */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-[#012B4E] mb-4 tracking-tight">¿No puedes venir pero quieres ayudar?</h2>
          <p className="text-[#4A6580] mb-10 text-lg">Una donación también es una forma poderosa de contribuir.</p>
          <Link href="/donar" className="inline-flex items-center justify-center gap-2 bg-[#2BC4B5] hover:bg-[#22a99c] text-white font-bold px-8 py-3.5 rounded-xl transition-all active:scale-95 text-sm shadow-lg">
            DONAR AHORA
          </Link>
        </div>
      </section>
    </div>
  );
}
