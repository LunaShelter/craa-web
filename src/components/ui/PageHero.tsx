import Image from 'next/image';
import { ReactNode } from 'react';

interface PageHeroProps {
  kicker: string;
  title: ReactNode;
  lead: string;
  actions?: ReactNode;
  /** Foto del hero. Se ignora si se pasa \`aside\`. */
  imageSrc?: string;
  imageAlt?: string;
  /** border-radius de la máscara — cada página usa una esquina recta distinta. */
  imageMask?: string;
  /** Chip/círculo flotante sobre la foto. Debe traer sus propias clases absolute. */
  badge?: ReactNode;
  /** Alternativa a la foto (p. ej. la tarjeta resumen de Transparencia). */
  aside?: ReactNode;
}

/**
 * Hero de página interna: crema, asimétrico, alineado a la izquierda, con un
 * círculo arena saliendo por la derecha — el mismo patrón que el home.
 */
export default function PageHero({
  kicker,
  title,
  lead,
  actions,
  imageSrc,
  imageAlt = '',
  imageMask = '280px 40px 280px 280px',
  badge,
  aside,
}: PageHeroProps) {
  return (
    <section className="relative bg-[#FFF5EC] pt-9 pb-20 lg:pb-22 overflow-hidden">
      <div
        className="absolute -top-[200px] -right-[180px] w-[640px] h-[640px] rounded-full bg-[#F7EAD8] pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A93A8] mb-[18px]">{kicker}</div>
            <h1 className="font-heading text-[40px] sm:text-[52px] lg:text-[64px] text-[#012B4E] leading-[1.04] tracking-[-0.005em]">
              {title}
            </h1>
            <p className="text-lg lg:text-[19px] text-[#4A6580] leading-[1.65] mt-[26px] max-w-[490px]">{lead}</p>
            {actions && <div className="flex flex-wrap gap-3 mt-9 items-center">{actions}</div>}
          </div>

          {aside ? (
            aside
          ) : imageSrc ? (
            <div className="relative">
              <div
                className="overflow-hidden shadow-[0_24px_60px_-20px_rgba(1,43,78,0.35)]"
                style={{ borderRadius: imageMask, aspectRatio: '1/1' }}
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={1200}
                  height={1200}
                  className="w-full h-full object-cover [filter:saturate(0.88)_contrast(0.94)_brightness(1.03)]"
                  priority
                />
              </div>
              {badge}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
