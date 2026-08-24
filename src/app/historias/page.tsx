import type { Metadata } from 'next';
import Link from 'next/link';
import { animalsService } from '@/services/animalsService';
import AnimalCard from '@/components/animals/AnimalCard';

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
      <section className="bg-[#012B4E] text-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Ellos cambiaron su historia
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Cada uno llegó herido, asustado o solo. Hoy son la prueba de que el amor puede transformar cualquier vida.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white py-8 border-b border-[#F0E6D8]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-10 text-center">
            <div>
              <p className="text-3xl font-extrabold text-[#FD544A] leading-none">{available.length}</p>
              <p className="text-xs text-[#7A93A8] uppercase tracking-widest font-medium mt-1">Buscando hogar</p>
            </div>
            <div className="w-px bg-[#F0E6D8]" aria-hidden="true" />
            <div>
              <p className="text-3xl font-extrabold text-[#FC9A36] leading-none">{recovering.length}</p>
              <p className="text-xs text-[#7A93A8] uppercase tracking-widest font-medium mt-1">En recuperación</p>
            </div>
            <div className="w-px bg-[#F0E6D8]" aria-hidden="true" />
            <div>
              <p className="text-3xl font-extrabold text-emerald-600 leading-none">{adopted.length}</p>
              <p className="text-xs text-[#7A93A8] uppercase tracking-widest font-medium mt-1">Adoptados</p>
            </div>
            <div className="w-px bg-[#F0E6D8]" aria-hidden="true" />
            <div>
              <p className="text-3xl font-extrabold text-[#012B4E] leading-none">{all.length}</p>
              <p className="text-xs text-[#7A93A8] uppercase tracking-widest font-medium mt-1">Total</p>
            </div>
          </div>
        </div>
      </section>

      {/* Buscando hogar */}
      {available.length > 0 && (
        <section className="py-20 bg-[#FFF5EC]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex items-center gap-3 mb-10">
              <h2 className="text-2xl font-extrabold text-[#012B4E]">Buscando hogar</h2>
              <span className="bg-[#FFF0EF] text-[#c0392b] border border-[#f5c6c3] text-xs font-bold px-3 py-1 rounded-lg">{available.length}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
              {available.map((animal) => <AnimalCard key={animal.id} animal={animal} />)}
            </div>
          </div>
        </section>
      )}

      {/* En recuperación */}
      {recovering.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex items-center gap-3 mb-10">
              <h2 className="text-2xl font-extrabold text-[#012B4E]">En recuperación</h2>
              <span className="bg-amber-50 text-amber-700 border border-amber-200 text-xs font-bold px-3 py-1 rounded-lg">{recovering.length}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
              {recovering.map((animal) => <AnimalCard key={animal.id} animal={animal} />)}
            </div>
          </div>
        </section>
      )}

      {/* Adoptados */}
      {adopted.length > 0 && (
        <section className="py-20 bg-[#FFF5EC]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex items-center gap-3 mb-10">
              <h2 className="text-2xl font-extrabold text-[#012B4E]">Adoptados</h2>
              <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold px-3 py-1 rounded-lg">{adopted.length}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
              {adopted.map((animal) => <AnimalCard key={animal.id} animal={animal} />)}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-[#012B4E] text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">Ven en persona los viernes</h2>
          <p className="text-white/55 mb-10 text-lg">Todos los viernes organizamos nuestra campaña de adopción en el centro de Ayacucho.</p>
          <Link href="/donar" className="inline-flex items-center justify-center gap-2 bg-[#2BC4B5] hover:bg-[#22a99c] text-white font-bold px-8 py-3.5 rounded-xl transition-all active:scale-95 text-sm shadow-lg">
            DONAR Y APOYARLOS
          </Link>
        </div>
      </section>
    </div>
  );
}
