import Image from 'next/image';
import Link from 'next/link';
import { Animal } from '@/types';
import { StatusBadge } from '@/components/ui/Badge';
import { ctaButtonClasses } from '@/lib/designTokens';

interface AnimalCardProps {
  animal: Animal;
}

export default function AnimalCard({ animal }: AnimalCardProps) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={animal.image}
          alt={`Foto de ${animal.name}`}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <StatusBadge status={animal.status} />
        </div>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700">
          {(animal.type === 'perro' || animal.type === 'perra') ? '🐶' : '🐱'} {animal.age}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-[#012B4E] mb-1">{animal.name}</h3>
        {animal.breed && <p className="text-sm text-gray-400 mb-3">{animal.breed}</p>}
        <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4 line-clamp-3">
          {animal.story}
        </p>
        <div className="flex gap-2 mt-auto">
          <Link
            href={`/historias/${animal.id}`}
            className="flex-1 text-center text-sm font-semibold text-[#2BC4B5] border-2 border-[#2BC4B5] hover:bg-[#2BC4B5] hover:text-white px-3 py-2 rounded-xl transition-all duration-200"
          >
            CONÓCELO
          </Link>
          <Link
            href="/donar"
            className={`flex-1 text-center text-sm font-semibold ${ctaButtonClasses} px-3 py-2 rounded-xl transition-all duration-200`}
          >
            AYUDAR
          </Link>
        </div>
      </div>
    </article>
  );
}
