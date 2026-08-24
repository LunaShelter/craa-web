import type { Metadata } from 'next';
import Link from 'next/link';
import { animalsService } from '@/services/animalsService';
import { volunteersService } from '@/services/volunteersService';
import AnimalCard from '@/components/animals/AnimalCard';
import FridayCampaignSection from '@/components/home/FridayCampaignSection';

export const metadata: Metadata = {
  title: 'Adopción',
  description: 'Adopta un animal rescatado por CRAA en Ayacucho. Conoce el proceso de adopción y a los animales que buscan un hogar.',
};

const adoptionSteps = [
  {
    step: '01',
    icon: '🔍',
    title: 'Conoce a nuestros animales',
    description: 'Visítanos los viernes en nuestra campaña de adopción o explora los perfiles en esta web.',
  },
  {
    step: '02',
    icon: '📋',
    title: 'Completa el formulario',
    description: 'Llena nuestro formulario de adopción para que podamos conocerte mejor y encontrar el match perfecto.',
  },
  {
    step: '03',
    icon: '💬',
    title: 'Entrevista y orientación',
    description: 'Nuestro equipo conversará contigo para asegurarse de que el animal elegido se adapte bien a tu hogar.',
  },
  {
    step: '04',
    icon: '🏠',
    title: '¡Llévalo a casa!',
    description: 'Firmamos el acta de adopción, el animal viaja con su cartilla de vacunas y listo para empezar su nueva vida.',
  },
];

export default function AdopcionPage() {
  const available = animalsService.getAvailableForAdoption();
  const campaign = volunteersService.getFridayCampaign();

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-[#012B4E] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=1600&q=85')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, rgba(1,43,78,0.96) 0%, rgba(1,43,78,0.80) 50%, rgba(1,43,78,0.20) 100%)' }} aria-hidden="true" />
        <div className="relative max-w-[1200px] mx-auto px-6 py-24">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight max-w-xl">
            Dale un hogar a quien<br />
            <span className="text-[#FEE35A]">más lo necesita</span>
          </h1>
          <p className="text-white/65 text-lg max-w-xl mb-10 leading-relaxed">
            Adoptar es un acto de amor que cambia dos vidas: la del animal y la tuya.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#animales"
              className="inline-flex items-center justify-center gap-2 bg-[#2BC4B5] hover:bg-[#22a99c] text-white font-bold px-8 py-3.5 rounded-xl transition-all active:scale-95 text-sm shadow-lg"
            >
              VER ANIMALES DISPONIBLES
            </a>
            <a
              href="#proceso"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:border-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-xl transition-all active:scale-95 text-sm"
            >
              CÓMO ADOPTAR
            </a>
          </div>
        </div>
      </section>

      {/* Friday campaign full section */}
      <FridayCampaignSection campaign={campaign} />

      {/* Available animals */}
      <section id="animales" className="py-24 bg-[#FFF5EC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-extrabold text-[#012B4E] tracking-tight leading-tight mx-auto">
              Animales disponibles para adopción
            </h2>
            <p className="text-[#4A6580] text-base mt-4 max-w-2xl mx-auto">
              Todos han pasado por revisión veterinaria, vacunación y desparasitación. Están listos para comenzar una nueva vida.
            </p>
            <span className="inline-flex items-center gap-2 bg-[#FFF0EF] text-[#c0392b] border border-[#f5c6c3] px-4 py-2 rounded-xl text-sm font-bold mt-4">
              {available.length} buscando hogar
            </span>
          </div>

          {available.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12 items-stretch">
              {available.map((animal) => (
                <AnimalCard key={animal.id} animal={animal} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-[#7A93A8]">
              <div className="text-5xl mb-4">🐾</div>
              <p className="text-lg">Por el momento todos nuestros animales han sido adoptados. ¡Vuelve pronto!</p>
            </div>
          )}

          <div className="text-center">
            <Link
              href="/historias"
              className="inline-flex items-center gap-2 border-2 border-[#012B4E] text-[#012B4E] hover:bg-[#012B4E] hover:text-white font-semibold px-8 py-3.5 rounded-xl transition-all active:scale-95 text-sm"
            >
              VER TODAS LAS HISTORIAS
            </Link>
          </div>
        </div>
      </section>

      {/* Adoption process */}
      <section id="proceso" className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-[#012B4E] mb-4 tracking-tight">¿Cómo es el proceso de adopción?</h2>
            <p className="text-[#4A6580] text-lg max-w-2xl mx-auto">
              Simple, responsable y lleno de amor. Nos aseguramos de que cada animal encuentre la familia perfecta.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {adoptionSteps.map((s) => (
              <div key={s.step} className="relative text-center">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-[#F7EAD8] border-2 border-[#2BC4B5] rounded-2xl flex items-center justify-center text-2xl mb-4">
                    {s.icon}
                  </div>
                  <span className="text-[10px] font-bold text-[#2BC4B5] uppercase tracking-widest mb-2">Paso {s.step}</span>
                  <h3 className="font-bold text-[#012B4E] text-base mb-2">{s.title}</h3>
                  <p className="text-[#7A93A8] text-sm leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-[#FFF5EC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-4xl font-extrabold text-[#012B4E] mb-8 tracking-tight">Requisitos para adoptar</h2>
              <ul className="space-y-3">
                {[
                  'Ser mayor de 18 años',
                  'Presentar DNI o documento de identidad',
                  'Comprometerse con el bienestar y cuidado del animal',
                  'Contar con espacio adecuado en casa',
                  'Aceptar visita de seguimiento post-adopción',
                  'Firmar acta de adopción responsable',
                ].map((r) => (
                  <li key={r} className="flex items-center gap-3 text-[#4A6580] text-sm">
                    <span className="w-5 h-5 bg-[#E8FAF9] border border-[#b5e8e4] rounded-lg flex items-center justify-center text-[#2BC4B5] text-xs font-bold flex-shrink-0">✓</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-[#F0E6D8] shadow-[0_2px_8px_0_rgba(1,43,78,0.06)]">
              <h3 className="text-lg font-bold text-[#012B4E] mb-3">¿Tienes dudas?</h3>
              <p className="text-[#4A6580] mb-6 leading-relaxed text-sm">
                Nuestro equipo está disponible para responder cualquier consulta sobre el proceso de adopción.
              </p>
              <div className="space-y-3">
                <a
                  href="https://wa.me/51987654321?text=Hola%2C%20me%20interesa%20adoptar%20un%20animal%20de%20CRAA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1eb557] text-white font-semibold px-5 py-3 rounded-xl transition-all active:scale-95 w-full justify-center text-sm"
                >
                  Consultar por WhatsApp
                </a>
                <a
                  href="mailto:adopciones@craa.pe"
                  className="flex items-center gap-2 border-2 border-[#012B4E] text-[#012B4E] hover:bg-[#012B4E] hover:text-white font-semibold px-5 py-3 rounded-xl transition-all active:scale-95 w-full justify-center text-sm"
                >
                  adopciones@craa.pe
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
