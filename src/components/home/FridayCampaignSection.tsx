import { FridayCampaign } from '@/types';
import Link from 'next/link';

interface FridayCampaignSectionProps {
  campaign: FridayCampaign;
  /** Destino del CTA (por defecto la página de adopción). */
  ctaHref?: string;
  ctaLabel?: string;
}

/**
 * Both columns stretch to the same height: the CTA is pinned to the bottom of the
 * left column, a todo el ancho de las tarjetas de horario y lugar, y las tarjetas de
 * actividad reparten la altura restante en la derecha.
 */
export default function FridayCampaignSection({
  campaign,
  ctaHref = '/adopcion',
  ctaLabel = 'VER INFORMACIÓN DE ADOPCIÓN',
}: FridayCampaignSectionProps) {
  return (
    <section className="pb-20 lg:pb-26 bg-[#FFF5EC]" aria-label="Campaña de adopción viernes">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="bg-[#012B4E] rounded-[44px] p-8 sm:p-12 lg:p-14 relative overflow-hidden">
          <div
            className="absolute -top-[120px] -right-[100px] w-[420px] h-[420px] rounded-full bg-[#FC9A36]/12 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
            {/* Left column */}
            <div className="flex flex-col">
              <span className="inline-flex self-start items-center gap-2.5 bg-[#FC9A36] text-[#012B4E] rounded-full px-5 py-2.5 text-[11px] font-extrabold tracking-[0.14em] uppercase">
                Todos los viernes
              </span>

              <h2 className="font-heading text-[36px] lg:text-[50px] text-white leading-[1.08] mt-6">
                Una nueva oportunidad <span className="text-[#FEBE69]">para encontrar un hogar.</span>
              </h2>

              <p className="text-white/65 text-base leading-[1.75] mt-[22px] mb-8">{campaign.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                <div className="bg-white/[0.07] rounded-3xl px-6 py-5 flex flex-col justify-center">
                  <div className="text-[10px] text-white/45 uppercase tracking-[0.14em] font-bold mb-2">Horario</div>
                  <div className="font-heading text-[26px] text-white leading-none">{campaign.hours}</div>
                  <div className="text-xs text-white/50 mt-1.5">{campaign.day}</div>
                </div>
                <div className="bg-white/[0.07] rounded-3xl px-6 py-5 flex flex-col justify-center">
                  <div className="text-[10px] text-white/45 uppercase tracking-[0.14em] font-bold mb-2">Lugar</div>
                  <div className="text-[15px] text-white font-semibold leading-[1.3]">{campaign.location}</div>
                  <div className="text-xs text-white/50 mt-1 leading-[1.4]">{campaign.address}</div>
                </div>
              </div>

              <Link
                href={ctaHref}
                className="flex w-full mt-auto items-center justify-center gap-2.5 bg-[#2BC4B5] hover:bg-[#22a99c] text-white font-bold px-8 py-4 rounded-full text-sm tracking-[0.02em] transition-all duration-200 active:scale-95"
              >
                {ctaLabel}
              </Link>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-2.5">
              <h3 className="text-[11px] font-bold text-white/45 uppercase tracking-[0.14em] mb-1">¿Qué puedes hacer?</h3>
              {campaign.activities.map((activity) => (
                <div
                  key={activity.title}
                  className="flex flex-1 items-center gap-[18px] bg-white/[0.06] rounded-3xl px-6 py-5"
                >
                  <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl" aria-hidden="true">{activity.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-[15px] mb-1">{activity.title}</h4>
                    <p className="text-white/60 text-sm leading-[1.6]">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
