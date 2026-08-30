import Image from 'next/image';
import Link from 'next/link';
import { Animal, AnimalStatus } from '@/types';

const statusStyles: Record<AnimalStatus, { label: string; dot: string; text: string }> = {
  adoptado:          { label: 'Adoptado',        dot: '#2BC4B5', text: '#1a8f84' },
  'en-recuperacion': { label: 'En recuperación', dot: '#FC9A36', text: '#9e5800' },
  'buscando-hogar':  { label: 'Buscando hogar',  dot: '#FD544A', text: '#c2372f' },
};

interface AnimalCardProps {
  animal: Animal;
}

export default function AnimalCard({ animal }: AnimalCardProps) {
  const status = statusStyles[animal.status];

  return (
    <article className="bg-white rounded-[28px] overflow-hidden border border-[#F0E6D8] hover:shadow-[0_16px_32px_-18px_rgba(1,43,78,0.28)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      {/* Image — portrait 4:5, washed so it sits back into the page */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
        <Image
          src={animal.image}
          alt={`Foto de ${animal.name}`}
          fill
          className="object-cover [filter:saturate(0.9)_contrast(0.95)] transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute top-3.5 left-3.5">
          <span
            className="inline-flex items-center gap-[7px] px-3.5 py-[7px] rounded-full text-[11px] font-bold uppercase tracking-[0.05em] bg-white"
            style={{ color: status.text }}
          >
            <span className="w-[7px] h-[7px] rounded-full" style={{ backgroundColor: status.dot }} aria-hidden="true" />
            {status.label}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-[22px] flex flex-col flex-1">
        <div className="flex items-baseline justify-between gap-2 mb-2.5">
          <h3 className="font-heading text-2xl text-[#012B4E] leading-none">{animal.name}</h3>
          <span className="text-xs font-semibold text-[#7A93A8] text-right">
            {animal.age}
            {animal.breed ? ` · ${animal.breed}` : ''}
          </span>
        </div>
        <p className="text-[#4A6580] text-sm leading-[1.65] flex-1 mb-5 line-clamp-3">{animal.story}</p>

        {/* One primary pill + a quiet text link, always at the bottom */}
        <div className="flex items-center gap-3.5 mt-auto">
          <Link
            href={`/historias/${animal.id}`}
            className="flex-1 text-center text-sm font-bold bg-[#2BC4B5] hover:bg-[#22a99c] text-white py-3 rounded-full transition-all duration-200 active:scale-95 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2BC4B5]"
          >
            Conocer
          </Link>
          <Link
            href="/donar"
            className="text-sm font-semibold text-[#012B4E] underline underline-offset-[3px] hover:text-[#2BC4B5] transition-colors"
          >
            Ayudar
          </Link>
        </div>
      </div>
    </article>
  );
}
