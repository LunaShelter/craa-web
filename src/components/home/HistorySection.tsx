import Link from 'next/link';
import { teamService } from '@/services/teamService';

const works = [
  { icon: '🐾', label: 'Rescate' },
  { icon: '🏥', label: 'Atención veterinaria' },
  { icon: '🍖', label: 'Alimentación' },
  { icon: '💉', label: 'Vacunación' },
  { icon: '✂️', label: 'Esterilización' },
  { icon: '🏠', label: 'Adopción' },
];

export default function HistorySection() {
  const { mission, vision, values } = teamService.getShelterHistory();

  return (
    <section className="py-20 bg-white" aria-label="Nuestra historia">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden h-96 bg-cover bg-center shadow-xl"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=800&q=80')" }}
              role="img"
              aria-label="Animales rescatados en el albergue CRAA"
            />
            <div className="absolute -bottom-4 -right-4 bg-[#FEE35A] rounded-2xl p-5 shadow-lg">
              <div className="text-3xl font-bold text-[#012B4E]">2018</div>
              <div className="text-sm text-gray-700 font-medium">Fundado en Ayacucho</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#2BC4B5]/10 text-[#2BC4B5] px-4 py-2 rounded-full text-sm font-medium mb-6">
              🐾 Nuestra historia
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#012B4E] mb-6 leading-tight">
              Nacimos del amor por los que no tienen voz
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Todo comenzó en 2018, cuando nuestra fundadora encontró a "Negrita", una perra abandonada y herida en las calles de Ayacucho. Esa experiencia mostró que el problema era enorme: cientos de animales sin nadie que los ayudara. Hoy, CRAA rescata, rehabilita y reubica animales con un equipo apasionado.
            </p>

            {/* Mission / Vision */}
            <div className="space-y-4 mb-8">
              <div className="bg-[#FFF5EC] rounded-xl p-4">
                <h3 className="font-bold text-[#012B4E] mb-1">🎯 Misión</h3>
                <p className="text-gray-600 text-sm">{mission}</p>
              </div>
              <div className="bg-[#FFF5EC] rounded-xl p-4">
                <h3 className="font-bold text-[#012B4E] mb-1">🌟 Visión</h3>
                <p className="text-gray-600 text-sm">{vision}</p>
              </div>
            </div>

            <div className="flex justify-center">
              <Link
                href="/nosotros"
                className="inline-flex items-center gap-2 bg-[#2BC4B5] hover:bg-[#22a99c] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-md active:scale-95"
              >
                CONOCE MÁS DE NOSOTROS
              </Link>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {values.map((v) => (
            <div key={v.title} className="text-center bg-[#FFF5EC] rounded-2xl p-5">
              <h3 className="font-bold text-[#012B4E] text-lg mb-2">{v.title}</h3>
              <p className="text-gray-500 text-sm">{v.description}</p>
            </div>
          ))}
        </div>

        {/* Work */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-[#012B4E] mb-8">Nuestro trabajo</h3>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {works.map((w) => (
              <div
                key={w.label}
                className="flex flex-col items-center gap-2 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <span className="text-3xl" aria-hidden="true">{w.icon}</span>
                <span className="text-xs font-medium text-gray-600 text-center">{w.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
