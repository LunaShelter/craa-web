'use client';

import { useEffect, useRef, useState } from 'react';
import { ImpactStat } from '@/types';

function Counter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const step = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count.toLocaleString('es-PE')}</span>;
}

interface ImpactCounterProps {
  stats: ImpactStat[];
}

export default function ImpactCounter({ stats }: ImpactCounterProps) {
  return (
    <section className="py-20 bg-white" aria-label="Estadísticas de impacto">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#012B4E] leading-tight tracking-tight mx-auto max-w-lg">
            Cada número es una vida transformada
          </h2>
        </div>

        {/* Bento grid — asymmetric 3+1 layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div
              key={stat.id}
              className={`
                group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1
                ${i === 0
                  ? 'bg-[#012B4E] text-white col-span-2 lg:col-span-2 lg:row-span-1 flex items-center gap-8'
                  : 'bg-[#F7EAD8] border border-[#E8D9C8] hover:shadow-[0_4px_16px_0_rgba(1,43,78,0.10)]'
                }
              `}
            >
              {i === 0 ? (
                /* Featured stat — large horizontal card */
                <>
                  <div>
                    <div className="text-6xl font-extrabold text-[#FEE35A] leading-none tracking-tight mb-1">
                      <Counter target={stat.value} />
                    </div>
                    <div className="text-white/90 font-semibold text-lg mt-1">{stat.label}</div>
                    {stat.description && (
                      <div className="text-white/55 text-sm mt-2 max-w-xs leading-relaxed">{stat.description}</div>
                    )}
                  </div>
                  <div className="text-7xl opacity-20 flex-shrink-0 hidden sm:block" aria-hidden="true">
                    {stat.icon}
                  </div>
                </>
              ) : (
                /* Regular stats */
                <>
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200" aria-hidden="true">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-extrabold text-[#012B4E] mb-1 leading-none tracking-tight">
                    <Counter target={stat.value} />
                  </div>
                  <div className="text-sm font-semibold text-[#012B4E] mt-1">{stat.label}</div>
                  {stat.description && (
                    <div className="text-xs text-[#7A93A8] mt-2 leading-relaxed">{stat.description}</div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
