import Link from 'next/link';
import { TransparencyItem } from '@/types';

interface TransparencySectionProps {
  items: TransparencyItem[];
}

/** Editorial dashboard: one big number per row instead of four small cards. */
export default function TransparencySection({ items }: TransparencySectionProps) {
  return (
    <section className="pb-20 lg:pb-26 bg-[#FFF5EC]" aria-label="Transparencia">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="bg-[#F7EAD8] border border-[#E8D9C8] rounded-[40px] p-8 sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-10 lg:gap-16 items-start">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#1a8f84] mb-4">Transparencia</div>
              <h2 className="font-heading text-[34px] lg:text-[44px] text-[#012B4E] leading-[1.1] mb-5">
                Tu confianza también es parte de nuestra misión
              </h2>
              <p className="text-[#4A6580] text-base leading-[1.7] mb-8">
                Sabemos que confiar en una organización requiere pruebas. Aquí te mostramos en qué se utiliza cada sol que
                nos donas.
              </p>
              <Link
                href="/transparencia"
                className="flex w-full items-center justify-center gap-2.5 border-2 border-[#012B4E] text-[#012B4E] hover:bg-[#012B4E] hover:text-white font-bold px-[30px] py-3.5 rounded-full text-sm transition-all duration-200 active:scale-95"
              >
                VER NUESTRA TRANSPARENCIA
              </Link>
            </div>

            <div className="flex flex-col gap-1">
              {items.map((item) => {
                const percentage = Math.min(Math.round((item.amount / item.target) * 100), 100);
                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-[22px] px-[26px] py-[22px] grid grid-cols-[1fr_auto] gap-5 items-center"
                  >
                    <div>
                      <div className="flex flex-wrap items-baseline gap-2.5 mb-3">
                        <h3 className="font-bold text-[#012B4E] text-base">{item.category}</h3>
                        <span className="text-xs text-[#7A93A8] capitalize">
                          {item.period} · S/ {item.target.toLocaleString('es-PE')}
                        </span>
                      </div>
                      <div
                        className="w-full bg-[#F7EAD8] rounded-full overflow-hidden h-2"
                        role="progressbar"
                        aria-valuenow={item.amount}
                        aria-valuemin={0}
                        aria-valuemax={item.target}
                        aria-label={item.category}
                      >
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${percentage}%`, backgroundColor: item.color }}
                        />
                      </div>
                      <p className="text-xs text-[#7A93A8] mt-2.5 leading-[1.5]">{item.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-heading text-[34px] text-[#012B4E] leading-none">{percentage}%</div>
                      <div className="text-xs font-semibold text-[#7A93A8] mt-1">
                        S/ {item.amount.toLocaleString('es-PE')}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
