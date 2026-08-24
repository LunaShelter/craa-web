import Link from 'next/link';
import { TransparencyItem } from '@/types';
import ProgressBar from '@/components/ui/ProgressBar';
import SectionHeader from '@/components/ui/SectionHeader';

interface TransparencySectionProps {
  items: TransparencyItem[];
}

export default function TransparencySection({ items }: TransparencySectionProps) {
  return (
    <section className="py-24 bg-white" aria-label="Transparencia">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          title="Tu confianza también es parte de nuestra misión"
          subtitle="Sabemos que confiar en una organización requiere pruebas. Aquí te mostramos en qué se utiliza cada sol que nos donas."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {items.map((item) => {
            const percentage = Math.round((item.amount / item.target) * 100);
            return (
              <div
                key={item.id}
                className="bg-[#F7EAD8] rounded-2xl p-6 border border-[#E8D9C8] hover:shadow-[0_4px_16px_0_rgba(1,43,78,0.10)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon + percentage row */}
                <div className="flex items-start justify-between mb-3">
                  <div className="text-2xl" aria-hidden="true">{item.icon}</div>
                  <div
                    className="text-2xl font-extrabold leading-none"
                    style={{ color: item.color }}
                  >
                    {percentage}%
                  </div>
                </div>

                <h3 className="font-bold text-[#012B4E] text-base mb-1">{item.category}</h3>
                <p className="text-xs text-[#7A93A8] mb-4 leading-relaxed">{item.description}</p>

                <ProgressBar value={item.amount} max={item.target} color={item.color} />

                <div className="mt-3 flex justify-between items-end">
                  <div>
                    <p className="text-[10px] text-[#7A93A8] uppercase tracking-widest font-bold">Meta {item.period}</p>
                    <p className="text-sm font-bold text-[#012B4E] mt-0.5">
                      S/ {item.target.toLocaleString('es-PE')}
                    </p>
                  </div>
                  <div className="text-xs text-[#7A93A8]">
                    S/ {item.amount.toLocaleString('es-PE')}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/transparencia"
            className="inline-flex items-center gap-2 border-2 border-[#012B4E] text-[#012B4E] hover:bg-[#012B4E] hover:text-white font-semibold px-8 py-3.5 rounded-xl text-sm transition-all duration-200 active:scale-95"
          >
            VER NUESTRA TRANSPARENCIA
          </Link>
        </div>
      </div>
    </section>
  );
}
