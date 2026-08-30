import type { Metadata } from 'next';
import Link from 'next/link';
import { donationsService } from '@/services/donationsService';
import DonationSection from '@/components/donations/DonationSection';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'Donar — Ayuda a transformar vidas',
  description: 'Realiza una donación a CRAA Ayacucho. Elige entre BCP, Yape o PayPal y ayuda a rescatar más animales.',
};

const destinations = [
  { icon: '🍖', title: 'Alimentación', desc: 'S/ 8,500 mensuales en alimento balanceado para todos los animales.' },
  { icon: '🏥', title: 'Veterinaria', desc: 'Cirugías, medicamentos y tratamientos urgentes.' },
  { icon: '✂️', title: 'Esterilización', desc: 'Campañas para control responsable de la población.' },
  { icon: '🏗️', title: 'Infraestructura', desc: 'Mejora de espacios, jaulas y áreas de descanso.' },
];

export default function DonarPage() {
  const methods = donationsService.getDonationMethods();
  const stats = donationsService.getImpactStats();

  return (
    <div className="bg-[#FFF5EC]">
      <PageHero
        kicker="Donar"
        title={
          <>
            Tu ayuda se convierte en <span className="text-[#FC9A36]">alimento, medicinas</span> y esperanza.
          </>
        }
        lead="El albergue depende de personas como tú para continuar rescatando y cuidando a nuestros animales. Cada donación, grande o pequeña, hace una diferencia real."
        actions={
          <>
            <a href="#metodos" className="inline-flex items-center justify-center gap-2 bg-[#2BC4B5] hover:bg-[#22a99c] text-white font-bold px-[34px] py-[17px] rounded-full text-base tracking-[0.02em] shadow-[0_8px_20px_-6px_rgba(43,196,181,0.55)] transition-all active:scale-95">
              VER MÉTODOS DE DONACIÓN
            </a>
            <Link href="/transparencia" className="inline-flex items-center justify-center gap-2 border-2 border-[#012B4E] text-[#012B4E] hover:bg-[#012B4E] hover:text-white font-semibold px-[30px] py-[15px] rounded-full text-base transition-all active:scale-95">
              ¿En qué se usa?
            </Link>
          </>
        }
        aside={
          <div className="bg-white border border-[#F0E6D8] rounded-[40px] p-9 lg:p-11 shadow-[0_20px_50px_-28px_rgba(1,43,78,0.35)]">
            <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A93A8] mb-6">
              Lo que ya lograste con nosotros
            </div>
            <div className="flex flex-col gap-5">
              {stats.map((stat, i) => (
                <div
                  key={stat.id}
                  className={
                    'flex items-center justify-between gap-4' +
                    (i < stats.length - 1 ? ' pb-5 border-b border-[#F0E6D8]' : '')
                  }
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-full bg-[#F7EAD8] flex items-center justify-center flex-shrink-0">
                      <span className="text-xl" aria-hidden="true">{stat.icon}</span>
                    </div>
                    <div>
                      <div className="text-[15px] font-semibold text-[#012B4E]">{stat.label}</div>
                      {stat.description && <div className="text-[13px] text-[#7A93A8]">{stat.description}</div>}
                    </div>
                  </div>
                  <div className="font-heading text-[34px] text-[#012B4E] leading-none">
                    {stat.value.toLocaleString('es-PE')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
      />

      {/* Métodos de donación */}
      <div id="metodos" className="scroll-mt-24">
        <DonationSection methods={methods} />
      </div>

      {/* A dónde va tu donación */}
      <section className="pb-20 lg:pb-24" aria-label="Destino de las donaciones">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-[#F7EAD8] border border-[#E8D9C8] rounded-[40px] p-8 sm:p-12 lg:p-14">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12 mb-9">
              <div className="max-w-[560px]">
                <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#1a8f84] mb-4">
                  A dónde va tu donación
                </div>
                <h2 className="font-heading text-[34px] lg:text-[44px] text-[#012B4E] leading-[1.1]">
                  Cada sol tiene un destino
                </h2>
              </div>
              <Link
                href="/transparencia"
                className="inline-flex items-center gap-2.5 border-2 border-[#012B4E] text-[#012B4E] hover:bg-[#012B4E] hover:text-white font-bold px-7 py-3.5 rounded-full text-sm flex-shrink-0 transition-all active:scale-95 lg:mb-1.5"
              >
                VER INFORME DE TRANSPARENCIA
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {destinations.map((item) => (
                <div key={item.title} className="bg-white rounded-[28px] p-7 lg:px-[30px]">
                  <div className="w-12 h-12 rounded-full bg-[#FFF5EC] flex items-center justify-center mb-5">
                    <span className="text-[22px]" aria-hidden="true">{item.icon}</span>
                  </div>
                  <h3 className="font-heading text-[21px] text-[#012B4E] mb-2">{item.title}</h3>
                  <p className="text-[#4A6580] text-sm leading-[1.7]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Otras formas de ayudar */}
      <section className="pb-24 lg:pb-26" aria-label="Otras formas de ayudar">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12 bg-white border border-[#F0E6D8] rounded-[40px] p-8 sm:p-11 lg:px-13 shadow-[0_4px_20px_-12px_rgba(1,43,78,0.18)]">
            <div className="max-w-[640px]">
              <h2 className="font-heading text-[28px] lg:text-[36px] text-[#012B4E] leading-[1.15]">
                ¿Prefieres ayudar de otra forma?
              </h2>
              <p className="text-[#4A6580] text-base leading-[1.7] mt-3">
                Tu tiempo, tu empresa o una adopción también cambian la vida de un animal.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link href="/voluntariado" className="inline-flex items-center justify-center gap-2 bg-[#FEE35A] hover:bg-[#f5d83a] text-[#012B4E] font-extrabold px-[30px] py-4 rounded-full text-sm tracking-[0.02em] transition-all active:scale-95">
                SER VOLUNTARIO
              </Link>
              <Link href="/partners" className="inline-flex items-center justify-center gap-2 border-2 border-[#012B4E] text-[#012B4E] hover:bg-[#012B4E] hover:text-white font-bold px-7 py-3.5 rounded-full text-sm transition-all active:scale-95">
                SER PARTNER
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
