import type { Metadata } from 'next';
import Link from 'next/link';
import { transparencyService } from '@/services/transparencyService';
import ProgressBar from '@/components/ui/ProgressBar';
import { ctaButtonClasses } from '@/lib/designTokens';

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
      <section className="bg-[#012B4E] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-[#2BC4B5]/20 border border-[#2BC4B5]/40 text-[#2BC4B5] px-4 py-2 rounded-full text-sm font-medium mb-6">
            🔍 Transparencia
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tu confianza también es<br />parte de nuestra misión</h1>
          <p className="text-white/80 text-xl">
            Creemos que la transparencia es fundamental. Aquí puedes ver exactamente cómo se utiliza cada donación.
          </p>
        </div>
      </section>

      {/* Current needs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#012B4E] mb-3">Necesidades actuales</h2>
            <p className="text-gray-600 text-lg">Esto es lo que necesitamos cubrir para seguir adelante.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item) => {
              const pct = Math.round((item.amount / item.target) * 100);
              return (
                <div key={item.id} className="bg-[#FFF5EC] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                  <div className="text-3xl mb-3" aria-hidden="true">{item.icon}</div>
                  <h3 className="font-bold text-[#012B4E] text-lg mb-1">{item.category}</h3>
                  <p className="text-sm text-gray-500 mb-4 leading-relaxed">{item.description}</p>
                  <ProgressBar value={item.amount} max={item.target} color={item.color} />
                  <div className="mt-3">
                    <p className="text-xs text-gray-400">Meta {item.period}: S/ {item.target.toLocaleString('es-PE')}</p>
                    <p className="text-xs text-gray-400">Recaudado: S/ {item.amount.toLocaleString('es-PE')} ({pct}%)</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Annual report */}
      <section className="py-16 bg-[#FFF5EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#012B4E] mb-3">Informe anual {report.year}</h2>
            <p className="text-gray-600 text-lg">Un resumen de nuestro impacto y gestión de recursos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="text-4xl font-bold text-[#FD544A] mb-2">{report.totalRescued}</div>
              <p className="text-gray-600 font-medium">Animales rescatados</p>
              <p className="text-sm text-gray-400">en {report.year}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="text-4xl font-bold text-green-600 mb-2">{report.totalAdopted}</div>
              <p className="text-gray-600 font-medium">Adoptados</p>
              <p className="text-sm text-gray-400">encontraron hogar</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="text-4xl font-bold text-[#2BC4B5] mb-2">S/ {(report.totalSpent / 1000).toFixed(0)}k</div>
              <p className="text-gray-600 font-medium">Total gestionado</p>
              <p className="text-sm text-gray-400">con transparencia</p>
            </div>
          </div>

          {/* Breakdown */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-[#012B4E] mb-6 text-center">¿Cómo se usaron los fondos?</h3>
            <div className="space-y-5">
              {report.breakdown.map((item) => (
                <div key={item.category}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">{item.category}</span>
                    <span className="text-sm text-gray-500">S/ {item.amount.toLocaleString('es-PE')} ({item.percentage}%)</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
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
      <section className="py-16 bg-[#012B4E] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Tu aporte hace la diferencia</h2>
          <p className="text-white/80 mb-8">Con total transparencia, cada sol que recibes va directamente a los animales.</p>
          <Link href="/donar" className={`inline-flex items-center justify-center gap-2 ${ctaButtonClasses} font-bold px-8 py-4 rounded-xl transition-all active:scale-95`}>
            DONAR AHORA ❤️
          </Link>
        </div>
      </section>
    </div>
  );
}
