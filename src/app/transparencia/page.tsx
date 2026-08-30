import type { Metadata } from 'next';
import Link from 'next/link';
import { transparencyService } from '@/services/transparencyService';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'Transparencia',
  description: 'Conoce cómo utilizamos cada sol que nos donan. Total transparencia en el uso de fondos de CRAA Ayacucho.',
};

const barColors: Record<string, string> = {
  'Alimentación': '#FC9A36',
  'Atención veterinaria': '#FD544A',
  'Infraestructura': '#2BC4B5',
  'Esterilización': '#FEE35A',
};

export default function TransparenciaPage() {
  const items = transparencyService.getItems();
  const report = transparencyService.getAnnualReport();

  return (
    <div className="bg-[#FFF5EC]">
      <PageHero
        kicker="Transparencia"
        title={<>Tu confianza también es parte de nuestra <span className="text-[#FC9A36]">misión.</span></>}
        lead="Creemos que la transparencia es fundamental. Aquí puedes ver exactamente cómo se utiliza cada donación."
        actions={
          <>
            <Link href="/donar" className="inline-flex items-center justify-center gap-2 bg-[#2BC4B5] hover:bg-[#22a99c] text-white font-bold px-[34px] py-[17px] rounded-full text-base tracking-[0.02em] shadow-[0_8px_20px_-6px_rgba(43,196,181,0.55)] transition-all active:scale-95">
              DONAR AHORA
            </Link>
            <a href="#necesidades" className="inline-flex items-center justify-center gap-2 border-2 border-[#012B4E] text-[#012B4E] hover:bg-[#012B4E] hover:text-white font-semibold px-[30px] py-[15px] rounded-full text-base transition-all active:scale-95">
              Ver metas del mes
            </a>
          </>
        }
        aside={
          <div className="bg-white border border-[#F0E6D8] rounded-[40px] p-9 lg:p-11 shadow-[0_20px_50px_-28px_rgba(1,43,78,0.35)]">
            <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A93A8] mb-6">
              Informe {report.year} · resumen
            </div>
            <div className="flex flex-col gap-[22px]">
              <div className="flex items-baseline justify-between gap-4 pb-[22px] border-b border-[#F0E6D8]">
                <div>
                  <div className="text-[15px] font-semibold text-[#012B4E]">Animales rescatados</div>
                  <div className="text-[13px] text-[#7A93A8]">durante todo el año</div>
                </div>
                <div className="font-heading text-[44px] text-[#FD544A] leading-none">{report.totalRescued}</div>
              </div>
              <div className="flex items-baseline justify-between gap-4 pb-[22px] border-b border-[#F0E6D8]">
                <div>
                  <div className="text-[15px] font-semibold text-[#012B4E]">Adoptados</div>
                  <div className="text-[13px] text-[#7A93A8]">encontraron hogar</div>
                </div>
                <div className="font-heading text-[44px] text-[#1a8f84] leading-none">{report.totalAdopted}</div>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <div className="text-[15px] font-semibold text-[#012B4E]">Total gestionado</div>
                  <div className="text-[13px] text-[#7A93A8]">con transparencia</div>
                </div>
                <div className="font-heading text-[44px] text-[#012B4E] leading-none">S/ {(report.totalSpent / 1000).toFixed(0)}k</div>
              </div>
            </div>
          </div>
        }
      />

      {/* Metas actuales */}
      <section id="necesidades" className="pb-20 lg:pb-24 scroll-mt-24" aria-label="Necesidades actuales">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12 mb-11">
            <div className="max-w-[620px]">
              <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A93A8] mb-4">Metas actuales</div>
              <h2 className="font-heading text-[36px] lg:text-[48px] text-[#012B4E] leading-[1.1]">
                Esto es lo que necesitamos cubrir
              </h2>
            </div>
            <p className="text-[#4A6580] text-base leading-[1.7] max-w-[340px] lg:mb-1.5">
              Cada categoría muestra el avance hacia nuestra meta. Los montos se actualizan cada mes.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {items.map((item) => {
              const pct = Math.round((item.amount / item.target) * 100);
              return (
                <div key={item.id} className="bg-white border border-[#F0E6D8] rounded-[28px] px-8 py-[30px] grid grid-cols-[1fr_auto] gap-6 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-3.5">
                      <div className="w-11 h-11 rounded-full bg-[#F7EAD8] flex items-center justify-center flex-shrink-0">
                        <span className="text-xl" aria-hidden="true">{item.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-heading text-[21px] text-[#012B4E]">{item.category}</h3>
                        <span className="text-xs text-[#7A93A8] capitalize">
                          Meta {item.period} · S/ {item.target.toLocaleString('es-PE')}
                        </span>
                      </div>
                    </div>
                    <div className="w-full h-2.5 bg-[#F7EAD8] rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-1000" style={{ width: pct + '%', backgroundColor: item.color }} />
                    </div>
                    <p className="text-[13px] text-[#7A93A8] mt-3 leading-[1.6]">{item.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-heading text-[40px] text-[#012B4E] leading-none">{pct}%</div>
                    <div className="text-[13px] font-semibold text-[#7A93A8] mt-1.5">S/ {item.amount.toLocaleString('es-PE')}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Informe anual */}
      <section className="pb-20 lg:pb-24" aria-label={`Informe anual \${report.year}`}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-[#012B4E] rounded-[44px] p-8 sm:p-12 lg:p-14 relative overflow-hidden">
            <div className="absolute -top-[140px] -right-[100px] w-[440px] h-[440px] rounded-full bg-[#2BC4B5]/12 pointer-events-none" aria-hidden="true" />
            <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-12 lg:gap-16 items-start">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2BC4B5] mb-4">Informe anual</div>
                <h2 className="font-heading text-[36px] lg:text-[48px] text-white leading-[1.08] mb-5">
                  ¿Cómo se usaron los fondos en <span className="text-[#FEE35A]">{report.year}?</span>
                </h2>
                <p className="text-white/65 text-base leading-[1.75] mb-8">
                  S/ {report.totalSpent.toLocaleString('es-PE')} gestionados durante el año. Este es el desglose por categoría, sin intermediarios y sin gastos administrativos ocultos.
                </p>
                <div className="bg-white/[0.07] rounded-3xl px-[26px] py-[22px]">
                  <div className="text-[10px] text-white/45 uppercase tracking-[0.14em] font-bold mb-2">Gasto administrativo</div>
                  <div className="font-heading text-[30px] text-white leading-none">5%</div>
                  <div className="text-[13px] text-white/50 mt-1.5">El 95% restante va directamente a los animales.</div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                {report.breakdown.map((row) => (
                  <div key={row.category}>
                    <div className="flex justify-between items-baseline mb-2.5">
                      <span className="font-semibold text-white text-base">{row.category}</span>
                      <span className="text-[13px] text-white/60 font-medium">
                        S/ {row.amount.toLocaleString('es-PE')} · {row.percentage}%
                      </span>
                    </div>
                    <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{ width: row.percentage + '%', backgroundColor: barColors[row.category] ?? 'rgba(255,255,255,0.5)' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 lg:pb-26" aria-label="Aporta a CRAA">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-[#F7EAD8] border border-[#E8D9C8] rounded-[40px] p-8 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-14 items-center">
            <div>
              <h2 className="font-heading text-[32px] lg:text-[42px] text-[#012B4E] leading-[1.1]">Tu aporte hace la diferencia</h2>
              <p className="text-[#4A6580] text-base leading-[1.75] mt-4 max-w-[520px]">
                Con total transparencia, cada sol que recibimos va directamente a los animales. Si quieres el informe completo en PDF, escríbenos.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/donar" className="flex items-center justify-center gap-2 bg-[#2BC4B5] hover:bg-[#22a99c] text-white font-bold px-8 py-[17px] rounded-full text-[15px] tracking-[0.02em] transition-all active:scale-95">
                DONAR AHORA
              </Link>
              <a href="mailto:contacto@craa.pe" className="flex items-center justify-center gap-2 border-2 border-[#012B4E] text-[#012B4E] hover:bg-[#012B4E] hover:text-white font-semibold px-8 py-[15px] rounded-full text-[15px] transition-all active:scale-95">
                SOLICITAR INFORME COMPLETO
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
