import type { Metadata } from 'next';
import Link from 'next/link';
import { animalsService } from '@/services/animalsService';
import { volunteersService } from '@/services/volunteersService';
import AnimalCard from '@/components/animals/AnimalCard';
import FridayCampaignSection from '@/components/home/FridayCampaignSection';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'Adopción',
  description: 'Adopta un animal rescatado por CRAA en Ayacucho. Conoce el proceso de adopción y a los animales que buscan un hogar.',
};

const adoptionSteps = [
  { step: '01', icon: '🔍', title: 'Conoce a nuestros animales', description: 'Visítanos los viernes en nuestra campaña de adopción o explora los perfiles en esta web.' },
  { step: '02', icon: '📋', title: 'Completa el formulario', description: 'Llena nuestro formulario de adopción para que podamos conocerte mejor y encontrar el match perfecto.' },
  { step: '03', icon: '💬', title: 'Entrevista y orientación', description: 'Nuestro equipo conversará contigo para asegurarse de que el animal elegido se adapte bien a tu hogar.' },
  { step: '04', icon: '🏠', title: '¡Llévalo a casa!', description: 'Firmamos el acta de adopción, el animal viaja con su cartilla de vacunas y listo para empezar su nueva vida.' },
];

const requirements = [
  'Ser mayor de 18 años',
  'Presentar DNI o documento de identidad',
  'Comprometerse con el bienestar del animal',
  'Contar con espacio adecuado en casa',
  'Aceptar visita de seguimiento',
  'Firmar acta de adopción responsable',
];

export default function AdopcionPage() {
  const available = animalsService.getAvailableForAdoption();
  const campaign = volunteersService.getFridayCampaign();

  return (
    <div className="bg-[#FFF5EC]">
      <PageHero
        kicker="Adopción"
        title={<>Dale un hogar a<br />quien más lo<br /><span className="text-[#FC9A36]">necesita.</span></>}
        lead="Adoptar es un acto de amor que cambia dos vidas: la del animal y la tuya."
        imageSrc="https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=1200&q=85"
        imageAlt="Animales rescatados esperando adopción"
        imageMask="280px 40px 280px 280px"
        badge={
          <div className="absolute bottom-[70px] -left-8 bg-[#012B4E] rounded-3xl px-[26px] py-5 shadow-[0_16px_34px_-12px_rgba(1,43,78,0.5)]">
            <div className="font-heading text-[38px] text-[#FEE35A] leading-none">{available.length}</div>
            <div className="text-[11px] text-white/60 uppercase tracking-[0.14em] mt-1.5">Buscando hogar hoy</div>
          </div>
        }
        actions={
          <>
            <a href="#animales" className="inline-flex items-center justify-center gap-2 bg-[#2BC4B5] hover:bg-[#22a99c] text-white font-bold px-[34px] py-[17px] rounded-full text-base tracking-[0.02em] shadow-[0_8px_20px_-6px_rgba(43,196,181,0.55)] transition-all active:scale-95">
              VER ANIMALES DISPONIBLES
            </a>
            <a href="#proceso" className="inline-flex items-center justify-center gap-2 border-2 border-[#012B4E] text-[#012B4E] hover:bg-[#012B4E] hover:text-white font-semibold px-[30px] py-[15px] rounded-full text-base transition-all active:scale-95">
              Cómo adoptar
            </a>
          </>
        }
      />

      {/* Campaña de los viernes */}
      <FridayCampaignSection campaign={campaign} ctaHref="#proceso" ctaLabel="VER PROCESO DE ADOPCIÓN" />

      {/* Animales disponibles */}
      <section id="animales" className="pb-20 lg:pb-24 scroll-mt-24" aria-label="Animales disponibles para adopción">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12 mb-11">
            <div className="max-w-[620px]">
              <div className="inline-flex items-center gap-2.5 bg-white border border-[#E8D9C8] rounded-full pl-3 pr-[18px] py-2 text-xs font-bold tracking-[0.08em] uppercase text-[#c2372f] mb-[18px]">
                <span className="w-2 h-2 rounded-full bg-[#FD544A]" aria-hidden="true" />
                {available.length} buscando hogar
              </div>
              <h2 className="font-heading text-[36px] lg:text-[48px] text-[#012B4E] leading-[1.1]">
                Animales disponibles para adopción
              </h2>
            </div>
            <p className="text-[#4A6580] text-base leading-[1.7] max-w-[340px] lg:mb-1.5">
              Todos han pasado por revisión veterinaria, vacunación y desparasitación. Están listos para comenzar una nueva vida.
            </p>
          </div>

          {available.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px] items-stretch mb-11">
              {available.map((animal) => <AnimalCard key={animal.id} animal={animal} />)}
            </div>
          ) : (
            <div className="text-center py-16 text-[#7A93A8] mb-11">
              <div className="text-5xl mb-4" aria-hidden="true">🐾</div>
              <p className="text-lg">Por el momento todos nuestros animales han sido adoptados. ¡Vuelve pronto!</p>
            </div>
          )}

          <Link href="/historias" className="inline-flex items-center gap-2.5 bg-[#012B4E] hover:bg-[#024070] text-white font-bold px-8 py-[15px] rounded-full text-sm tracking-[0.02em] transition-all active:scale-95">
            VER TODAS LAS HISTORIAS →
          </Link>
        </div>
      </section>

      {/* Proceso */}
      <section id="proceso" className="pb-20 lg:pb-24 scroll-mt-24" aria-label="Proceso de adopción">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-[#F7EAD8] border border-[#E8D9C8] rounded-[40px] p-8 sm:p-12 lg:p-14">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12 mb-10">
              <div className="max-w-[560px]">
                <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#1a8f84] mb-4">Cuatro pasos</div>
                <h2 className="font-heading text-[34px] lg:text-[44px] text-[#012B4E] leading-[1.1]">
                  ¿Cómo es el proceso de adopción?
                </h2>
              </div>
              <p className="text-[#4A6580] text-base leading-[1.7] max-w-[320px] lg:mb-1.5">
                Simple, responsable y lleno de amor. Nos aseguramos de que cada animal encuentre la familia perfecta.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {adoptionSteps.map((s) => (
                <div key={s.step} className="bg-white rounded-[28px] p-7 lg:px-[30px]">
                  <div className="flex items-center gap-3.5 mb-[18px]">
                    <div className="w-12 h-12 rounded-full bg-[#FFF5EC] flex items-center justify-center flex-shrink-0">
                      <span className="text-[22px]" aria-hidden="true">{s.icon}</span>
                    </div>
                    <span className="font-heading text-[28px] text-[#E8D9C8] leading-none">{s.step}</span>
                  </div>
                  <h3 className="font-heading text-xl text-[#012B4E] mb-2">{s.title}</h3>
                  <p className="text-[#4A6580] text-sm leading-[1.7]">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requisitos + dudas */}
      <section className="pb-24 lg:pb-26" aria-label="Requisitos para adoptar">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-12 lg:gap-14 items-start">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A93A8] mb-4">Requisitos</div>
              <h2 className="font-heading text-[34px] lg:text-[44px] text-[#012B4E] leading-[1.1] mb-8">
                Lo que necesitas para adoptar
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {requirements.map((r) => (
                  <span key={r} className="flex items-center gap-3 bg-white border border-[#F0E6D8] rounded-full px-5 py-3.5 text-sm font-medium text-[#012B4E]">
                    <span className="w-[22px] h-[22px] rounded-full bg-[#E8FAF9] text-[#1a8f84] text-xs font-bold flex items-center justify-center flex-shrink-0" aria-hidden="true">✓</span>
                    {r}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-[#012B4E] rounded-[36px] p-9 lg:p-[42px]">
              <h3 className="font-heading text-[28px] text-white mb-3">¿Tienes dudas?</h3>
              <p className="text-white/65 text-[15px] leading-[1.75] mb-7">
                Nuestro equipo está disponible para responder cualquier consulta sobre el proceso de adopción.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/51987654321?text=Hola%2C%20me%20interesa%20adoptar%20un%20animal%20de%20CRAA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1eb557] text-white font-bold px-6 py-4 rounded-full text-[15px] transition-all active:scale-95"
                >
                  Consultar por WhatsApp
                </a>
                <a
                  href="mailto:adopciones@craa.pe"
                  className="flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white hover:bg-white/10 text-white font-semibold px-6 py-3.5 rounded-full text-[15px] transition-all active:scale-95"
                >
                  adopciones@craa.pe
                </a>
              </div>
              <div className="mt-7 pt-6 border-t border-white/10 text-[13px] text-white/50 leading-[1.7]">
                También puedes venir el viernes al Atrio San Agustín y conversar con nuestros coordinadores en persona.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
