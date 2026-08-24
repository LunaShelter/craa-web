import Link from 'next/link';
import { Animal } from '@/types';
import AnimalCard from './AnimalCard';
import SectionHeader from '@/components/ui/SectionHeader';

interface AnimalsSectionProps {
  animals: Animal[];
}

export default function AnimalsSection({ animals }: AnimalsSectionProps) {
  return (
    <section className="py-24 bg-[#FFF5EC]" aria-label="Historias de rescatados">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          title="Conoce a quienes cambiaron su historia"
          subtitle="Cada uno tiene un nombre, una historia y un corazón que late con esperanza. Algunos ya encontraron su hogar, otros siguen esperando el tuyo."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 items-stretch">
          {animals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/historias"
            className="inline-flex items-center gap-2 bg-[#012B4E] hover:bg-[#024070] text-white font-semibold px-8 py-3.5 rounded-xl text-sm transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
          >
            VER TODAS LAS HISTORIAS
          </Link>
        </div>
      </div>
    </section>
  );
}
