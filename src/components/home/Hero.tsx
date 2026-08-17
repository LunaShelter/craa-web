import Link from 'next/link';
import { ctaButtonClasses } from '@/lib/designTokens';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#012B4E]" aria-label="Hero">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1600&q=85')",
        }}
        aria-hidden="true"
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#012B4E]/90 via-[#012B4E]/70 to-transparent" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-[#2BC4B5]/20 border border-[#2BC4B5]/40 text-[#2BC4B5] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>🐾</span> Conciencia y Rescate Animal · Ayacucho, Perú
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Ellos necesitan una{' '}
            <span className="text-[#FEE35A]">segunda oportunidad.</span>
            <br />
            Tú puedes hacerla posible.
          </h1>

          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-xl">
            Cada rescate significa una nueva oportunidad para vivir. Con tu ayuda podemos brindar
            alimento, atención veterinaria, refugio y una familia a quienes más lo necesitan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/donar"
              className={`inline-flex items-center justify-center gap-2 ${ctaButtonClasses} font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95`}
            >
              DONAR AHORA ❤️
            </Link>
            <Link
              href="/nosotros"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#012B4E] font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 active:scale-95"
            >
              CONOCE NUESTRA HISTORIA
            </Link>
          </div>

          {/* Mini stats */}
          <div className="mt-14 flex flex-wrap gap-6">
            {[
              { value: '1,248', label: 'rescatados' },
              { value: '936', label: 'adoptados' },
              { value: '87', label: 'en el albergue' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-[#FEE35A]">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
