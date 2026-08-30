import type { Metadata } from 'next';
import Link from 'next/link';
import { volunteersService } from '@/services/volunteersService';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'Voluntariado',
  description: 'Únete como voluntario a CRAA y ayuda a transformar vidas en Ayacucho. Voluntariado presencial, estudiantil y corporativo.',
};

const steps = [
  { n: '1', text: 'Envías el formulario con tu disponibilidad.', tone: 'bg-[#FEE35A] text-[#012B4E]' },
  { n: '2', text: 'Conversamos contigo y elegimos la modalidad.', tone: 'bg-[#FEE35A] text-[#012B4E]' },
  { n: '3', text: 'Te sumas a tu primera jornada en el albergue.', tone: 'bg-[#2BC4B5] text-white' },
];

export default function VoluntariadoPage() {
  const types = volunteersService.getVolunteerTypes();
  const campaign = volunteersService.getFridayCampaign();

  return (
    <div className="bg-[#FFF5EC]">
      <PageHero
        kicker="Voluntariado"
        title={<>Tú también puedes ser parte del <span className="text-[#FC9A36]">cambio.</span></>}
        lead="No necesitas experiencia, solo amor por los animales y ganas de ayudar. Tu tiempo puede salvar una vida."
        imageSrc="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=85"
        imageAlt="Voluntarios de CRAA cuidando animales"
        imageMask="280px 280px 40px 280px"
        badge={
          <div className="absolute bottom-[66px] -left-[30px] bg-[#012B4E] rounded-3xl px-[26px] py-5 shadow-[0_16px_34px_-12px_rgba(1,43,78,0.5)]">
            <div className="font-heading text-[34px] text-[#FEE35A] leading-none">48 h</div>
            <div className="text-[11px] text-white/60 uppercase tracking-[0.14em] mt-1.5">Te respondemos en</div>
          </div>
        }
        actions={
          <>
            <a href="#formulario" className="inline-flex items-center justify-center gap-2 bg-[#FEE35A] hover:bg-[#f5d83a] text-[#012B4E] font-extrabold px-[34px] py-[17px] rounded-full text-base tracking-[0.02em] shadow-[0_8px_20px_-6px_rgba(254,227,90,0.7)] transition-all active:scale-95">
              QUIERO SER VOLUNTARIO
            </a>
            <a href="#modalidades" className="inline-flex items-center justify-center gap-2 border-2 border-[#012B4E] text-[#012B4E] hover:bg-[#012B4E] hover:text-white font-semibold px-[30px] py-[15px] rounded-full text-base transition-all active:scale-95">
              Ver modalidades
            </a>
          </>
        }
      />

      {/* Modalidades */}
      <section id="modalidades" className="pb-20 lg:pb-24 scroll-mt-24" aria-label="Modalidades de voluntariado">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12 mb-11">
            <div className="max-w-[600px]">
              <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A93A8] mb-4">Modalidades</div>
              <h2 className="font-heading text-[36px] lg:text-[48px] text-[#012B4E] leading-[1.1]">Elige cómo contribuir</h2>
            </div>
            <p className="text-[#4A6580] text-base leading-[1.7] max-w-[340px] lg:mb-1.5">
              Elige la modalidad que mejor se adapte a tu disponibilidad. Todas suman.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {types.map((type) => (
              <div key={type.id} className="bg-white border border-[#F0E6D8] rounded-[28px] p-[30px] flex flex-col hover:shadow-[0_16px_32px_-18px_rgba(1,43,78,0.22)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-[52px] h-[52px] rounded-full bg-[#F7EAD8] flex items-center justify-center mb-[22px]">
                  <span className="text-2xl" aria-hidden="true">{type.icon}</span>
                </div>
                <h3 className="font-heading text-[22px] text-[#012B4E] mb-2.5">{type.title}</h3>
                <p className="text-[#4A6580] text-sm leading-[1.65] mb-[22px] flex-1">{type.description}</p>
                <div className="bg-[#FFF5EC] rounded-[18px] px-[18px] py-3.5 mb-5">
                  <p className="text-[10px] text-[#7A93A8] uppercase tracking-[0.14em] font-bold mb-1">Compromiso</p>
                  <p className="text-[#012B4E] font-semibold text-sm">{type.commitment}</p>
                </div>
                <div className="flex flex-col gap-2">
                  {type.requirements.map((req) => (
                    <span key={req} className="flex items-center gap-2.5 text-[#4A6580] text-sm">
                      <span className="text-[#2BC4B5] font-bold flex-shrink-0" aria-hidden="true">✓</span>
                      {req}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section id="formulario" className="pb-20 lg:pb-24 scroll-mt-24" aria-label="Formulario de voluntariado">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-[#012B4E] rounded-[44px] p-8 sm:p-12 lg:p-14 relative overflow-hidden">
            <div className="absolute -top-[140px] -right-[90px] w-[420px] h-[420px] rounded-full bg-[#FEE35A]/10 pointer-events-none" aria-hidden="true" />
            <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FEE35A] mb-4">Postula</div>
                <h2 className="font-heading text-[36px] lg:text-[48px] text-white leading-[1.08] mb-5">
                  Completa el formulario y nos ponemos en contacto
                </h2>
                <p className="text-white/65 text-base leading-[1.75] mb-8">
                  Nos pondremos en contacto contigo en menos de 48 horas para coordinar una conversación y explicarte cómo empezar.
                </p>
                <div className="flex flex-col gap-2.5 max-w-[420px]">
                  {steps.map((s) => (
                    <div key={s.n} className="flex items-center gap-4 bg-white/[0.06] rounded-[20px] px-[22px] py-4">
                      <span className={'w-[26px] h-[26px] rounded-full text-xs font-extrabold flex items-center justify-center flex-shrink-0 ' + s.tone}>
                        {s.n}
                      </span>
                      <span className="text-white/75 text-sm">{s.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/[0.07] rounded-[36px] p-9 lg:p-[42px] text-center">
                <div className="w-16 h-16 rounded-full bg-[#FEE35A] flex items-center justify-center mx-auto mb-[22px]">
                  <span className="text-[28px]" aria-hidden="true">📝</span>
                </div>
                <h3 className="font-heading text-[26px] text-white mb-2.5">Formulario de voluntariado</h3>
                <p className="text-white/60 text-sm leading-[1.7] mb-7">Toma menos de 5 minutos completarlo.</p>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#FEE35A] hover:bg-[#f5d83a] text-[#012B4E] font-extrabold px-8 py-[17px] rounded-full text-[15px] tracking-[0.02em] transition-all active:scale-95"
                >
                  COMPLETAR FORMULARIO →
                </a>
                <p className="text-white/40 text-[13px] mt-5 leading-[1.7]">
                  También puedes escribirnos a<br />
                  <a href="mailto:voluntarios@craa.pe" className="text-white/70 underline underline-offset-[3px] hover:text-white">voluntarios@craa.pe</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Viernes */}
      <section className="pb-20 lg:pb-24" aria-label="Campaña de los viernes">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-[#F7EAD8] border border-[#E8D9C8] rounded-[40px] p-8 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-14 items-center">
            <div>
              <span className="inline-flex items-center gap-2.5 bg-[#FC9A36] text-[#012B4E] rounded-full px-5 py-2.5 text-[11px] font-extrabold tracking-[0.14em] uppercase">
                Todos los viernes
              </span>
              <h2 className="font-heading text-[32px] lg:text-[42px] text-[#012B4E] leading-[1.1] mt-[22px]">
                Empieza viniendo un viernes
              </h2>
              <p className="text-[#4A6580] text-base leading-[1.75] mt-4 max-w-[520px]">
                Nuestra campaña de adopción es la forma más simple de conocernos: acompaña al equipo, conversa con los coordinadores y mira de cerca cómo trabajamos.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="bg-white rounded-3xl px-6 py-5">
                <div className="text-[10px] text-[#7A93A8] uppercase tracking-[0.14em] font-bold mb-2">Horario</div>
                <div className="font-heading text-[26px] text-[#012B4E] leading-none">{campaign.hours}</div>
              </div>
              <div className="bg-white rounded-3xl px-6 py-5">
                <div className="text-[10px] text-[#7A93A8] uppercase tracking-[0.14em] font-bold mb-2">Lugar</div>
                <div className="text-[15px] text-[#012B4E] font-semibold leading-[1.3]">{campaign.location}</div>
                <div className="text-[13px] text-[#7A93A8] mt-1 leading-[1.4]">{campaign.address}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA donar */}
      <section className="pb-24 lg:pb-26" aria-label="Donar">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12 bg-white border border-[#F0E6D8] rounded-[40px] p-8 sm:p-11 lg:px-13 shadow-[0_4px_20px_-12px_rgba(1,43,78,0.18)]">
            <div className="max-w-[640px]">
              <h2 className="font-heading text-[28px] lg:text-[36px] text-[#012B4E] leading-[1.15]">
                ¿No puedes venir pero quieres ayudar?
              </h2>
              <p className="text-[#4A6580] text-base leading-[1.7] mt-3">Una donación también es una forma poderosa de contribuir.</p>
            </div>
            <Link href="/donar" className="inline-flex items-center justify-center gap-2 bg-[#2BC4B5] hover:bg-[#22a99c] text-white font-bold px-[34px] py-[17px] rounded-full text-[15px] tracking-[0.02em] flex-shrink-0 transition-all active:scale-95">
              DONAR AHORA
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
