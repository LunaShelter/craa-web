import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { teamService } from '@/services/teamService';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'Nosotros',
  description: 'Conoce la historia, misión, visión y equipo de CRAA — Conciencia y Rescate Animal Ayacucho.',
};

const works = [
  { icon: '🐾', label: 'Rescate', desc: 'Operativos de rescate en toda la región de Ayacucho, disponibles 24/7.' },
  { icon: '🏥', label: 'Atención veterinaria', desc: 'Diagnóstico, tratamiento y seguimiento a cada animal rescatado.' },
  { icon: '🍖', label: 'Alimentación', desc: 'Dieta balanceada y adecuada para cada animal según su condición.' },
  { icon: '💉', label: 'Vacunación', desc: 'Protocolo completo de vacunación antes de cada adopción.' },
  { icon: '✂️', label: 'Esterilización', desc: 'Campañas de esterilización para control responsable de la población.' },
  { icon: '🏠', label: 'Adopción', desc: 'Proceso responsable para encontrar la familia perfecta para cada animal.' },
];

export default function NosotrosPage() {
  const { mission, vision, values, story, founded, founder } = teamService.getShelterHistory();
  const team = teamService.getAll();

  return (
    <div className="bg-[#FFF5EC]">
      <PageHero
        kicker="Nosotros"
        title={
          <>
            Somos CRAA —<br />Conciencia y Rescate<br />
            <span className="text-[#FC9A36]">Animal Ayacucho.</span>
          </>
        }
        lead={`Fundados en \${founded} por \${founder}, trabajamos cada día para que ningún animal en Ayacucho sufra por abandono o maltrato.`}
        imageSrc="https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=1200&q=85"
        imageAlt="Equipo CRAA con animales rescatados"
        imageMask="280px 40px 280px 280px"
        badge={
          <div className="absolute bottom-9 -left-[30px] bg-[#FEE35A] rounded-full w-[126px] h-[126px] flex flex-col items-center justify-center shadow-[0_14px_30px_-12px_rgba(1,43,78,0.45)]">
            <div className="font-heading text-[32px] text-[#012B4E] leading-none">{founded}</div>
            <div className="text-[10px] text-[#012B4E]/70 font-bold mt-1 uppercase tracking-[0.12em]">Fundado</div>
          </div>
        }
        actions={
          <>
            <Link href="/donar" className="inline-flex items-center justify-center gap-2 bg-[#2BC4B5] hover:bg-[#22a99c] text-white font-bold px-[34px] py-[17px] rounded-full text-base tracking-[0.02em] shadow-[0_8px_20px_-6px_rgba(43,196,181,0.55)] transition-all active:scale-95">
              DONAR AHORA
            </Link>
            <Link href="/voluntariado" className="inline-flex items-center justify-center gap-2 border-2 border-[#012B4E] text-[#012B4E] hover:bg-[#012B4E] hover:text-white font-semibold px-[30px] py-[15px] rounded-full text-base transition-all active:scale-95">
              Únete al equipo
            </Link>
          </>
        }
      />

      {/* Historia */}
      <section className="pb-20 lg:pb-24" aria-label="Nuestra historia">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-[72px] items-start">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A93A8] mb-4">Nuestra historia</div>
              <h2 className="font-heading text-[34px] lg:text-[44px] text-[#012B4E] leading-[1.1]">
                Un grupo que decidió no mirar hacia otro lado
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              {story.split('\n\n').filter(Boolean).map((paragraph, i) => (
                <p key={i} className="text-[#4A6580] text-[17px] leading-[1.8]">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Misión, visión y valores */}
      <section className="pb-20 lg:pb-24" aria-label="Misión, visión y valores">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-[#F7EAD8] border border-[#E8D9C8] rounded-[40px] p-8 sm:p-12 lg:p-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-white rounded-[28px] p-8">
                <div className="text-[#1a8f84] font-bold text-[11px] uppercase tracking-[0.14em] mb-3.5">Misión</div>
                <h3 className="font-heading text-[26px] text-[#012B4E] mb-3">¿Qué hacemos?</h3>
                <p className="text-[#4A6580] text-[15px] leading-[1.75]">{mission}</p>
              </div>
              <div className="bg-white rounded-[28px] p-8">
                <div className="text-[#1a8f84] font-bold text-[11px] uppercase tracking-[0.14em] mb-3.5">Visión</div>
                <h3 className="font-heading text-[26px] text-[#012B4E] mb-3">¿Hacia dónde vamos?</h3>
                <p className="text-[#4A6580] text-[15px] leading-[1.75]">{vision}</p>
              </div>
            </div>

            {/* Separador con el título centrado */}
            <div className="flex items-center gap-5 mt-9 mb-7">
              <div className="flex-1 h-px bg-[#E0CFB8]" aria-hidden="true" />
              <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8a7a63] whitespace-nowrap">
                Nuestros valores
              </div>
              <div className="flex-1 h-px bg-[#E0CFB8]" aria-hidden="true" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
              {values.map((v) => (
                <div key={v.title} className="bg-white/55 rounded-3xl px-6 py-[22px]">
                  <h4 className="font-heading text-xl text-[#012B4E] mb-1.5">{v.title}</h4>
                  <p className="text-[#4A6580] text-[13px] leading-[1.6]">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro trabajo */}
      <section className="pb-20 lg:pb-24" aria-label="Nuestro trabajo">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12 mb-11">
            <div className="max-w-[600px]">
              <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A93A8] mb-4">Nuestro trabajo</div>
              <h2 className="font-heading text-[36px] lg:text-[48px] text-[#012B4E] leading-[1.1]">
                Seis frentes, un mismo propósito
              </h2>
            </div>
            <p className="text-[#4A6580] text-base leading-[1.7] max-w-[340px] lg:mb-1.5">
              Cada animal que llega al albergue pasa por todo este recorrido antes de encontrar una familia.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {works.map((w) => (
              <div key={w.label} className="bg-white border border-[#F0E6D8] rounded-[28px] p-[30px] hover:shadow-[0_16px_32px_-18px_rgba(1,43,78,0.22)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-13 h-13 rounded-full bg-[#F7EAD8] flex items-center justify-center mb-5" style={{ width: 52, height: 52 }}>
                  <span className="text-2xl" aria-hidden="true">{w.icon}</span>
                </div>
                <h3 className="font-heading text-[22px] text-[#012B4E] mb-2">{w.label}</h3>
                <p className="text-[#4A6580] text-sm leading-[1.7]">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="pb-20 lg:pb-24" aria-label="Nuestro equipo">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12 mb-12">
            <div className="max-w-[620px]">
              <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A93A8] mb-4">Nuestro equipo</div>
              <h2 className="font-heading text-[36px] lg:text-[48px] text-[#012B4E] leading-[1.1]">
                Las personas detrás del albergue
              </h2>
            </div>
            <p className="text-[#4A6580] text-base leading-[1.7] max-w-[340px] lg:mb-1.5">
              Personas apasionadas por el bienestar animal que dedican su tiempo y corazón a este trabajo.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px]">
            {team.map((member) => (
              <div key={member.id} className="bg-white border border-[#F0E6D8] rounded-[28px] p-7">
                <div className="relative w-[110px] h-[110px] rounded-full overflow-hidden mb-[22px] shadow-[0_12px_26px_-14px_rgba(1,43,78,0.4)]">
                  <Image src={member.image} alt={`Foto de \${member.name}`} fill className="object-cover [filter:saturate(0.9)_contrast(0.95)]" sizes="110px" />
                </div>
                <h3 className="font-heading text-xl text-[#012B4E] mb-1.5">{member.name}</h3>
                <p className="text-[11px] font-bold text-[#1a8f84] uppercase tracking-[0.12em] mb-3">{member.role}</p>
                {member.bio && <p className="text-[#4A6580] text-sm leading-[1.7]">{member.bio}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 lg:pb-26" aria-label="Súmate a CRAA">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-[#012B4E] rounded-[44px] p-8 sm:p-12 lg:p-14 relative overflow-hidden">
            <div className="absolute -top-[140px] -right-[90px] w-[420px] h-[420px] rounded-full bg-[#FC9A36]/12 pointer-events-none" aria-hidden="true" />
            <div className="relative grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-14 items-center">
              <div>
                <h2 className="font-heading text-[36px] lg:text-[50px] text-white leading-[1.08]">
                  ¿Quieres ser parte del <span className="text-[#FEE35A]">cambio?</span>
                </h2>
                <p className="text-white/65 text-[17px] leading-[1.75] mt-5 max-w-[520px]">
                  Puedes ayudarnos donando, siendo voluntario o siendo partner. Cada forma de apoyo se traduce en un animal rescatado.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/donar" className="flex items-center justify-center gap-2 bg-[#2BC4B5] hover:bg-[#22a99c] text-white font-bold px-8 py-[17px] rounded-full text-[15px] tracking-[0.02em] transition-all active:scale-95">
                  DONAR AHORA
                </Link>
                <Link href="/voluntariado" className="flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white hover:bg-white/10 text-white font-semibold px-8 py-[15px] rounded-full text-[15px] transition-all active:scale-95">
                  SER VOLUNTARIO
                </Link>
                <Link href="/partners" className="flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white hover:bg-white/10 text-white font-semibold px-8 py-[15px] rounded-full text-[15px] transition-all active:scale-95">
                  SER PARTNER
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
