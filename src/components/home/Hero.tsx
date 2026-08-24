import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#012B4E]" aria-label="Hero">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1600&q=85')",
        }}
        aria-hidden="true"
      />
      {/* Layered overlay: uniform dark with slight center focus */}
      <div
        className="absolute inset-0"
        style={{
          background: 'rgba(1,43,78,0.72)',
        }}
        aria-hidden="true"
      />
      {/* Subtle bottom vignette */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{ background: 'linear-gradient(to top, rgba(1,43,78,0.5), transparent)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1200px] mx-auto px-6 py-24 w-full">
        <div className="max-w-2xl mx-auto text-center">
          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-6">
            Ellos merecen<br />
            una segunda<br />
            <span className="text-[#FEE35A]">oportunidad.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/75 leading-relaxed mb-10 font-light">
            Con tu ayuda rescatamos, rehabilitamos y encontramos hogar para los animales en situación de abandono en Ayacucho.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/donar"
              className="inline-flex items-center justify-center gap-2 bg-[#2BC4B5] hover:bg-[#22a99c] text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#2BC4B5] focus:ring-offset-2 focus:ring-offset-[#012B4E]"
            >
              DONAR AHORA
            </Link>
            <Link
              href="/nosotros"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:border-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 active:scale-95"
            >
              CONOCE NUESTRA HISTORIA
            </Link>
          </div>

          {/* Stats strip */}
          <div className="mt-16 flex items-center gap-8 flex-wrap justify-center">
            {[
              { value: '1,248', label: 'Rescatados' },
              { value: '936',   label: 'Adoptados' },
              { value: '87',    label: 'En el albergue' },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-4">
                {i > 0 && <div className="w-px h-8 bg-white/20" aria-hidden="true" />}
                <div>
                  <div className="text-3xl font-extrabold text-[#FEE35A] leading-none tracking-tight">{stat.value}</div>
                  <div className="text-xs text-white/55 uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce" aria-hidden="true">
        <span className="text-[10px] text-white/35 uppercase tracking-widest">Desplázate hacia abajo</span>
        <svg className="w-4 h-4 text-white/35" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
