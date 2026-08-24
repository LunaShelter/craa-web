import type { Metadata } from 'next';
import Link from 'next/link';
import { transparencyService } from '@/services/transparencyService';
import ProgressBar from '@/components/ui/ProgressBar';

export const metadata: Metadata = {
  title: 'Transparencia',
  description: 'Conoce cómo utilizamos cada sol que nos donan. Total transparencia en el uso de fondos de CRAA Ayacucho.',
};

export default function TransparenciaPage() {
  const items = transparencyService.getItems();
  const report = transparencyService.getAnnualReport();

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#012B4E] text-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Tu confianza también es<br />parte de nuestra misión
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Creemos que la transparencia es fundamental. Aquí puedes ver exactamente cómo se utiliza cada donación.
          </p>
        </div>
      </section>

      {/* Current needs */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-extrabold text-[#012B4E] mb-3 tracking-tight">Esto es lo que necesitamos cubrir</h2>
            <p className="text-[#4A6580] text-base">Cada categoría muestra el avance hacia nuestra meta mensual.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {items.map((item) => {
              const pct = Math.round((item.amount / item.target) * 100);
              return (
                <div key={item.id} className="bg-[#F7EAD8] rounded-2xl p-6 border border-[#E8D9C8] hover:shadow-[0_4px_16px_0_rgba(1,43,78,0.10)] hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-2xl" aria-hidden="true">{item.icon}</div>
                    <div className="text-2xl font-extrabold leading-none" style={{ color: item.color }}>{pct}%</div>
                  </div>
                  <h3 className="font-bold text-[#012B4E] text-base mb-1">{item.category}</h3>
                  <p className="text-xs text-[#7A93A8] mb-4 leading-relaxed">{item.description}</p>
                  <ProgressBar value={item.amount} max={item.target} color={item.color} />
                  <div className="mt-3 flex justify-between items-end">
                    <div>
                      <p className="text-[10px] text-[#7A93A8] uppercase tracking-widest font-bold">Meta {item.period}</p>
                      <p className="text-sm font-bold text-[#012B4E] mt-0.5">S/ {item.target.toLocaleString('es-PE')}</p>
                    </div>
                    <p className="text-xs text-[#7A93A8]">S/ {item.amount.toLocaleString('es-PE')}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Annual report */}
      <section className="py-24 bg-[#FFF5EC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-extrabold text-[#012B4E] mb-3 tracking-tight">Informe {report.year}</h2>
            <p className="text-[#4A6580] text-base">Un resumen de nuestro impacto y gestión de recursos.</p>
          </div>

          {/* Big number stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            <div className="bg-white rounded-2xl p-8 text-center border border-[#F0E6D8] shadow-[0_2px_8px_0_rgba(1,43,78,0.06)]">
              <div className="text-5xl font-extrabold text-[#FD544A] mb-2 leading-none">{report.totalRescued}</div>
              <p className="text-[#012B4E] font-semibold text-sm">Animales rescatados</p>
              <p className="text-xs text-[#7A93A8] mt-1">en {report.year}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center border border-[#F0E6D8] shadow-[0_2px_8px_0_rgba(1,43,78,0.06)]">
              <div className="text-5xl font-extrabold text-emerald-600 mb-2 leading-none">{report.totalAdopted}</div>
              <p className="text-[#012B4E] font-semibold text-sm">Adoptados</p>
              <p className="text-xs text-[#7A93A8] mt-1">encontraron hogar</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center border border-[#F0E6D8] shadow-[0_2px_8px_0_rgba(1,43,78,0.06)]">
              <div className="text-5xl font-extrabold text-[#2BC4B5] mb-2 leading-none">S/ {(report.totalSpent / 1000).toFixed(0)}k</div>
              <p className="text-[#012B4E] font-semibold text-sm">Total gestionado</p>
              <p className="text-xs text-[#7A93A8] mt-1">con transparencia</p>
            </div>
          </div>

          {/* Breakdown */}
          <div className="bg-white rounded-2xl p-8 border border-[#F0E6D8] shadow-[0_2px_8px_0_rgba(1,43,78,0.06)]">
            <h3 className="text-xl font-bold text-[#012B4E] mb-6 text-center">¿Cómo se usaron los fondos?</h3>
            <div className="space-y-5">
              {report.breakdown.map((item) => (
                <div key={item.category}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-[#012B4E] text-sm">{item.category}</span>
                    <span className="text-xs text-[#7A93A8] font-medium">S/ {item.amount.toLocaleString('es-PE')} · {item.percentage}%</span>
                  </div>
                  <div className="h-2 bg-[#F7EAD8] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#2BC4B5] transition-all duration-1000"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#012B4E] text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">Tu aporte hace la diferencia</h2>
          <p className="text-white/55 mb-10 text-lg">Con total transparencia, cada sol que recibes va directamente a los animales.</p>
          <Link href="/donar" className="inline-flex items-center justify-center gap-2 bg-[#2BC4B5] hover:bg-[#22a99c] text-white font-bold px-8 py-3.5 rounded-xl transition-all active:scale-95 text-sm shadow-lg">
            DONAR AHORA
          </Link>
        </div>
      </section>
    </div>
  );
}
