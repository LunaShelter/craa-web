import type { Metadata } from 'next';
import Image from 'next/image';
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
      <section className="bg-[#012B4E] text-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Juntos podemos hacer más
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Colaborar con CRAA es invertir en una comunidad más consciente y en el bienestar de los animales más vulnerables.
          </p>
        </div>
      </section>

      {/* Partners grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-extrabold text-[#012B4E] tracking-tight">Organizaciones que nos apoyan</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {all.map((partner) => (
              <div key={partner.id} className="group bg-[#F7EAD8] rounded-2xl overflow-hidden border border-[#E8D9C8] hover:shadow-[0_8px_24px_0_rgba(1,43,78,0.10)] hover:-translate-y-1 transition-all duration-300">
                {partner.image && (
                  <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-[#012B4E]/25" />
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-[#2BC4B5] text-white text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wide">
                        {partner.collaborationType}
                      </span>
                    </div>
                  </div>
                )}
                <div className="p-5">
                  <h3 className="font-bold text-[#012B4E] text-base mb-2">{partner.name}</h3>
                  <p className="text-[#4A6580] text-sm leading-relaxed">{partner.description}</p>
                  {partner.website && (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#2BC4B5] text-sm font-semibold mt-3 hover:underline"
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
      <section className="py-20 bg-[#FFF5EC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-extrabold text-[#012B4E] tracking-tight">¿Por qué ser partner de CRAA?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: '🌱', title: 'Impacto real', desc: 'Tu colaboración se traduce directamente en animales rescatados y cuidados.' },
              { icon: '📣', title: 'Visibilidad', desc: 'Tu marca aparece en nuestra web, redes sociales y eventos presenciales.' },
              { icon: '🤝', title: 'Comunidad', desc: 'Formas parte de una comunidad que valora la responsabilidad social.' },
              { icon: '📊', title: 'Transparencia', desc: 'Reportes periódicos del impacto de tu colaboración.' },
            ].map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-6 text-center border border-[#F0E6D8] shadow-[0_1px_4px_0_rgba(1,43,78,0.04)] hover:shadow-[0_4px_16px_0_rgba(1,43,78,0.10)] hover:-translate-y-0.5 transition-all duration-200">
                <div className="text-3xl mb-3" aria-hidden="true">{b.icon}</div>
                <h3 className="font-bold text-[#012B4E] text-base mb-2">{b.title}</h3>
                <p className="text-[#4A6580] text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 bg-white">
        <div className="max-w-[720px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-[#012B4E] mb-3 tracking-tight">¿Quieres ser nuestro partner?</h2>
            <p className="text-[#4A6580] text-base">Completa el formulario y nuestro equipo se pondrá en contacto contigo.</p>
          </div>
          <div className="bg-[#F7EAD8] rounded-2xl p-8 border border-[#E8D9C8]">
            <PartnerForm />
          </div>
        </div>
      </section>
    </div>
  );
}
