'use client';

import { useState } from 'react';

interface FormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  collaborationType: string;
  message: string;
}

export default function PartnerForm() {
  const [form, setForm] = useState<FormData>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    collaborationType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    setSubmitted(true);
  };

  // Controles pill sobre crema, foco temático turquesa.
  const inputCls =
    'w-full bg-[#FFF5EC] border border-[#E8D9C8] rounded-full px-5 py-3.5 text-[#012B4E] placeholder-[#B0C0CC] text-sm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2BC4B5] transition-all';
  const labelCls = 'block text-[11px] font-bold text-[#7A93A8] uppercase tracking-[0.12em] mb-2';

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-[#E8FAF9] border border-[#b5e8e4] rounded-full flex items-center justify-center mx-auto mb-5">
          <span className="text-3xl" aria-hidden="true">🎉</span>
        </div>
        <h3 className="font-heading text-[26px] text-[#012B4E] mb-2">¡Gracias por tu interés!</h3>
        <p className="text-[#4A6580] text-sm max-w-md mx-auto leading-[1.7]">
          Hemos recibido tu información. Nuestro equipo se pondrá en contacto contigo en los próximos 2-3 días hábiles.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="companyName" className={labelCls}>Organización *</label>
          <input id="companyName" name="companyName" type="text" required value={form.companyName} onChange={handleChange} className={inputCls} placeholder="Nombre de la empresa" />
        </div>
        <div>
          <label htmlFor="contactName" className={labelCls}>Nombre de contacto *</label>
          <input id="contactName" name="contactName" type="text" required value={form.contactName} onChange={handleChange} className={inputCls} placeholder="Tu nombre" />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>Correo *</label>
          <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputCls} placeholder="correo@empresa.pe" />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>Teléfono</label>
          <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} className={inputCls} placeholder="+51 999 999 999" />
        </div>
      </div>

      <div>
        <label htmlFor="collaborationType" className={labelCls}>Tipo de colaboración *</label>
        <select id="collaborationType" name="collaborationType" required value={form.collaborationType} onChange={handleChange} className={inputCls}>
          <option value="">Selecciona una opción</option>
          <option value="donacion-economica">Donación económica</option>
          <option value="donacion-especies">Donación en especies (alimentos, medicamentos)</option>
          <option value="servicios">Servicios profesionales</option>
          <option value="voluntariado-corporativo">Voluntariado corporativo</option>
          <option value="auspicio-eventos">Auspicio de eventos</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelCls}>Cuéntanos más</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="w-full bg-[#FFF5EC] border border-[#E8D9C8] rounded-3xl px-5 py-4 text-[#012B4E] placeholder-[#B0C0CC] text-sm resize-none focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2BC4B5] transition-all"
          placeholder="Cuéntanos cómo te gustaría colaborar con CRAA"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#2BC4B5] hover:bg-[#22a99c] text-white font-bold py-[17px] rounded-full text-[15px] tracking-[0.02em] transition-all active:scale-95 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2BC4B5]"
      >
        ENVIAR SOLICITUD
      </button>
    </form>
  );
}
