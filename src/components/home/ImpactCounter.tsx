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

  return (
    <span ref={ref}>{count.toLocaleString('es-PE')}</span>
  );
}

interface ImpactCounterProps {
  stats: ImpactStat[];
}

export default function ImpactCounter({ stats }: ImpactCounterProps) {
  return (
    <section className="py-16 bg-white" aria-label="Estadísticas de impacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#012B4E] mb-3">
            Nuestro impacto en números
          </h2>
          <p className="text-gray-600 text-lg">Cada número representa una vida transformada.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.id}
              className="text-center p-6 rounded-2xl bg-[#FFF5EC] hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl mb-3" aria-hidden="true">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-[#012B4E] mb-2">
                <Counter target={stat.value} />
              </div>
              <div className="text-sm md:text-base font-medium text-gray-600">{stat.label}</div>
              {stat.description && (
                <div className="text-xs text-gray-400 mt-1">{stat.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
