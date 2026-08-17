import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { partnersService } from '@/services/partnersService';
import PartnerForm from '@/components/partners/PartnerForm';

export const metadata: Metadata = {
  title: 'Partners y auspiciadores',
  description: 'Empresas e instituciones que apoyan la misión de CRAA Ayacucho. Únete como partner y hagamos más juntos.',
};

export default function PartnersPage() {
  const all = partnersService.getAll();

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#012B4E] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-[#2BC4B5]/20 border border-[#2BC4B5]/40 text-[#2BC4B5] px-4 py-2 rounded-full text-sm font-medium mb-6">
            🤝 Partners y auspiciadores
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Juntos podemos hacer más</h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            Colaborar con CRAA es invertir en una comunidad más consciente y en el bienestar de los animales más vulnerables.
          </p>
        </div>
      </section>

      {/* Partners grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#012B4E] mb-3">Nuestros aliados</h2>
            <p className="text-gray-600 text-lg">Organizaciones e instituciones que creen en nuestra misión.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {all.map((partner) => (
              <div key={partner.id} className="bg-[#FFF5EC] rounded-2xl overflow-hidden hover:shadow-md transition-all hover:-translate-y-1 border border-gray-100">
                {partner.image && (
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-[#012B4E]/30" />
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-[#2BC4B5] text-white text-xs font-bold px-3 py-1 rounded-full">
                        {partner.collaborationType}
                      </span>
                    </div>
                  </div>
                )}
                <div className="p-5">
                  <h3 className="font-bold text-[#012B4E] text-lg mb-2">{partner.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{partner.description}</p>
                  {partner.website && (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#2BC4B5] text-sm font-medium mt-3 hover:underline"
                    >
                      Ver sitio web →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why partner */}
      <section className="py-16 bg-[#FFF5EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#012B4E] mb-3">¿Por qué ser partner de CRAA?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🌱', title: 'Impacto real', desc: 'Tu colaboración se traduce directamente en animales rescatados y cuidados.' },
              { icon: '📣', title: 'Visibilidad', desc: 'Tu marca aparece en nuestra web, redes sociales y eventos presenciales.' },
              { icon: '🤝', title: 'Comunidad', desc: 'Formas parte de una comunidad que valora la responsabilidad social.' },
              { icon: '📊', title: 'Transparencia', desc: 'Reportes periódicos del impacto de tu colaboración.' },
            ].map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <div className="text-4xl mb-3" aria-hidden="true">{b.icon}</div>
                <h3 className="font-bold text-[#012B4E] text-lg mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#012B4E] mb-3">¿Quieres ser nuestro partner?</h2>
            <p className="text-gray-600 text-lg">Completa el formulario y nuestro equipo se pondrá en contacto contigo.</p>
          </div>
          <div className="bg-[#FFF5EC] rounded-2xl p-8 shadow-sm">
            <PartnerForm />
          </div>
        </div>
      </section>
    </div>
  );
}
