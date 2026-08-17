import type { Metadata } from 'next';
import { donationsService } from '@/services/donationsService';
import DonationSection from '@/components/donations/DonationSection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Donar — Ayuda a transformar vidas',
  description: 'Realiza una donación a CRAA Ayacucho. Elige entre BCP, Yape o PayPal y ayuda a rescatar más animales.',
};

export default function DonarPage() {
  const methods = donationsService.getDonationMethods();
  const stats = donationsService.getImpactStats();

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#012B4E] to-[#024070] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-5xl mb-6" aria-hidden="true">❤️</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Tu ayuda se convierte en<br />
            <span className="text-[#FEE35A]">alimento, medicinas y esperanza</span>
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            El albergue depende de personas como tú para continuar rescatando y cuidando a nuestros animales. Cada donación, grande o pequeña, hace una diferencia real.
          </p>
        </div>
      </section>

      {/* Impact reminder */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center bg-[#FFF5EC] rounded-2xl p-5">
                <div className="text-3xl mb-2" aria-hidden="true">{stat.icon}</div>
                <div className="text-2xl font-bold text-[#012B4E]">{stat.value.toLocaleString('es-PE')}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation methods */}
      <DonationSection methods={methods} />

      {/* What does your donation fund */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#012B4E] mb-10">¿En qué se usa tu donación?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🍖', title: 'Alimentación', desc: 'S/ 8,500 mensuales en alimento balanceado para todos los animales.' },
              { icon: '🏥', title: 'Veterinaria', desc: 'Cirugías, medicamentos y tratamientos urgentes.' },
              { icon: '✂️', title: 'Esterilización', desc: 'Campañas para control responsable de la población.' },
              { icon: '🏗️', title: 'Infraestructura', desc: 'Mejora de espacios, jaulas y áreas de descanso.' },
            ].map((item) => (
              <div key={item.title} className="bg-[#FFF5EC] rounded-2xl p-6 hover:shadow-md transition-all hover:-translate-y-1">
                <div className="text-4xl mb-3" aria-hidden="true">{item.icon}</div>
                <h3 className="font-bold text-[#012B4E] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/transparencia" className="inline-flex items-center gap-2 text-[#2BC4B5] font-semibold hover:underline">
              Ver informe completo de transparencia →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
