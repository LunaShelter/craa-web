import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { animalsService } from '@/services/animalsService';
import AnimalCard from '@/components/animals/AnimalCard';
import { animals } from '@/data/animals';
import { AnimalStatus } from '@/types';

export async function generateStaticParams() {
  return animals.map((a) => ({ id: a.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const animal = animalsService.getById(id);
  if (!animal) return { title: 'Animal no encontrado' };
  return { title: `Historia de \${animal.name}`, description: animal.story };
}

const statusStyles: Record<AnimalStatus, { label: string; dot: string; text: string }> = {
  adoptado: { label: 'Adoptado', dot: '#2BC4B5', text: '#1a8f84' },
  'en-recuperacion': { label: 'En recuperación', dot: '#FC9A36', text: '#9e5800' },
  'buscando-hogar': { label: 'Buscando hogar', dot: '#FD544A', text: '#c2372f' },
};

const steps = [
  { n: '01', title: 'Envías el formulario', desc: 'Con tus datos y por qué quieres adoptar.' },
  { n: '02', title: 'Conversamos contigo', desc: 'Una entrevista corta para conocer tu hogar.' },
  { n: '03', title: 'Se conocen', desc: 'Un viernes en el Atrio San Agustín o en el albergue.' },
  { n: '04', title: 'Se va a casa', desc: 'Firmamos el acta y viaja con su cartilla de vacunas.' },
];

export default async function AnimalPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const animal = animalsService.getById(id);
  if (!animal) notFound();

  const status = statusStyles[animal.status];
  const rescueYear = animal.rescueDate ? new Date(animal.rescueDate).getFullYear() : null;
  const rescueDate = animal.rescueDate
    ? new Date(animal.rescueDate).toLocaleDateString('es-PE', { day: 'numeric', month: 'long', year: 'numeric' })
    : null;
  const isFemale = animal.type === 'perra' || animal.type === 'gata';
  const la = isFemale ? 'la' : 'lo';
  const others = animalsService
    .getByStatus('buscando-hogar')
    .filter((a) => a.id !== animal.id)
    .slice(0, 3);

  return (
    <div className="bg-[#FFF5EC]">
      {/* Ficha */}
      <section className="relative pt-7 pb-20 lg:pb-22 overflow-hidden" aria-label={`Historia de \${animal.name}`}>
        <div className="absolute -top-[200px] -right-[180px] w-[640px] h-[640px] rounded-full bg-[#F7EAD8] pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1200px] mx-auto px-6">
          <Link href="/historias" className="inline-flex items-center gap-2 text-sm font-semibold text-[#7A93A8] hover:text-[#012B4E] transition-colors mb-7">
            ← Volver a historias
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div
                className="overflow-hidden shadow-[0_24px_60px_-20px_rgba(1,43,78,0.35)]"
                style={{ borderRadius: '280px 40px 280px 280px', aspectRatio: '1/1' }}
              >
                <Image
                  src={animal.image}
                  alt={`Foto de \${animal.name}`}
                  width={1200}
                  height={1200}
                  className="w-full h-full object-cover [filter:saturate(0.88)_contrast(0.94)_brightness(1.03)]"
                  priority
                />
              </div>
              <div className="absolute top-7 -left-[26px] bg-white border border-[#E8D9C8] rounded-full px-[22px] py-2.5 inline-flex items-center gap-2.5 shadow-[0_10px_24px_-12px_rgba(1,43,78,0.3)]">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: status.dot }} aria-hidden="true" />
                <span className="text-xs font-bold tracking-[0.08em] uppercase" style={{ color: status.text }}>{status.label}</span>
              </div>
              {rescueYear && (
                <div className="absolute bottom-6 -right-[18px] bg-[#FEE35A] rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-[0_12px_28px_-12px_rgba(1,43,78,0.4)]">
                  <div className="font-heading text-[26px] text-[#012B4E] leading-none">{rescueYear}</div>
                  <div className="text-[10px] text-[#012B4E]/70 font-bold mt-1 uppercase tracking-[0.12em]">
                    {isFemale ? 'Rescatada' : 'Rescatado'}
                  </div>
                </div>
              )}
            </div>

            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A93A8] mb-3.5">Historia de rescate</div>
              <h1 className="font-heading text-[56px] lg:text-[82px] text-[#012B4E] leading-none tracking-[-0.005em]">{animal.name}</h1>
              <div className="flex flex-wrap gap-2 mt-5">
                {[animal.age, animal.breed, animal.weight, animal.type].filter(Boolean).map((chip) => (
                  <span key={chip as string} className="bg-white border border-[#F0E6D8] rounded-full px-[18px] py-2.5 text-[13px] font-semibold text-[#012B4E] capitalize">
                    {chip}
                  </span>
                ))}
              </div>
              <p className="text-[17px] lg:text-lg text-[#4A6580] leading-[1.8] mt-[26px] max-w-[540px]">{animal.story}</p>

              <div className="flex flex-wrap gap-3 mt-8 items-center">
                {animal.status === 'buscando-hogar' && (
                  <Link
                    href={`/adopcion?animal=\${animal.id}#formulario`}
                    className="inline-flex items-center justify-center gap-2 bg-[#2BC4B5] hover:bg-[#22a99c] text-white font-bold px-[34px] py-[17px] rounded-full text-base tracking-[0.02em] shadow-[0_8px_20px_-6px_rgba(43,196,181,0.55)] transition-all active:scale-95"
                  >
                    QUIERO ADOPTAR{isFemale ? 'LA' : 'LO'}
                  </Link>
                )}
                <Link
                  href="/donar"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#012B4E] text-[#012B4E] hover:bg-[#012B4E] hover:text-white font-semibold px-[30px] py-[15px] rounded-full text-base transition-all active:scale-95"
                >
                  Quiero apoyar{la}
                </Link>
              </div>
              {animal.status === 'buscando-hogar' && (
                <p className="text-[13px] text-[#7A93A8] mt-4">El formulario se abre con {animal.name} ya seleccionad{isFemale ? 'a' : 'o'}.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Su ficha */}
      <section className="pb-20 lg:pb-24" aria-label="Ficha veterinaria">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-white border border-[#F0E6D8] rounded-[32px] px-8 py-10 lg:px-12 grid grid-cols-1 lg:grid-cols-[auto_1px_1fr_1fr_1fr_1fr] gap-8 lg:gap-9 items-center shadow-[0_4px_20px_-12px_rgba(1,43,78,0.18)]">
            <div className="max-w-[170px]">
              <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A93A8] mb-2">Su ficha</div>
              <div className="font-heading text-[22px] leading-[1.15] text-[#012B4E]">
                {animal.status === 'buscando-hogar' ? 'List' + (isFemale ? 'a' : 'o') + ' para irse a casa' : 'Bajo nuestro cuidado'}
              </div>
            </div>
            <div className="hidden lg:block w-px h-[74px] bg-[#F0E6D8]" aria-hidden="true" />
            <div>
              <div className="text-[10px] text-[#7A93A8] uppercase tracking-[0.14em] font-bold mb-2">Rescate</div>
              <div className="text-base font-semibold text-[#012B4E]">{rescueDate ?? 'Sin registro'}</div>
              <div className="text-[13px] text-[#7A93A8] mt-0.5">Calles de Ayacucho</div>
            </div>
            <div>
              <div className="text-[10px] text-[#7A93A8] uppercase tracking-[0.14em] font-bold mb-2">Vacunación</div>
              <div className="text-base font-semibold text-[#012B4E]">Completa</div>
              <div className="text-[13px] text-[#7A93A8] mt-0.5">Con cartilla al día</div>
            </div>
            <div>
              <div className="text-[10px] text-[#7A93A8] uppercase tracking-[0.14em] font-bold mb-2">Desparasitación</div>
              <div className="text-base font-semibold text-[#012B4E]">Hecha</div>
              <div className="text-[13px] text-[#7A93A8] mt-0.5">Interna y externa</div>
            </div>
            <div>
              <div className="text-[10px] text-[#7A93A8] uppercase tracking-[0.14em] font-bold mb-2">Esterilización</div>
              <div className="text-base font-semibold text-[#012B4E]">Sí</div>
              <div className="text-[13px] text-[#7A93A8] mt-0.5">Antes de la adopción</div>
            </div>
          </div>
        </div>
      </section>

      {/* Siguiente paso */}
      <section className="pb-20 lg:pb-24" aria-label={`Cómo adoptar a \${animal.name}`}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-[#012B4E] rounded-[44px] p-8 sm:p-12 lg:p-14 relative overflow-hidden">
            <div className="absolute -top-[140px] -right-[100px] w-[440px] h-[440px] rounded-full bg-[#2BC4B5]/12 pointer-events-none" aria-hidden="true" />
            <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-14 items-center">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2BC4B5] mb-4">Siguiente paso</div>
                <h2 className="font-heading text-[34px] lg:text-[44px] text-white leading-[1.08] mb-5">
                  ¿Te gustaría que {animal.name} sea parte de tu <span className="text-[#FEE35A]">familia?</span>
                </h2>
                <p className="text-white/65 text-base leading-[1.75] mb-[30px]">
                  Completa el formulario de adopción y nuestra coordinadora se pondrá en contacto contigo para conversar y coordinar el encuentro.
                </p>
                <Link
                  href={`/adopcion?animal=\${animal.id}#formulario`}
                  className="flex w-full items-center justify-center gap-2.5 bg-[#2BC4B5] hover:bg-[#22a99c] text-white font-bold px-8 py-[17px] rounded-full text-[15px] tracking-[0.02em] transition-all active:scale-95"
                >
                  IR AL FORMULARIO DE ADOPCIÓN
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {steps.map((s, i) => (
                  <div key={s.n} className="bg-white/[0.06] rounded-3xl px-6 py-[22px]">
                    <div className={'font-heading text-[22px] leading-none mb-3 ' + (i === steps.length - 1 ? 'text-[#FEE35A]' : 'text-white/25')}>
                      {s.n}
                    </div>
                    <h3 className="font-bold text-white text-[15px] mb-1">{s.title}</h3>
                    <p className="text-white/60 text-[13px] leading-[1.6]">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Otros esperando */}
      {others.length > 0 && (
        <section className="pb-24 lg:pb-26" aria-label="Otros animales esperando">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12 mb-11">
              <div className="max-w-[600px]">
                <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A93A8] mb-4">También esperan</div>
                <h2 className="font-heading text-[34px] lg:text-[44px] text-[#012B4E] leading-[1.1]">Otros que buscan hogar</h2>
              </div>
              <Link href="/historias" className="inline-flex items-center gap-2.5 bg-[#012B4E] hover:bg-[#024070] text-white font-bold px-8 py-[15px] rounded-full text-sm tracking-[0.02em] flex-shrink-0 transition-all active:scale-95 lg:mb-1.5">
                VER TODAS LAS HISTORIAS →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px] items-stretch">
              {others.map((a) => <AnimalCard key={a.id} animal={a} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
