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

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4" aria-hidden="true">🎉</div>
        <h3 className="text-2xl font-bold text-[#012B4E] mb-3">¡Gracias por tu interés!</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Hemos recibido tu información. Nuestro equipo se pondrá en contacto contigo en los próximos 2-3 días hábiles.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 mb-2">
            Nombre de la empresa *
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            required
            value={form.companyName}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2BC4B5] transition-all"
            placeholder="Tu empresa"
          />
        </div>
        <div>
          <label htmlFor="contactName" className="block text-sm font-semibold text-gray-700 mb-2">
            Nombre del contacto *
          </label>
          <input
            id="contactName"
            name="contactName"
            type="text"
            required
            value={form.contactName}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2BC4B5] transition-all"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Correo electrónico *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2BC4B5] transition-all"
            placeholder="correo@empresa.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Teléfono
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2BC4B5] transition-all"
            placeholder="+51 000 000 000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="collaborationType" className="block text-sm font-semibold text-gray-700 mb-2">
          Tipo de colaboración *
        </label>
        <select
          id="collaborationType"
          name="collaborationType"
          required
          value={form.collaborationType}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2BC4B5] transition-all"
        >
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
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          Cuéntanos más
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2BC4B5] transition-all resize-none"
          placeholder="Describe cómo te gustaría colaborar con CRAA..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#012B4E] hover:bg-[#024070] text-white font-bold py-4 rounded-xl transition-all active:scale-95 text-lg"
      >
        ENVIAR PROPUESTA 🤝
      </button>
    </form>
  );
}
