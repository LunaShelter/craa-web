import Image from 'next/image';
import Link from 'next/link';
import { Animal } from '@/types';
import { StatusBadge } from '@/components/ui/Badge';

interface AnimalCardProps {
  animal: Animal;
}

export default function AnimalCard({ animal }: AnimalCardProps) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-[#F0E6D8] shadow-[0_2px_8px_0_rgba(1,43,78,0.06)] hover:shadow-[0_8px_24px_0_rgba(1,43,78,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      {/* Image — fixed aspect ratio 4:3 */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
        <Image
          src={animal.image}
          alt={`Foto de ${animal.name}`}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Status badge */}
        <div className="absolute top-3 left-3">
          <StatusBadge status={animal.status} />
        </div>
        {/* Age badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-2.5 py-1 text-xs font-semibold text-[#012B4E]">
          {animal.age}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-[#012B4E] leading-tight">{animal.name}</h3>
          {animal.breed && (
            <p className="text-xs text-[#7A93A8] mt-0.5 font-medium uppercase tracking-wide">{animal.breed}</p>
          )}
        </div>
        <p className="text-[#4A6580] text-sm leading-relaxed flex-1 mb-5 line-clamp-3">
          {animal.story}
        </p>
        {/* Buttons — always at bottom */}
        <div className="flex gap-2 mt-auto">
          <Link
            href={`/historias/${animal.id}`}
            className="flex-1 text-center text-sm font-semibold text-[#2BC4B5] border-2 border-[#2BC4B5] hover:bg-[#2BC4B5] hover:text-white px-3 py-2.5 rounded-xl transition-all duration-200 active:scale-95"
          >
            CONOCER
          </Link>
          <Link
            href="/donar"
            className="flex-1 text-center text-sm font-semibold bg-[#2BC4B5] hover:bg-[#22a99c] text-white px-3 py-2.5 rounded-xl transition-all duration-200 active:scale-95 shadow-sm"
          >
            AYUDAR
          </Link>
        </div>
      </div>
    </article>
  );
}
