'use client';

import { useState } from 'react';
import Link from 'next/link';
import { DonationMethod, BcpData, YapeData } from '@/types';
import Modal from '@/components/ui/Modal';
import SectionHeader from '@/components/ui/SectionHeader';

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    let success = false;

    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        success = true;
      } catch { /* fall through */ }
    }

    if (!success) {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.cssText = 'position:fixed;top:0;left:0;opacity:0;pointer-events:none';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      try { success = document.execCommand('copy'); } catch { /* */ }
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
      className={`flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 flex-shrink-0 ${
        copied
          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
          : 'bg-[#F7EAD8] text-[#4A6580] border border-[#E8D9C8] hover:bg-[#E8D9C8]'
      }`}
      aria-label={`Copiar ${label}`}
    >
      {copied ? '✓ Copiado' : 'Copiar'}
    </button>
  );
}

function DonationCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-2xl p-6 sm:p-7 border border-[#F0E6D8] shadow-[0_2px_8px_0_rgba(1,43,78,0.06)] hover:shadow-[0_8px_20px_0_rgba(1,43,78,0.10)] transition-all duration-300 flex flex-col w-full h-full ${className}`}>
      {children}
    </div>
  );
}

function BcpCard({ method }: { method: DonationMethod }) {
  const data = method.data as BcpData;
  return (
    <DonationCard>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-11 h-11 bg-[#012B4E] rounded-xl flex items-center justify-center text-white font-bold text-xs flex-shrink-0 tracking-wide">BCP</div>
        <div>
          <h3 className="font-bold text-[#012B4E] text-base">Transferencia BCP</h3>
          <p className="text-xs text-[#7A93A8] mt-0.5">{method.description}</p>
        </div>
      </div>
      <div className="space-y-4 flex-1">
        <div>
          <p className="text-[10px] text-[#7A93A8] uppercase tracking-widest font-bold mb-1">Titular</p>
          <p className="text-sm font-semibold text-[#012B4E]">{data.accountHolder}</p>
        </div>
        <div className="bg-[#F7EAD8] rounded-xl px-4 py-3 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[10px] text-[#7A93A8] uppercase tracking-widest font-bold mb-0.5">N° de Cuenta</p>
            <p className="font-mono font-bold text-[#012B4E] text-sm truncate">{data.accountNumber}</p>
          </div>
          <CopyButton text={data.accountNumber} label="cuenta" />
        </div>
        <div className="bg-[#F7EAD8] rounded-xl px-4 py-3 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[10px] text-[#7A93A8] uppercase tracking-widest font-bold mb-0.5">CCI</p>
            <p className="font-mono font-bold text-[#012B4E] text-sm truncate">{data.cci}</p>
          </div>
          <CopyButton text={data.cci} label="CCI" />
        </div>
      </div>
    </DonationCard>
  );
}

function YapeCard({ method }: { method: DonationMethod }) {
  const data = method.data as YapeData;
  return (
    <DonationCard>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-11 h-11 bg-[#7B2FBE] rounded-xl flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-xs">Yape</span>
        </div>
        <div>
          <h3 className="font-bold text-[#012B4E] text-base">Yape</h3>
          <p className="text-xs text-[#7A93A8] mt-0.5">{method.description}</p>
        </div>
      </div>
      <div className="flex items-start gap-5 mb-5">
        <div className="w-24 h-24 bg-[#F7EAD8] rounded-xl flex items-center justify-center border border-dashed border-[#E8D9C8] flex-shrink-0">
          <div className="text-center">
            <div className="text-2xl mb-1">📱</div>
            <div className="text-[10px] text-[#7A93A8] font-medium">QR Yape</div>
          </div>
        </div>
        <div className="flex-1 min-w-0 space-y-3">
          <div>
            <p className="text-[10px] text-[#7A93A8] uppercase tracking-widest font-bold mb-0.5">Destinatario</p>
            <p className="font-semibold text-[#012B4E] text-sm">{data.holderName}</p>
          </div>
          <div>
            <p className="text-[10px] text-[#7A93A8] uppercase tracking-widest font-bold mb-0.5">Número Yape</p>
            <div className="flex items-center gap-2 flex-wrap">
              <p className="font-mono font-bold text-[#7B2FBE] text-lg whitespace-nowrap">{data.phone}</p>
              <CopyButton text={data.phone.replace(/\s/g, '')} label="número" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto bg-[#F7EAD8] rounded-xl p-4 border border-[#E8D9C8]">
        <ol className="space-y-1.5 text-sm text-[#4A6580]">
          <li>1. Escanea el QR o usa el número de Yape.</li>
          <li>2. Elige el monto que deseas donar.</li>
          <li>3. ¡Gracias por ayudar!</li>
        </ol>
      </div>
    </DonationCard>
  );
}

function PaypalCard({ method }: { method: DonationMethod }) {
  const [showModal, setShowModal] = useState(false);
  const data = method.data as import('@/types').PaypalData;
  return (
    <>
      <DonationCard>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 bg-[#003087] rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-[10px] leading-none text-center">Pay<br/>Pal</span>
          </div>
          <div>
            <h3 className="font-bold text-[#012B4E] text-base">PayPal</h3>
            <p className="text-xs text-[#7A93A8] mt-0.5">Para donantes internacionales</p>
          </div>
        </div>

        <p className="text-[#4A6580] text-sm mb-5 leading-relaxed">{method.description}</p>

        <div className="flex-1 mb-6">
          <div className="bg-[#F7EAD8] rounded-xl px-4 py-3 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[10px] text-[#7A93A8] uppercase tracking-widest font-bold mb-0.5">Correo PayPal</p>
              <p className="font-mono font-bold text-[#003087] text-sm truncate">{data.email}</p>
            </div>
            <CopyButton text={data.email} label="correo" />
          </div>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center justify-center gap-2 bg-[#003087] hover:bg-[#00256b] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 w-full active:scale-95 mt-auto"
        >
          DONAR CON PAYPAL
        </button>
      </DonationCard>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Donaciones internacionales">
        <div className="text-center">
          <div className="text-5xl mb-4">🌍</div>
          <p className="text-[#4A6580] text-base leading-relaxed mb-4">
            Las donaciones internacionales vía PayPal estarán disponibles próximamente.
          </p>
          <p className="text-[#7A93A8] text-sm mb-6">
            Por ahora puedes enviarnos tu donación directamente a{' '}
            <a href={`mailto:${data.email}`} className="text-[#003087] font-semibold">
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
    <section className="py-24 bg-[#012B4E]" aria-label="Sección de donaciones">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mx-auto max-w-xl">
            Tu ayuda se convierte en<br />
            <span className="text-[#FEE35A]">alimento, medicinas</span> y<br />
            nuevas oportunidades.
          </h2>
          <p className="text-white/60 text-base mt-4 max-w-md mx-auto leading-relaxed">
            El albergue depende de personas como tú para continuar rescatando y cuidando animales.
          </p>
        </div>

        {/* Cards — 1 col mobile, 3 col desktop — equal height via items-stretch */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12 md:items-stretch">
          {methods.map((method) => (
            <div key={method.id} className="w-full md:flex md:flex-col">
              {method.type === 'bcp'    && <BcpCard    method={method} />}
              {method.type === 'yape'   && <YapeCard   method={method} />}
              {method.type === 'paypal' && <PaypalCard method={method} />}
            </div>
          ))}
        </div>

        {/* Coming soon notice */}
        <div className="text-center">
          <div className="inline-block bg-white/5 border border-white/10 rounded-2xl px-8 py-5">
            <p className="text-white/50 text-sm mb-1">¿Prefieres donar directamente en nuestra web?</p>
            <p className="text-[#FEE35A] font-semibold text-sm">
              Próximamente podrás realizar tu donación directamente desde aquí.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
