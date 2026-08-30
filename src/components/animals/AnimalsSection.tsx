import Link from 'next/link';
import { Animal } from '@/types';
import AnimalCard from './AnimalCard';

interface AnimalsSectionProps {
  animals: Animal[];
}

export default function AnimalsSection({ animals }: AnimalsSectionProps) {
  return (
    <section className="py-20 lg:py-26 bg-[#FFF5EC]" aria-label="Historias de rescatados">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Left-aligned, asymmetric header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12 mb-12">
          <div className="max-w-[620px]">
            <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A93A8] mb-4">Historias de rescate</div>
            <h2 className="font-heading text-[38px] lg:text-[52px] text-[#012B4E] leading-[1.1]">
              Conoce a quienes cambiaron su historia
            </h2>
          </div>
          <p className="text-[#4A6580] text-base leading-[1.7] max-w-[340px] lg:mb-1.5">
            Cada uno tiene un nombre, una historia y un corazón que late con esperanza. Algunos ya encontraron su hogar,
            otros siguen esperando el tuyo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px] mb-12 items-stretch">
          {animals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>

        <Link
          href="/historias"
          className="inline-flex items-center gap-2.5 bg-[#012B4E] hover:bg-[#024070] text-white font-bold px-8 py-[15px] rounded-full text-sm tracking-[0.02em] transition-all duration-200 active:scale-95"
        >
          VER TODAS LAS HISTORIAS →
        </Link>
      </div>
    </section>
  );
}
