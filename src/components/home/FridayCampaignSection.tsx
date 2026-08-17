import { FridayCampaign } from '@/types';
import { cardHeaderGradient } from '@/lib/designTokens';

interface FridayCampaignSectionProps {
  campaign: FridayCampaign;
}

export default function FridayCampaignSection({ campaign }: FridayCampaignSectionProps) {
  return (
    <section className="py-20 bg-[#FFF5EC]" aria-label="Campaña de adopción viernes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FC9A36]/15 border border-[#FC9A36]/40 text-[#FC9A36] px-4 py-2 rounded-full text-sm font-bold mb-6 uppercase tracking-wide">
            📅 Campaña de Adopción — Todos los Viernes
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#012B4E] mb-4 leading-tight">
            🐾 Todos los viernes, una nueva oportunidad<br className="hidden md:block" /> para encontrar un hogar
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{campaign.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Info card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className={`${cardHeaderGradient} p-6 text-white`}>
              <h3 className="text-xl font-bold mb-1">Información del evento</h3>
              <p className="text-white/80 text-sm">Ven, conócenos y ayuda a cambiar una vida</p>
            </div>
            <div className="p-6 space-y-5">
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0" aria-hidden="true">📍</span>
                <div>
                  <p className="font-bold text-[#012B4E] text-sm uppercase tracking-wide mb-1">Lugar</p>
                  <p className="text-gray-700 font-medium">{campaign.location}</p>
                  <p className="text-gray-500 text-sm">{campaign.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0" aria-hidden="true">📅</span>
                <div>
                  <p className="font-bold text-[#012B4E] text-sm uppercase tracking-wide mb-1">Día</p>
                  <p className="text-gray-700 font-medium">{campaign.day}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0" aria-hidden="true">🕐</span>
                <div>
                  <p className="font-bold text-[#012B4E] text-sm uppercase tracking-wide mb-1">Horario</p>
                  <p className="text-gray-700 font-bold text-lg">{campaign.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Activities */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#012B4E] mb-6">¿Qué puedes hacer?</h3>
            {campaign.activities.map((activity) => (
              <div
                key={activity.title}
                className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 hover:-translate-x-1"
              >
                <span className="text-3xl flex-shrink-0" aria-hidden="true">{activity.icon}</span>
                <div>
                  <h4 className="font-bold text-[#012B4E] mb-1">{activity.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
