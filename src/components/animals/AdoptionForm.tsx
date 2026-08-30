'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Animal } from '@/types';

interface AdoptionFormProps {
  /** Animales disponibles, para el selector. */
  animals: Animal[];
  /** Id preseleccionado — viene de /adopcion?animal=luna. */
  selectedId?: string;
}

const housingOptions = ['Casa con patio', 'Casa sin patio', 'Departamento'];

export default function AdoptionForm({ animals, selectedId }: AdoptionFormProps) {
  const [animalId, setAnimalId] = useState(selectedId ?? animals[0]?.id ?? '');
  const [housing, setHousing] = useState(housingOptions[0]);
  const [accepted, setAccepted] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const animal = animals.find((a) => a.id === animalId);

  const inputCls =
    'w-full bg-[#FFF5EC] border border-[#E8D9C8] rounded-full px-5 py-3.5 text-[#012B4E] placeholder-[#B0C0CC] text-sm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2BC4B5] transition-all';
  const labelCls = 'block text-[11px] font-bold text-[#7A93A8] uppercase tracking-[0.12em] mb-2';

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-[#E8FAF9] border border-[#b5e8e4] rounded-full flex items-center justify-center mx-auto mb-5">
          <span className="text-3xl" aria-hidden="true">🐾</span>
        </div>
        <h3 className="font-heading text-[26px] text-[#012B4E] mb-2">¡Recibimos tu solicitud!</h3>
        <p className="text-[#4A6580] text-sm max-w-md mx-auto leading-[1.7]">
          Nuestra coordinadora de adopciones te escribirá en menos de 48 horas
          {animal ? ' para conversar sobre ' + animal.name : ''}.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      noValidate
    >
      {/* Animal seleccionado */}
      {animal && (
        <div className="bg-[#FFF5EC] border border-dashed border-[#E8D9C8] rounded-3xl px-5 py-4 flex items-center gap-3.5 mb-[22px]">
          <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
            <Image src={animal.image} alt={`Foto de \${animal.name}`} fill className="object-cover" sizes="44px" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] text-[#7A93A8] uppercase tracking-[0.14em] font-bold mb-0.5">Animal seleccionado</p>
            <p className="text-[15px] font-semibold text-[#012B4E] truncate">
              {animal.name} · {animal.age}
              {animal.breed ? ' · ' + animal.breed : ''}
            </p>
          </div>
          <Link href="#animales" className="ml-auto text-[13px] font-semibold text-[#1a8f84] underline underline-offset-[3px] flex-shrink-0 hover:text-[#012B4E] transition-colors">
            Cambiar
          </Link>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="fullName" className={labelCls}>Nombre completo *</label>
          <input id="fullName" name="fullName" type="text" required className={inputCls} placeholder="Tu nombre y apellidos" />
        </div>
        <div>
          <label htmlFor="dni" className={labelCls}>DNI *</label>
          <input id="dni" name="dni" type="text" required className={inputCls} placeholder="00000000" />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>Teléfono *</label>
          <input id="phone" name="phone" type="tel" required className={inputCls} placeholder="+51 999 999 999" />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>Correo *</label>
          <input id="email" name="email" type="email" required className={inputCls} placeholder="tucorreo@correo.com" />
        </div>
      </div>

      {/* Selector de animal (por si llegó sin uno elegido) */}
      <div className="mb-4">
        <label htmlFor="animal" className={labelCls}>¿Qué animal te interesa? *</label>
        <select id="animal" name="animal" required value={animalId} onChange={(e) => setAnimalId(e.target.value)} className={inputCls}>
          {animals.map((a) => (
            <option key={a.id} value={a.id}>
              {a.name} — {a.age}
              {a.breed ? ' · ' + a.breed : ''}
            </option>
          ))}
        </select>
      </div>

      {/* Vivienda */}
      <div className="mb-4">
        <span className={labelCls}>¿Dónde vivirá?</span>
        <div className="flex flex-wrap gap-2">
          {housingOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setHousing(opt)}
              aria-pressed={housing === opt}
              className={
                'rounded-full px-[18px] py-2.5 text-[13px] font-semibold transition-all active:scale-95 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2BC4B5] ' +
                (housing === opt
                  ? 'bg-[#012B4E] text-white'
                  : 'bg-[#FFF5EC] border border-[#E8D9C8] text-[#4A6580] hover:border-[#012B4E]')
              }
            >
              {opt}
            </button>
          ))}
        </div>
        <input type="hidden" name="housing" value={housing} />
      </div>

      <div className="mb-[18px]">
        <label htmlFor="reason" className={labelCls}>¿Por qué quieres adoptar?</label>
        <textarea
          id="reason"
          name="reason"
          rows={4}
          className="w-full bg-[#FFF5EC] border border-[#E8D9C8] rounded-3xl px-5 py-4 text-[#012B4E] placeholder-[#B0C0CC] text-sm resize-none focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2BC4B5] transition-all"
          placeholder="Cuéntanos con quién vives, si has tenido mascotas antes y por qué elegiste a este animal"
        />
      </div>

      <label className="flex items-start gap-3 mb-6 cursor-pointer">
        <input
          type="checkbox"
          name="accepted"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
          className="sr-only"
        />
        <span
          aria-hidden="true"
          className={
            'w-[22px] h-[22px] rounded-lg border-2 text-xs font-bold flex items-center justify-center flex-shrink-0 transition-all ' +
            (accepted ? 'bg-[#2BC4B5] border-[#2BC4B5] text-white' : 'bg-white border-[#E8D9C8] text-transparent')
          }
        >
          ✓
        </span>
        <span className="text-[13px] text-[#4A6580] leading-[1.6]">
          He leído los requisitos y acepto la visita de seguimiento posterior a la adopción.
        </span>
      </label>

      <button
        type="submit"
        disabled={!accepted}
        className="w-full flex items-center justify-center gap-2 bg-[#2BC4B5] hover:bg-[#22a99c] disabled:opacity-45 disabled:hover:bg-[#2BC4B5] text-white font-bold py-[17px] rounded-full text-[15px] tracking-[0.02em] transition-all active:scale-95 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2BC4B5]"
      >
        ENVIAR SOLICITUD DE ADOPCIÓN
      </button>
    </form>
  );
}
