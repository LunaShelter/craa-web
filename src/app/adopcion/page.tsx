import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { animalsService } from '@/services/animalsService';
import { volunteersService } from '@/services/volunteersService';
import AnimalCard from '@/components/animals/AnimalCard';
import FridayCampaignSection from '@/components/home/FridayCampaignSection';
import { ctaButtonClasses } from '@/lib/designTokens';

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
        <div className="absolute inset-0 bg-gradient-to-r from-[#012B4E]/90 via-[#012B4E]/70 to-transparent" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="inline-flex items-center gap-2 bg-[#FEE35A]/20 border border-[#FEE35A]/40 text-[#FEE35A] px-4 py-2 rounded-full text-sm font-bold mb-6">
            🐾 Proceso de adopción
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Dale un hogar a quien<br />
            <span className="text-[#FEE35A]">más lo necesita</span>
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mb-8">
            Adoptar es un acto de amor que cambia dos vidas: la del animal y la tuya. Aquí encontrarás todo lo que necesitas saber para iniciar el proceso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#animales"
              className={`inline-flex items-center justify-center gap-2 ${ctaButtonClasses} font-bold px-8 py-4 rounded-xl transition-all active:scale-95 text-lg`}
            >
              VER ANIMALES DISPONIBLES 🐶
            </a>
            <a
              href="#proceso"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#012B4E] font-bold px-8 py-4 rounded-xl transition-all active:scale-95 text-lg"
            >
              CÓMO ADOPTAR
            </a>
          </div>
        </div>
      </section>

      {/* Friday campaign full section */}
      <FridayCampaignSection campaign={campaign} />

      {/* Available animals */}
      <section id="animales" className="py-20 bg-[#FFF5EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#012B4E] mb-4">
              Animales disponibles para adopción
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Todos han pasado por revisión veterinaria, vacunación y desparasitación. Están listos para comenzar una nueva vida.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 bg-[#FD544A]/10 text-[#FD544A] px-4 py-2 rounded-full text-sm font-bold">
              🏠 {available.length} animales buscando hogar
            </div>
          </div>

          {available.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {available.map((animal) => (
                <AnimalCard key={animal.id} animal={animal} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              <div className="text-5xl mb-4">🐾</div>
              <p className="text-lg">Por el momento todos nuestros animales han sido adoptados. ¡Vuelve pronto!</p>
            </div>
          )}

          <div className="text-center">
            <Link
              href="/historias"
              className="inline-flex items-center gap-2 border-2 border-[#012B4E] text-[#012B4E] hover:bg-[#012B4E] hover:text-white font-semibold px-8 py-4 rounded-xl transition-all active:scale-95"
            >
              VER TODAS LAS HISTORIAS
            </Link>
          </div>
        </div>
      </section>

      {/* Adoption process */}
      <section id="proceso" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#012B4E] mb-4">¿Cómo es el proceso de adopción?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Simple, responsable y lleno de amor. Nos aseguramos de que cada animal encuentre la familia perfecta.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {adoptionSteps.map((s) => (
              <div key={s.step} className="relative text-center">
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-100 -z-0" aria-hidden="true" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#FFF5EC] border-2 border-[#2BC4B5] rounded-full flex items-center justify-center text-2xl mb-4 shadow-sm">
                    {s.icon}
                  </div>
                  <span className="text-xs font-bold text-[#2BC4B5] uppercase tracking-widest mb-2">Paso {s.step}</span>
                  <h3 className="font-bold text-[#012B4E] text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-[#FFF5EC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#012B4E] mb-6">Requisitos para adoptar</h2>
              <ul className="space-y-4">
                {[
                  { icon: '✅', text: 'Ser mayor de 18 años' },
                  { icon: '✅', text: 'Presentar DNI o documento de identidad' },
                  { icon: '✅', text: 'Comprometerse con el bienestar y cuidado del animal' },
                  { icon: '✅', text: 'Contar con espacio adecuado en casa' },
                  { icon: '✅', text: 'Aceptar visita de seguimiento post-adopción' },
                  { icon: '✅', text: 'Firmar acta de adopción responsable' },
                ].map((r) => (
                  <li key={r.text} className="flex items-center gap-3 text-gray-700">
                    <span className="text-[#2BC4B5] text-xl flex-shrink-0" aria-hidden="true">{r.icon}</span>
                    {r.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <div className="text-4xl mb-4" aria-hidden="true">❓</div>
              <h3 className="text-xl font-bold text-[#012B4E] mb-3">¿Tienes dudas?</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nuestro equipo está disponible para responder cualquier consulta sobre el proceso de adopción. No dudes en contactarnos.
              </p>
              <div className="space-y-3">
                <a
                  href="https://wa.me/51987654321?text=Hola%2C%20me%20interesa%20adoptar%20un%20animal%20de%20CRAA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1eb557] text-white font-semibold px-5 py-3 rounded-xl transition-all active:scale-95 w-full justify-center"
                >
                  💬 Consultar por WhatsApp
                </a>
                <a
                  href="mailto:adopciones@craa.pe"
                  className="flex items-center gap-2 border-2 border-[#012B4E] text-[#012B4E] hover:bg-[#012B4E] hover:text-white font-semibold px-5 py-3 rounded-xl transition-all active:scale-95 w-full justify-center"
                >
                  ✉️ adopciones@craa.pe
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
