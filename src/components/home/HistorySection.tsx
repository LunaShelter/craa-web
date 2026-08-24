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
    <section className="py-24 bg-white" aria-label="Nuestra historia">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Main 2-col: image + text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden bg-cover bg-center shadow-[0_12px_40px_0_rgba(1,43,78,0.15)]"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=800&q=80')",
                aspectRatio: '4/3',
              }}
              role="img"
              aria-label="Animales rescatados en el albergue CRAA"
            />
            {/* Year badge */}
            <div className="absolute -bottom-5 -right-5 bg-[#FEE35A] rounded-2xl px-6 py-4 shadow-lg">
              <div className="text-3xl font-extrabold text-[#012B4E] leading-none">2018</div>
              <div className="text-xs text-[#012B4E]/70 font-semibold mt-1 uppercase tracking-wide">Fundado</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#012B4E] mb-6 leading-tight tracking-tight">
              Nacimos del amor por los que no tienen voz
            </h2>
            <p className="text-[#4A6580] leading-relaxed mb-8 text-lg">
              Todo comenzó en 2018, cuando nuestra fundadora encontró a &ldquo;Negrita&rdquo;, una perra abandonada y herida en las calles de Ayacucho. Esa experiencia mostró que el problema era enorme: cientos de animales sin nadie que los ayudara. Hoy, CRAA rescata, rehabilita y reubica animales con un equipo apasionado.
            </p>

            {/* Mission / Vision cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-[#F7EAD8] rounded-2xl p-5 border border-[#E8D9C8]">
                <div className="text-[#2BC4B5] font-bold text-xs uppercase tracking-widest mb-2">Misión</div>
                <p className="text-[#012B4E] text-sm leading-relaxed font-medium">{mission}</p>
              </div>
              <div className="bg-[#F7EAD8] rounded-2xl p-5 border border-[#E8D9C8]">
                <div className="text-[#2BC4B5] font-bold text-xs uppercase tracking-widest mb-2">Visión</div>
                <p className="text-[#012B4E] text-sm leading-relaxed font-medium">{vision}</p>
              </div>
            </div>

            <Link
              href="/nosotros"
              className="inline-flex items-center gap-2 bg-[#2BC4B5] hover:bg-[#22a99c] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 text-sm"
            >
              CONOCE MÁS DE NOSOTROS
            </Link>
          </div>
        </div>

        {/* Values row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {values.map((v) => (
            <div key={v.title} className="bg-[#F7EAD8] rounded-2xl p-5 border border-[#E8D9C8] hover:shadow-[0_4px_12px_0_rgba(1,43,78,0.08)] hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="font-bold text-[#012B4E] text-base mb-2">{v.title}</h3>
              <p className="text-[#4A6580] text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>

        {/* Work grid */}
        <div>
          <h3 className="text-xs font-bold text-[#7A93A8] uppercase tracking-widest mb-6 text-center">Lo que hacemos</h3>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {works.map((w) => (
              <div
                key={w.label}
                className="flex flex-col items-center gap-2.5 bg-white rounded-2xl p-4 border border-[#F0E6D8] shadow-[0_1px_4px_0_rgba(1,43,78,0.04)] hover:shadow-[0_4px_12px_0_rgba(1,43,78,0.08)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="text-2xl" aria-hidden="true">{w.icon}</span>
                <span className="text-xs font-semibold text-[#4A6580] text-center leading-tight">{w.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
