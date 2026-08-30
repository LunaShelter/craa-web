import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-[#FFF5EC] pt-9 pb-16 lg:pb-24 overflow-hidden" aria-label="Hero">
      {/* Soft sand circle */}
      <div
        className="absolute -top-[180px] -right-[160px] w-[620px] h-[620px] rounded-full bg-[#F7EAD8] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text column */}
          <div className="pt-2">
            <span className="inline-flex items-center gap-2.5 bg-white border border-[#E8D9C8] rounded-full pl-3 pr-[18px] py-2 text-xs font-bold tracking-[0.08em] uppercase text-[#c2372f]">
              <span className="w-2 h-2 rounded-full bg-[#FD544A] inline-block" aria-hidden="true" />
              87 animales esperando
            </span>

            <h1 className="font-heading text-[52px] sm:text-[64px] lg:text-[78px] text-[#012B4E] leading-[1.02] mt-[22px]">
              Ellos merecen<br />
              una segunda<br />
              <span className="text-[#FC9A36]">oportunidad.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#4A6580] leading-[1.65] mt-6 max-w-[480px]">
              Con tu ayuda rescatamos, rehabilitamos y encontramos hogar para los animales en situación de abandono en Ayacucho.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-9 sm:items-center">
              <Link
                href="/donar"
                className="inline-flex items-center justify-center gap-2 bg-[#2BC4B5] hover:bg-[#22a99c] text-white font-bold px-[34px] py-[17px] rounded-full text-base tracking-[0.02em] shadow-[0_8px_20px_-6px_rgba(43,196,181,0.55)] transition-all duration-200 active:scale-95 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2BC4B5]"
              >
                DONAR AHORA
              </Link>
              <Link
                href="/nosotros"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#012B4E] text-[#012B4E] hover:bg-[#012B4E] hover:text-white font-semibold px-[30px] py-[15px] rounded-full text-base transition-all duration-200 active:scale-95"
              >
                Conoce nuestra historia
              </Link>
            </div>
          </div>

          {/* Image column */}
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-[280px_280px_40px_280px] shadow-[0_24px_60px_-20px_rgba(1,43,78,0.35)]">
              <Image
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&q=85"
                alt="Perro rescatado por CRAA"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover [filter:saturate(0.88)_contrast(0.94)_brightness(1.03)]"
              />
            </div>

            {/* Floating stats */}
            <div className="absolute -left-4 sm:-left-9 bottom-16 bg-[#012B4E] rounded-3xl px-[26px] py-5 shadow-[0_16px_34px_-12px_rgba(1,43,78,0.5)]">
              <div className="font-heading text-[38px] text-[#FEE35A] leading-none">1,248</div>
              <div className="text-[11px] text-white/60 uppercase tracking-[0.14em] mt-1.5">Rescatados</div>
            </div>
            <div className="absolute -left-2 top-9 bg-white border border-[#E8D9C8] rounded-full px-[22px] py-3 flex items-baseline gap-2.5 shadow-[0_10px_24px_-12px_rgba(1,43,78,0.3)]">
              <span className="font-heading text-2xl text-[#012B4E] leading-none">936</span>
              <span className="text-xs font-semibold text-[#4A6580] uppercase tracking-[0.1em]">Adoptados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
