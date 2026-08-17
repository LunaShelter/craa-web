import type { Metadata } from 'next';
import Link from 'next/link';
import { animalsService } from '@/services/animalsService';
import AnimalCard from '@/components/animals/AnimalCard';
import { ctaButtonClasses } from '@/lib/designTokens';

export const metadata: Metadata = {
  title: 'Historias de rescatados',
  description: 'Conoce las historias de los animales rescatados por CRAA en Ayacucho. Algunos buscan hogar, otros ya encontraron el suyo.',
};

export default function HistoriasPage() {
  const all = animalsService.getAll();
  const available = animalsService.getByStatus('buscando-hogar');
  const recovering = animalsService.getByStatus('en-recuperacion');
  const adopted = animalsService.getByStatus('adoptado');

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#012B4E] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-[#2BC4B5]/20 border border-[#2BC4B5]/40 text-[#2BC4B5] px-4 py-2 rounded-full text-sm font-medium mb-6">
            🐾 Historias de rescatados
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Ellos cambiaron su historia</h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            Cada uno llegó herido, asustado o solo. Hoy son la prueba de que el amor puede transformar cualquier vida.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <p className="text-2xl font-bold text-[#FD544A]">{available.length}</p>
              <p className="text-sm text-gray-500">Buscando hogar</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#FC9A36]">{recovering.length}</p>
              <p className="text-sm text-gray-500">En recuperación</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">{adopted.length}</p>
              <p className="text-sm text-gray-500">Adoptados</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#012B4E]">{all.length}</p>
              <p className="text-sm text-gray-500">Total en la web</p>
            </div>
          </div>
        </div>
      </section>

      {/* Buscando hogar */}
      {available.length > 0 && (
        <section className="py-16 bg-[#FFF5EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#012B4E] mb-8 flex items-center gap-2">
              🏠 Buscando hogar
              <span className="bg-[#FD544A]/10 text-[#FD544A] text-sm px-3 py-1 rounded-full font-medium">{available.length}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {available.map((animal) => <AnimalCard key={animal.id} animal={animal} />)}
            </div>
          </div>
        </section>
      )}

      {/* En recuperación */}
      {recovering.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#012B4E] mb-8 flex items-center gap-2">
              🏥 En recuperación
              <span className="bg-yellow-100 text-yellow-700 text-sm px-3 py-1 rounded-full font-medium">{recovering.length}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recovering.map((animal) => <AnimalCard key={animal.id} animal={animal} />)}
            </div>
          </div>
        </section>
      )}

      {/* Adoptados */}
      {adopted.length > 0 && (
        <section className="py-16 bg-[#FFF5EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#012B4E] mb-8 flex items-center gap-2">
              ✅ Adoptados
              <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">{adopted.length}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {adopted.map((animal) => <AnimalCard key={animal.id} animal={animal} />)}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-[#012B4E] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">¿Quieres conocerlos en persona?</h2>
          <p className="text-white/80 mb-8">Todos los viernes organizamos nuestra campaña de adopción en el centro de Ayacucho.</p>
          <Link href="/donar" className={`inline-flex items-center justify-center gap-2 ${ctaButtonClasses} font-bold px-8 py-4 rounded-xl transition-all active:scale-95`}>
            DONAR Y APOYARLOS ❤️
          </Link>
        </div>
      </section>
    </div>
  );
}
