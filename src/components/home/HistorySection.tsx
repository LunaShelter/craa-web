import Link from 'next/link';
import Image from 'next/image';
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
    <section className="pb-20 lg:pb-26 bg-[#FFF5EC]" aria-label="Nuestra historia">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Image + text */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-[72px] items-center mb-16 lg:mb-[72px]">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[40px_280px_40px_280px] shadow-[0_20px_50px_-20px_rgba(1,43,78,0.3)]">
              <Image
                src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=900&q=80"
                alt="Animales rescatados en el albergue CRAA"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover [filter:saturate(0.88)_contrast(0.94)_brightness(1.03)]"
              />
            </div>
            <div className="absolute -bottom-[18px] -left-[18px] bg-[#FEE35A] rounded-full w-[120px] h-[120px] flex flex-col items-center justify-center shadow-[0_12px_28px_-12px_rgba(1,43,78,0.4)]">
              <div className="font-heading text-3xl text-[#012B4E] leading-none">2018</div>
              <div className="text-[10px] text-[#012B4E]/70 font-bold mt-1 uppercase tracking-[0.12em]">Fundado</div>
            </div>
          </div>

          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A93A8] mb-4">Nuestra historia</div>
            <h2 className="font-heading text-[36px] lg:text-[48px] text-[#012B4E] mb-[22px] leading-[1.1]">
              Nacimos del amor por los que no tienen voz
            </h2>
            <p className="text-[#4A6580] leading-[1.75] mb-8 text-[17px]">
              Todo comenzó en 2018, cuando nuestra fundadora encontró a &ldquo;Negrita&rdquo;, una perra abandonada y
              herida en las calles de Ayacucho. Esa experiencia mostró que el problema era enorme: cientos de animales sin
              nadie que los ayudara. Hoy, CRAA rescata, rehabilita y reubica animales con un equipo apasionado.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-[#F7EAD8] rounded-3xl p-[22px] border border-[#E8D9C8]">
                <div className="text-[#1a8f84] font-bold text-[11px] uppercase tracking-[0.14em] mb-2.5">Misión</div>
                <p className="text-[#012B4E] text-sm leading-[1.65]">{mission}</p>
              </div>
              <div className="bg-[#F7EAD8] rounded-3xl p-[22px] border border-[#E8D9C8]">
                <div className="text-[#1a8f84] font-bold text-[11px] uppercase tracking-[0.14em] mb-2.5">Visión</div>
                <p className="text-[#012B4E] text-sm leading-[1.65]">{vision}</p>
              </div>
            </div>

            <Link
              href="/nosotros"
              className="inline-flex items-center gap-2.5 bg-[#2BC4B5] hover:bg-[#22a99c] text-white font-bold px-[30px] py-[15px] rounded-full text-sm transition-all duration-200 active:scale-95"
            >
              CONOCE MÁS DE NOSOTROS
            </Link>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {values.map((v) => (
            <div key={v.title} className="bg-white rounded-3xl p-6 border border-[#F0E6D8]">
              <h3 className="font-heading text-[22px] text-[#012B4E] mb-2">{v.title}</h3>
              <p className="text-[#4A6580] text-sm leading-[1.65]">{v.description}</p>
            </div>
          ))}
        </div>

        {/* "Lo que hacemos" — label above, pills on one row */}
        <div className="flex flex-col items-center gap-5">
          <span className="text-[11px] font-bold text-[#7A93A8] uppercase tracking-[0.14em]">Lo que hacemos</span>
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-3">
            {works.map((w) => (
              <span
                key={w.label}
                className="inline-flex items-center gap-2.5 bg-white border border-[#F0E6D8] rounded-full px-[18px] py-2.5 text-[13px] font-semibold text-[#012B4E] whitespace-nowrap"
              >
                <span aria-hidden="true">{w.icon}</span>
                {w.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
