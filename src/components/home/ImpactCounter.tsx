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

/**
 * Impact strip — the featured "rescatados" figure lives in the Hero,
 * so the strip shows the remaining stats on one aligned baseline.
 */
export default function ImpactCounter({ stats }: ImpactCounterProps) {
  const strip = stats.filter((s) => s.id !== 'rescued');

  return (
    <section className="pb-16 lg:pb-24 bg-[#FFF5EC]" aria-label="Estadísticas de impacto">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="bg-white border border-[#F0E6D8] rounded-[32px] px-8 py-10 lg:px-12 lg:py-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[auto_1px_1fr_1fr_1fr] gap-8 lg:gap-10 items-center shadow-[0_4px_20px_-12px_rgba(1,43,78,0.18)]">
          <div className="lg:max-w-[190px]">
            <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A93A8] mb-2">Nuestro impacto</div>
            <div className="font-heading text-2xl leading-[1.15] text-[#012B4E]">Cada número es una vida transformada</div>
          </div>

          <div className="hidden lg:block w-px h-[82px] bg-[#F0E6D8]" aria-hidden="true" />

          {strip.map((stat) => (
            <div key={stat.id}>
              <div className="font-heading text-[46px] text-[#012B4E] leading-none">
                <Counter target={stat.value} />
              </div>
              <div className="text-sm font-semibold text-[#012B4E] mt-1.5">{stat.label}</div>
              {stat.description && (
                <div className="text-xs text-[#7A93A8] mt-1">{stat.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
