import Link from 'next/link';
import { TransparencyItem } from '@/types';
import ProgressBar from '@/components/ui/ProgressBar';
import SectionHeader from '@/components/ui/SectionHeader';

interface TransparencySectionProps {
  items: TransparencyItem[];
}

export default function TransparencySection({ items }: TransparencySectionProps) {
  return (
    <section className="py-20 bg-white" aria-label="Transparencia">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Tu confianza también es parte de nuestra misión"
          subtitle="Sabemos que confiar en una organización requiere pruebas. Aquí te mostramos en qué se utiliza cada sol que nos donas."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {items.map((item) => {
            const percentage = Math.round((item.amount / item.target) * 100);
            return (
              <div
                key={item.id}
                className="bg-[#FFF5EC] rounded-2xl p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-3" aria-hidden="true">{item.icon}</div>
                <h3 className="font-bold text-[#012B4E] text-lg mb-1">{item.category}</h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{item.description}</p>

                <ProgressBar value={item.amount} max={item.target} color={item.color} />

                <div className="mt-3 flex justify-between items-center">
                  <div>
                    <span className="text-xs text-gray-400">Meta {item.period}</span>
                    <p className="text-sm font-bold text-gray-600">
                      S/ {item.target.toLocaleString('es-PE')}
                    </p>
                  </div>
                  <div
                    className="text-2xl font-bold"
                    style={{ color: item.color }}
                  >
                    {percentage}%
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/transparencia"
            className="inline-flex items-center gap-2 border-2 border-[#012B4E] text-[#012B4E] hover:bg-[#012B4E] hover:text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 active:scale-95"
          >
            VER NUESTRA TRANSPARENCIA
          </Link>
        </div>
      </div>
    </section>
  );
}
