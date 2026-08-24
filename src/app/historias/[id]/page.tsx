import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { animalsService } from '@/services/animalsService';
import { StatusBadge } from '@/components/ui/Badge';
import { animals } from '@/data/animals';

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
      {/* Hero */}
      <section className="bg-[#012B4E] text-white py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <Link href="/historias" className="inline-flex items-center gap-2 text-white/40 hover:text-white/80 text-sm mb-6 transition-colors">
            ← Volver a historias
          </Link>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">{animal.name}</h1>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <StatusBadge status={animal.status} />
            <span className="bg-white/8 text-white/70 px-3 py-1 rounded-lg text-xs font-semibold">{animal.age}</span>
            {animal.breed && <span className="bg-white/8 text-white/70 px-3 py-1 rounded-lg text-xs font-semibold">{animal.breed}</span>}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-[0_12px_40px_0_rgba(1,43,78,0.15)]" style={{ aspectRatio: '4/3' }}>
              <Image src={animal.image} alt={`Foto de ${animal.name}`} fill className="object-cover" />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-extrabold text-[#012B4E] mb-5 tracking-tight leading-tight">
                La historia de {animal.name}
              </h2>
              <p className="text-[#4A6580] leading-relaxed text-base mb-8">{animal.story}</p>

              {/* Detail chips */}
              {animal.weight && (
                <div className="grid grid-cols-3 gap-3 mb-8">
                  <div className="bg-[#F7EAD8] rounded-xl p-4 text-center border border-[#E8D9C8]">
                    <p className="text-[10px] text-[#7A93A8] uppercase tracking-widest font-bold mb-1">Peso</p>
                    <p className="font-bold text-[#012B4E] text-sm">{animal.weight}</p>
                  </div>
                  <div className="bg-[#F7EAD8] rounded-xl p-4 text-center border border-[#E8D9C8]">
                    <p className="text-[10px] text-[#7A93A8] uppercase tracking-widest font-bold mb-1">Tipo</p>
                    <p className="font-bold text-[#012B4E] text-sm capitalize">{animal.type}</p>
                  </div>
                  <div className="bg-[#F7EAD8] rounded-xl p-4 text-center border border-[#E8D9C8]">
                    <p className="text-[10px] text-[#7A93A8] uppercase tracking-widest font-bold mb-1">Edad</p>
                    <p className="font-bold text-[#012B4E] text-sm">{animal.age}</p>
                  </div>
                </div>
              )}

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                {animal.status === 'buscando-hogar' && (
                  <Link
                    href="/donar"
                    className="flex-1 text-center inline-flex items-center justify-center bg-[#2BC4B5] hover:bg-[#22a99c] text-white font-bold px-6 py-3 rounded-xl transition-all active:scale-95 text-sm shadow-md"
                  >
                    QUIERO ADOPTARLO
                  </Link>
                )}
                <Link
                  href="/donar"
                  className="flex-1 text-center inline-flex items-center justify-center border-2 border-[#2BC4B5] text-[#2BC4B5] hover:bg-[#2BC4B5] hover:text-white font-bold px-6 py-3 rounded-xl transition-all active:scale-95 text-sm"
                >
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
