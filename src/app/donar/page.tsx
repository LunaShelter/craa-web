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
      <section className="bg-[#012B4E] text-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Tu ayuda se convierte en<br />
            <span className="text-[#FEE35A]">alimento, medicinas y esperanza</span>
          </h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
            El albergue depende de personas como tú para continuar rescatando y cuidando a nuestros animales. Cada donación, grande o pequeña, hace una diferencia real.
          </p>
        </div>
      </section>

      {/* Impact reminder */}
      <section className="py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center bg-[#F7EAD8] rounded-2xl p-5 border border-[#E8D9C8]">
                <div className="text-3xl mb-2" aria-hidden="true">{stat.icon}</div>
                <div className="text-2xl font-extrabold text-[#012B4E]">{stat.value.toLocaleString('es-PE')}</div>
                <div className="text-xs text-[#7A93A8] font-medium mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation methods */}
      <DonationSection methods={methods} />

      {/* What does your donation fund */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-[#012B4E] mb-12 tracking-tight">Cada sol tiene un destino</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: '🍖', title: 'Alimentación', desc: 'S/ 8,500 mensuales en alimento balanceado para todos los animales.' },
              { icon: '🏥', title: 'Veterinaria', desc: 'Cirugías, medicamentos y tratamientos urgentes.' },
              { icon: '✂️', title: 'Esterilización', desc: 'Campañas para control responsable de la población.' },
              { icon: '🏗️', title: 'Infraestructura', desc: 'Mejora de espacios, jaulas y áreas de descanso.' },
            ].map((item) => (
              <div key={item.title} className="bg-[#F7EAD8] rounded-2xl p-6 border border-[#E8D9C8] hover:shadow-[0_4px_16px_0_rgba(1,43,78,0.10)] hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-3" aria-hidden="true">{item.icon}</div>
                <h3 className="font-bold text-[#012B4E] mb-2 text-base">{item.title}</h3>
                <p className="text-[#4A6580] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/transparencia" className="inline-flex items-center gap-2 text-[#2BC4B5] font-semibold text-sm hover:underline">
              Ver informe completo de transparencia →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
