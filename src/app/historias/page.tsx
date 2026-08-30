import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { animalsService } from '@/services/animalsService';
import AnimalCard from '@/components/animals/AnimalCard';
import PageHero from '@/components/ui/PageHero';
import { Animal } from '@/types';

export const metadata: Metadata = {
  title: 'Historias de rescatados',
  description: 'Conoce las historias de los animales rescatados por CRAA en Ayacucho. Algunos buscan hogar, otros ya encontraron el suyo.',
};

/** Card horizontal — para grupos cortos (recuperación, adoptados). */
function WideAnimalCard({ animal, tone, children }: { animal: Animal; tone: { label: string; dot: string; text: string }; children?: React.ReactNode }) {
  return (
    <article className="bg-white border border-[#F0E6D8] rounded-[32px] overflow-hidden grid grid-cols-1 sm:grid-cols-[220px_1fr]">
      <div className="relative min-h-[220px]">
        <Image src={animal.image} alt={`Foto de \${animal.name}`} fill className="object-cover [filter:saturate(0.9)_contrast(0.95)]" sizes="(max-width: 640px) 100vw, 220px" />
      </div>
      <div className="p-7 sm:p-[30px]">
        <span className="inline-flex items-center gap-[7px] px-3.5 py-[7px] rounded-full text-[11px] font-bold uppercase tracking-[0.05em] bg-[#FFF5EC] mb-3.5" style={{ color: tone.text }}>
          <span className="w-[7px] h-[7px] rounded-full" style={{ backgroundColor: tone.dot }} aria-hidden="true" />
          {tone.label}
        </span>
        <div className="flex items-baseline gap-3 mb-2.5">
          <h3 className="font-heading text-[26px] text-[#012B4E] leading-none">{animal.name}</h3>
          <span className="text-xs font-semibold text-[#7A93A8]">{animal.age}{animal.breed ? ` · \${animal.breed}` : ''}</span>
        </div>
        <p className="text-[#4A6580] text-sm leading-[1.7] mb-5">{animal.story}</p>
        {children}
      </div>
    </article>
  );
}

export default function HistoriasPage() {
  const all = animalsService.getAll();
  const available = animalsService.getByStatus('buscando-hogar');
  const recovering = animalsService.getByStatus('en-recuperacion');
  const adopted = animalsService.getByStatus('adoptado');

  return (
    <div className="bg-[#FFF5EC]">
      <PageHero
        kicker="Historias de rescate"
        title={<>Ellos cambiaron<br />su <span className="text-[#FC9A36]">historia.</span></>}
        lead="Cada uno llegó herido, asustado o solo. Hoy son la prueba de que el amor puede transformar cualquier vida."
        imageSrc={available[0]?.image ?? 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=85'}
        imageAlt="Animal rescatado por CRAA"
        imageMask="280px 280px 280px 40px"
        badge={
          <div className="absolute top-12 -left-[34px] bg-[#012B4E] rounded-3xl px-[26px] py-5 shadow-[0_16px_34px_-12px_rgba(1,43,78,0.5)]">
            <div className="font-heading text-4xl text-[#FEE35A] leading-none">{all.length}</div>
            <div className="text-[11px] text-white/60 uppercase tracking-[0.14em] mt-1.5">Historias publicadas</div>
          </div>
        }
        actions={
          <>
            <Link href="/adopcion" className="inline-flex items-center justify-center gap-2 bg-[#2BC4B5] hover:bg-[#22a99c] text-white font-bold px-[34px] py-[17px] rounded-full text-base tracking-[0.02em] shadow-[0_8px_20px_-6px_rgba(43,196,181,0.55)] transition-all active:scale-95">
              QUIERO ADOPTAR
            </Link>
            <Link href="/donar" className="inline-flex items-center justify-center gap-2 border-2 border-[#012B4E] text-[#012B4E] hover:bg-[#012B4E] hover:text-white font-semibold px-[30px] py-[15px] rounded-full text-base transition-all active:scale-95">
              Apadrinar con una donación
            </Link>
          </>
        }
      />

      {/* Franja de conteo */}
      <section className="pb-20 lg:pb-22" aria-label="Resumen de estados">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-white border border-[#F0E6D8] rounded-[32px] px-8 py-10 lg:px-12 grid grid-cols-1 lg:grid-cols-[auto_1px_1fr_1fr_1fr] gap-8 lg:gap-10 items-center shadow-[0_4px_20px_-12px_rgba(1,43,78,0.18)]">
            <div className="max-w-[180px]">
              <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A93A8] mb-2">Ahora mismo</div>
              <div className="font-heading text-[22px] leading-[1.15] text-[#012B4E]">{all.length} animales con nombre y historia</div>
            </div>
            <div className="hidden lg:block w-px h-[78px] bg-[#F0E6D8]" aria-hidden="true" />
            <div>
              <div className="font-heading text-[44px] text-[#FD544A] leading-none">{available.length}</div>
              <div className="text-sm font-semibold text-[#012B4E] mt-1.5">buscando hogar</div>
              <div className="text-xs text-[#7A93A8] mt-0.5">Listos para ser adoptados</div>
            </div>
            <div>
              <div className="font-heading text-[44px] text-[#FC9A36] leading-none">{recovering.length}</div>
              <div className="text-sm font-semibold text-[#012B4E] mt-1.5">en recuperación</div>
              <div className="text-xs text-[#7A93A8] mt-0.5">Bajo tratamiento veterinario</div>
            </div>
            <div>
              <div className="font-heading text-[44px] text-[#1a8f84] leading-none">{adopted.length}</div>
              <div className="text-sm font-semibold text-[#012B4E] mt-1.5">adoptados</div>
              <div className="text-xs text-[#7A93A8] mt-0.5">Ya tienen familia</div>
            </div>
          </div>
        </div>
      </section>

      {/* Buscando hogar */}
      {available.length > 0 && (
        <section className="pb-20 lg:pb-24" aria-label="Animales buscando hogar">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12 mb-11">
              <div className="max-w-[600px]">
                <div className="inline-flex items-center gap-2.5 bg-white border border-[#E8D9C8] rounded-full pl-3 pr-[18px] py-2 text-xs font-bold tracking-[0.08em] uppercase text-[#c2372f] mb-[18px]">
                  <span className="w-2 h-2 rounded-full bg-[#FD544A]" aria-hidden="true" />
                  {available.length} esperando
                </div>
                <h2 className="font-heading text-[36px] lg:text-[48px] text-[#012B4E] leading-[1.1]">Buscando hogar</h2>
              </div>
              <p className="text-[#4A6580] text-base leading-[1.7] max-w-[340px] lg:mb-1.5">
                Todos han pasado por revisión veterinaria, vacunación y desparasitación.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px] items-stretch">
              {available.map((animal) => <AnimalCard key={animal.id} animal={animal} />)}
            </div>
          </div>
        </section>
      )}

      {/* En recuperación */}
      {recovering.length > 0 && (
        <section className="pb-20 lg:pb-24" aria-label="Animales en recuperación">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12 mb-11">
              <div className="max-w-[600px]">
                <div className="inline-flex items-center gap-2.5 bg-white border border-[#E8D9C8] rounded-full pl-3 pr-[18px] py-2 text-xs font-bold tracking-[0.08em] uppercase text-[#9e5800] mb-[18px]">
                  <span className="w-2 h-2 rounded-full bg-[#FC9A36]" aria-hidden="true" />
                  {recovering.length} en tratamiento
                </div>
                <h2 className="font-heading text-[36px] lg:text-[48px] text-[#012B4E] leading-[1.1]">En recuperación</h2>
              </div>
              <p className="text-[#4A6580] text-base leading-[1.7] max-w-[340px] lg:mb-1.5">
                Aún no pueden ser adoptados, pero tu donación paga sus tratamientos.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[22px]">
              {recovering.map((animal) => (
                <WideAnimalCard key={animal.id} animal={animal} tone={{ label: 'En recuperación', dot: '#FC9A36', text: '#9e5800' }}>
                  <div className="flex flex-wrap items-center gap-3.5">
                    <Link href="/donar" className="text-sm font-bold bg-[#2BC4B5] hover:bg-[#22a99c] text-white px-6 py-3 rounded-full transition-all active:scale-95">
                      Ayudar con su tratamiento
                    </Link>
                    <Link href={`/historias/\${animal.id}`} className="text-sm font-semibold text-[#012B4E] underline underline-offset-[3px] hover:text-[#2BC4B5] transition-colors">
                      Su historia
                    </Link>
                  </div>
                </WideAnimalCard>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Adoptados */}
      {adopted.length > 0 && (
        <section className="pb-20 lg:pb-24" aria-label="Animales adoptados">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="bg-[#F7EAD8] border border-[#E8D9C8] rounded-[40px] p-8 sm:p-12 lg:p-14">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12 mb-9">
                <div className="max-w-[560px]">
                  <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#1a8f84] mb-4">Final feliz</div>
                  <h2 className="font-heading text-[34px] lg:text-[44px] text-[#012B4E] leading-[1.1]">Ya encontraron su familia</h2>
                </div>
                <p className="text-[#4A6580] text-base leading-[1.7] max-w-[320px] lg:mb-1.5">
                  936 animales han pasado por este mismo camino desde 2018.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {adopted.map((animal) => (
                  <WideAnimalCard key={animal.id} animal={animal} tone={{ label: 'Adoptado', dot: '#2BC4B5', text: '#1a8f84' }} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA viernes */}
      <section className="pb-24 lg:pb-26" aria-label="Campaña de los viernes">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-[#012B4E] rounded-[44px] p-8 sm:p-12 lg:p-14 relative overflow-hidden">
            <div className="absolute -top-[130px] -right-[80px] w-[400px] h-[400px] rounded-full bg-[#FC9A36]/12 pointer-events-none" aria-hidden="true" />
            <div className="relative grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-14 items-center">
              <div>
                <span className="inline-flex items-center gap-2.5 bg-[#FC9A36] text-[#012B4E] rounded-full px-5 py-2.5 text-[11px] font-extrabold tracking-[0.14em] uppercase">
                  Todos los viernes
                </span>
                <h2 className="font-heading text-[36px] lg:text-[48px] text-white leading-[1.08] mt-[22px]">
                  Ven a conocerlos <span className="text-[#FEE35A]">en persona.</span>
                </h2>
                <p className="text-white/65 text-[17px] leading-[1.75] mt-5 max-w-[520px]">
                  Todos los viernes organizamos nuestra campaña de adopción en el Atrio San Agustín, de 15:00 a 19:00.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/adopcion" className="flex items-center justify-center gap-2 bg-[#2BC4B5] hover:bg-[#22a99c] text-white font-bold px-8 py-[17px] rounded-full text-[15px] tracking-[0.02em] transition-all active:scale-95">
                  VER INFORMACIÓN DE ADOPCIÓN
                </Link>
                <Link href="/donar" className="flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white hover:bg-white/10 text-white font-semibold px-8 py-[15px] rounded-full text-[15px] transition-all active:scale-95">
                  DONAR Y APOYARLOS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
