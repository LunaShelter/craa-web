import { FridayCampaign } from '@/types';
import Link from 'next/link';

interface FridayCampaignSectionProps {
  campaign: FridayCampaign;
}

export default function FridayCampaignSection({ campaign }: FridayCampaignSectionProps) {
  return (
    <section className="py-24 bg-[#FFF5EC]" aria-label="Campaña de adopción viernes">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#012B4E] leading-tight tracking-tight mx-auto max-w-2xl">
            Todos los viernes,<br />
            una nueva oportunidad{' '}
            <span className="text-[#FC9A36]">para encontrar un hogar.</span>
          </h2>
          <p className="text-[#4A6580] text-base leading-relaxed max-w-xl mx-auto mt-4">
            {campaign.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          {/* Event info card — spans 2 cols */}
          <div className="lg:col-span-2 bg-[#012B4E] rounded-2xl overflow-hidden shadow-[0_8px_32px_0_rgba(1,43,78,0.20)]">
            {/* Card header */}
            <div className="px-7 py-6 border-b border-white/10">
              <p className="text-white/60 text-sm">Ven, conócenos y ayuda a cambiar una vida</p>
            </div>
            <div className="px-7 py-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-base" aria-hidden="true">📍</span>
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-0.5">Lugar</p>
                  <p className="text-white font-semibold text-sm">{campaign.location}</p>
                  <p className="text-white/50 text-xs mt-0.5">{campaign.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-base" aria-hidden="true">📅</span>
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-0.5">Día</p>
                  <p className="text-white font-semibold text-sm">{campaign.day}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-base" aria-hidden="true">🕐</span>
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-0.5">Horario</p>
                  <p className="text-white font-bold text-xl">{campaign.hours}</p>
                </div>
              </div>
            </div>
            <div className="px-7 pb-7">
              <Link
                href="/adopcion"
                className="inline-flex items-center justify-center w-full gap-2 bg-[#2BC4B5] hover:bg-[#22a99c] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 text-sm"
              >
                VER INFORMACIÓN DE ADOPCIÓN
              </Link>
            </div>
          </div>

          {/* Activities — spans 3 cols */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold text-[#7A93A8] uppercase tracking-widest mb-5">¿Qué puedes hacer?</h3>
            {campaign.activities.map((activity) => (
              <div
                key={activity.title}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-[#F0E6D8] shadow-[0_1px_4px_0_rgba(1,43,78,0.04)] hover:shadow-[0_4px_12px_0_rgba(1,43,78,0.08)] transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F7EAD8] flex items-center justify-center flex-shrink-0">
                  <span className="text-xl" aria-hidden="true">{activity.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#012B4E] text-sm mb-1">{activity.title}</h4>
                  <p className="text-[#4A6580] text-sm leading-relaxed">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
