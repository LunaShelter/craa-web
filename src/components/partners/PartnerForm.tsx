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

  const inputCls = "w-full bg-white border border-[#E8D9C8] rounded-xl px-4 py-3 text-[#012B4E] placeholder-[#B0C0CC] text-sm focus:outline-none focus:ring-2 focus:ring-[#2BC4B5] focus:border-transparent transition-all";
  const labelCls = "block text-xs font-bold text-[#7A93A8] uppercase tracking-widest mb-1.5";

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-5">
          <span className="text-3xl" aria-hidden="true">🎉</span>
        </div>
        <h3 className="text-xl font-bold text-[#012B4E] mb-2">¡Gracias por tu interés!</h3>
        <p className="text-[#4A6580] text-sm max-w-md mx-auto leading-relaxed">
          Hemos recibido tu información. Nuestro equipo se pondrá en contacto contigo en los próximos 2-3 días hábiles.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="companyName" className={labelCls}>Nombre de la empresa *</label>
          <input id="companyName" name="companyName" type="text" required value={form.companyName} onChange={handleChange} className={inputCls} placeholder="Tu empresa" />
        </div>
        <div>
          <label htmlFor="contactName" className={labelCls}>Nombre del contacto *</label>
          <input id="contactName" name="contactName" type="text" required value={form.contactName} onChange={handleChange} className={inputCls} placeholder="Tu nombre" />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>Correo electrónico *</label>
          <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputCls} placeholder="correo@empresa.com" />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>Teléfono</label>
          <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} className={inputCls} placeholder="+51 000 000 000" />
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
        <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} className={`${inputCls} resize-none`} placeholder="Describe cómo te gustaría colaborar con CRAA..." />
      </div>

      <button
        type="submit"
        className="w-full bg-[#012B4E] hover:bg-[#024070] text-white font-bold py-3.5 rounded-xl transition-all active:scale-95 text-sm"
      >
        ENVIAR PROPUESTA
      </button>
    </form>
  );
}
