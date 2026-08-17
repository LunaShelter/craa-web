import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { animalsService } from '@/services/animalsService';
import { StatusBadge } from '@/components/ui/Badge';
import { animals } from '@/data/animals';
import { ctaButtonClasses } from '@/lib/designTokens';

export async function generateStaticParams() {
  return animals.map((a) => ({ id: a.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const animal = animalsService.getById(id);
  if (!animal) return { title: 'Animal no encontrado' };
  return {
    title: `Historia de ${animal.name}`,
    description: animal.story,
  };
}

export default async function AnimalPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const animal = animalsService.getById(id);
  if (!animal) notFound();

  return (
    <div>
      <section className="bg-[#012B4E] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Link href="/historias" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors">
            ← Volver a historias
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">{animal.name}</h1>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <StatusBadge status={animal.status} />
            <span className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-sm">{animal.age}</span>
            {animal.breed && <span className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-sm">{animal.breed}</span>}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image src={animal.image} alt={`Foto de ${animal.name}`} fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#012B4E] mb-4">La historia de {animal.name}</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">{animal.story}</p>
              {animal.weight && (
                <div className="flex gap-4 mb-8">
                  <div className="bg-[#FFF5EC] rounded-xl p-4 flex-1 text-center">
                    <p className="text-xs text-gray-400 uppercase mb-1">Peso</p>
                    <p className="font-bold text-[#012B4E]">{animal.weight}</p>
                  </div>
                  <div className="bg-[#FFF5EC] rounded-xl p-4 flex-1 text-center">
                    <p className="text-xs text-gray-400 uppercase mb-1">Tipo</p>
                    <p className="font-bold text-[#012B4E] capitalize">{animal.type}</p>
                  </div>
                  <div className="bg-[#FFF5EC] rounded-xl p-4 flex-1 text-center">
                    <p className="text-xs text-gray-400 uppercase mb-1">Edad</p>
                    <p className="font-bold text-[#012B4E]">{animal.age}</p>
                  </div>
                </div>
              )}
              <div className="flex flex-col sm:flex-row gap-3">
                {animal.status === 'buscando-hogar' && (
                  <Link href="/donar" className={`flex-1 text-center ${ctaButtonClasses} font-bold px-6 py-3 rounded-xl transition-all active:scale-95`}>
                    QUIERO ADOPTARLO ❤️
                  </Link>
                )}
                <Link href="/donar" className="flex-1 text-center border-2 border-[#2BC4B5] text-[#2BC4B5] hover:bg-[#2BC4B5] hover:text-white font-bold px-6 py-3 rounded-xl transition-all active:scale-95">
                  QUIERO APOYARLO
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
