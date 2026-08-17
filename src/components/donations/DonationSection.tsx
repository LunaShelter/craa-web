'use client';

import { useState } from 'react';
import Link from 'next/link';
import { DonationMethod, BcpData, YapeData } from '@/types';
import Modal from '@/components/ui/Modal';
import Image from 'next/image';

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    let success = false;

    // Intento moderno (requiere HTTPS)
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        success = true;
      } catch {
        // fall through al método legacy
      }
    }

    // Fallback para HTTP / móviles sin contexto seguro
    if (!success) {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.cssText = 'position:fixed;top:0;left:0;opacity:0;pointer-events:none';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      try {
        success = document.execCommand('copy');
      } catch {
        // no se pudo copiar
      }
      document.body.removeChild(textarea);
    }

    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-200 flex-shrink-0 ${
        copied
          ? 'bg-green-100 text-green-700'
          : 'bg-[#2BC4B5]/10 text-[#2BC4B5] hover:bg-[#2BC4B5]/20'
      }`}
      aria-label={`Copiar ${label}`}
    >
      {copied ? '✅ Copiado' : `📋 Copiar ${label}`}
    </button>
  );
}

function BcpCard({ method }: { method: DonationMethod }) {
  const data = method.data as BcpData;
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col h-full">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-12 h-12 bg-[#012B4E] rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0">BCP</div>
        <div>
          <h3 className="font-bold text-[#012B4E] text-lg">Transferencia BCP</h3>
          <p className="text-sm text-gray-500">{method.description}</p>
        </div>
      </div>
      <div className="space-y-3 flex-1">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-1">Titular</p>
          <p className="text-sm font-semibold text-gray-700">{data.accountHolder}</p>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-1">N° de Cuenta</p>
            <p className="font-mono font-bold text-[#012B4E] truncate">{data.accountNumber}</p>
          </div>
          <CopyButton text={data.accountNumber} label="" />
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-1">CCI</p>
            <p className="font-mono font-bold text-[#012B4E] text-sm truncate">{data.cci}</p>
          </div>
          <CopyButton text={data.cci} label="" />
        </div>
      </div>
    </div>
  );
}

function YapeCard({ method }: { method: DonationMethod }) {
  const data = method.data as YapeData;
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col h-full">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-12 h-12 bg-[#7B2FBE] rounded-xl flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-sm">Yape</span>
        </div>
        <div>
          <h3 className="font-bold text-[#012B4E] text-lg">Yape</h3>
          <p className="text-sm text-gray-500">{method.description}</p>
        </div>
      </div>
      {/* QR + datos */}
      <div className="flex items-center gap-5 mb-4">
        <div className="w-28 h-28 bg-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300 flex-shrink-0">
          <div className="text-center">
            <div className="text-3xl mb-1">📱</div>
            <div className="text-xs text-gray-400">QR Yape</div>
          </div>
        </div>
        <div className="flex-1 min-w-0 space-y-3">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-1">Destinatario</p>
            <p className="font-semibold text-gray-700">{data.holderName}</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-1">Número Yape</p>
            <div className="flex items-center gap-2 flex-wrap">
              <p className="font-mono font-bold text-[#7B2FBE] text-lg whitespace-nowrap">{data.phone}</p>
              <CopyButton text={data.phone.replace(/\s/g, '')} label="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto bg-[#7B2FBE]/5 rounded-xl p-4">
        <ol className="space-y-1 text-sm text-gray-600">
          <li>1. Escanea el QR o utiliza nuestro número de Yape.</li>
          <li>2. Elige el monto que deseas donar.</li>
          <li>3. ¡Gracias por ayudar! 🐾</li>
        </ol>
      </div>
    </div>
  );
}

function PaypalCard({ method }: { method: DonationMethod }) {
  const [showModal, setShowModal] = useState(false);
  const data = method.data as import('@/types').PaypalData;
  return (
    <>
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col h-full w-full">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 bg-[#003087] rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-xs">PayPal</span>
          </div>
          <div>
            <h3 className="font-bold text-[#012B4E] text-lg">PayPal</h3>
            <p className="text-sm text-gray-500">Para donantes internacionales</p>
          </div>
        </div>

        <p className="text-gray-600 mb-5">{method.description}</p>

        <div className="flex-1 space-y-3 mb-5">
          <div className="flex items-center justify-between gap-3 bg-gray-50 rounded-xl px-4 py-3">
            <div className="min-w-0">
              <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-0.5">Correo PayPal</p>
              <p className="font-mono font-bold text-[#003087] text-sm truncate">{data.email}</p>
            </div>
            <CopyButton text={data.email} label="correo" />
          </div>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center justify-center gap-2 bg-[#003087] hover:bg-[#00256b] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 w-full active:scale-95"
        >
          DONAR CON PAYPAL
        </button>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Donaciones internacionales"
      >
        <div className="text-center">
          <div className="text-5xl mb-4">🌍</div>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            Las donaciones internacionales vía PayPal estarán disponibles próximamente.
          </p>
          <p className="text-gray-500 text-sm mb-6">
            Por ahora puedes enviarnos tu donación directamente a{' '}
            <a href={`mailto:${data.email}`} className="text-[#003087] font-medium">
              {data.email}
            </a>
          </p>
          <button
            onClick={() => setShowModal(false)}
            className="bg-[#2BC4B5] hover:bg-[#22a99c] text-white font-semibold px-6 py-3 rounded-xl transition-colors w-full"
          >
            Entendido
          </button>
        </div>
      </Modal>
    </>
  );
}

interface DonationSectionProps {
  methods: DonationMethod[];
}

export default function DonationSection({ methods }: DonationSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-[#012B4E] to-[#024070]" aria-label="Sección de donaciones">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#FEE35A]/20 border border-[#FEE35A]/40 text-[#FEE35A] px-4 py-2 rounded-full text-sm font-medium mb-6">
            ❤️ Hacer una donación
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Tu ayuda se convierte en alimento,<br className="hidden md:block" /> medicinas y nuevas oportunidades.
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            El albergue depende de personas como tú para continuar rescatando y cuidando a nuestros animales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 items-stretch">
          {methods.map((method) => (
            <div key={method.id} className="flex">
              {method.type === 'bcp' && <BcpCard method={method} />}
              {method.type === 'yape' && <YapeCard method={method} />}
              {method.type === 'paypal' && <PaypalCard method={method} />}
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block bg-white/10 border border-white/20 rounded-2xl px-8 py-5">
            <p className="text-white/70 text-sm mb-1">¿Prefieres donar directamente en nuestra web?</p>
            <p className="text-[#FEE35A] font-semibold">
              Próximamente podrás realizar tu donación directamente desde aquí.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
