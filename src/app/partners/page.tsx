import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { partnersService } from '@/services/partnersService';
import PartnerForm from '@/components/partners/PartnerForm';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'Partners y auspiciadores',
  description: 'Empresas e instituciones que apoyan la misión de CRAA Ayacucho. Únete como partner y hagamos más juntos.',
};

const benefits = [
  { icon: '🌱', title: 'Impacto real', desc: 'Tu colaboración se traduce directamente en animales rescatados y cuidados.' },
  { icon: '📣', title: 'Visibilidad', desc: 'Tu marca aparece en nuestra web, redes sociales y eventos presenciales.' },
  { icon: '🤝', title: 'Comunidad', desc: 'Formas parte de una comunidad que valora la responsabilidad social.' },
  { icon: '📊', title: 'Transparencia', desc: 'Reportes periódicos del impacto de tu colaboración.' },
];

export default function PartnersPage() {
  const all = partnersService.getAll();

  return (
    <div className="bg-[#FFF5EC]">
      <PageHero
        kicker="Partners y auspiciadores"
        title={<>Juntos podemos<br />hacer <span className="text-[#FC9A36]">más.</span></>}
        lead="Colaborar con CRAA es invertir en una comunidad más consciente y en el bienestar de los animales más vulnerables."
        imageSrc="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=85"
        imageAlt="Equipo aliado atendiendo animales rescatados"
        imageMask="40px 280px 280px 280px"
        badge={
          <div className="absolute bottom-16 -left-[30px] bg-[#012B4E] rounded-3xl px-[26px] py-5 shadow-[0_16px_34px_-12px_rgba(1,43,78,0.5)]">
            <div className="font-heading text-[38px] text-[#FEE35A] leading-none">{all.length}</div>
            <div className="text-[11px] text-white/60 uppercase tracking-[0.14em] mt-1.5">Organizaciones aliadas</div>
          </div>
        }
        actions={
          <>
            <a href="#formulario" className="inline-flex items-center justify-center gap-2 bg-[#012B4E] hover:bg-[#024070] text-white font-bold px-[34px] py-[17px] rounded-full text-base tracking-[0.02em] transition-all active:scale-95">
              QUIERO SER PARTNER
            </a>
            <Link href="/transparencia" className="inline-flex items-center justify-center gap-2 border-2 border-[#012B4E] text-[#012B4E] hover:bg-[#012B4E] hover:text-white font-semibold px-[30px] py-[15px] rounded-full text-base transition-all active:scale-95">
              Ver nuestra transparencia
            </Link>
          </>
        }
      />

      {/* Aliados */}
      <section className="pb-20 lg:pb-24" aria-label="Organizaciones que nos apoyan">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12 mb-11">
            <div className="max-w-[600px]">
              <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A93A8] mb-4">Nuestros aliados</div>
              <h2 className="font-heading text-[36px] lg:text-[48px] text-[#012B4E] leading-[1.1]">
                Organizaciones que nos apoyan
              </h2>
            </div>
            <p className="text-[#4A6580] text-base leading-[1.7] max-w-[340px] lg:mb-1.5">
              Cada alianza cubre una necesidad concreta del albergue: salud, alimento, logística o espacio.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {all.map((partner) => (
              <div key={partner.id} className="group bg-white border border-[#F0E6D8] rounded-[28px] overflow-hidden hover:shadow-[0_16px_32px_-18px_rgba(1,43,78,0.22)] hover:-translate-y-1 transition-all duration-300">
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
                  <h3 className="font-heading text-xl text-[#012B4E] mb-2">{partner.name}</h3>
                  <p className="text-[#4A6580] text-sm leading-[1.7]">{partner.description}</p>
                  {partner.website && (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-[#1a8f84] underline underline-offset-[3px] mt-3.5 hover:text-[#012B4E] transition-colors"
                    >
                      Ver sitio web →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué ser partner */}
      <section className="pb-20 lg:pb-24" aria-label="Por qué ser partner">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-[#012B4E] rounded-[44px] p-8 sm:p-12 lg:p-14 relative overflow-hidden">
            <div className="absolute -top-[140px] -right-[100px] w-[440px] h-[440px] rounded-full bg-[#2BC4B5]/12 pointer-events-none" aria-hidden="true" />
            <div className="relative">
              <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-14 lg:items-end mb-11">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2BC4B5] mb-4">Por qué colaborar</div>
                  <h2 className="font-heading text-[36px] lg:text-[50px] text-white leading-[1.08]">
                    ¿Por qué ser partner de <span className="text-[#FEE35A]">CRAA?</span>
                  </h2>
                </div>
                <p className="text-white/65 text-base leading-[1.75] lg:mb-1.5">
                  Cada colaboración se documenta y se reporta. Tu marca acompaña un trabajo verificable en Ayacucho.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {benefits.map((b) => (
                  <div key={b.title} className="bg-white/[0.07] rounded-[28px] p-7">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-5">
                      <span className="text-[22px]" aria-hidden="true">{b.icon}</span>
                    </div>
                    <h3 className="font-heading text-[21px] text-white mb-2">{b.title}</h3>
                    <p className="text-white/60 text-sm leading-[1.7]">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section id="formulario" className="pb-24 lg:pb-26 scroll-mt-24" aria-label="Formulario para ser partner">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-[#F7EAD8] border border-[#E8D9C8] rounded-[40px] p-8 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#1a8f84] mb-4">Contacto</div>
              <h2 className="font-heading text-[32px] lg:text-[42px] text-[#012B4E] leading-[1.1] mb-[18px]">
                ¿Quieres ser nuestro partner?
              </h2>
              <p className="text-[#4A6580] text-base leading-[1.75] mb-7">
                Completa el formulario y nuestro equipo se pondrá en contacto contigo para conversar sobre las formas de colaborar.
              </p>
              <div className="flex flex-col gap-2.5">
                <div className="bg-white rounded-[20px] px-[22px] py-4 flex items-center gap-3.5">
                  <span className="text-lg" aria-hidden="true">📧</span>
                  <a href="mailto:partners@craa.pe" className="text-[#012B4E] font-semibold text-[15px] hover:text-[#1a8f84] transition-colors">partners@craa.pe</a>
                </div>
                <div className="bg-white rounded-[20px] px-[22px] py-4 flex items-center gap-3.5">
                  <span className="text-lg" aria-hidden="true">📱</span>
                  <span className="text-[#012B4E] font-semibold text-[15px]">+51 987 654 321</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-[32px] p-8 lg:p-[38px]">
              <PartnerForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
