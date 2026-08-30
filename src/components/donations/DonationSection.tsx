'use client';

import { useState } from 'react';
import { DonationMethod, BcpData, YapeData } from '@/types';
import Modal from '@/components/ui/Modal';

async function copyToClipboard(text: string) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch { /* fall through */ }
  }
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.cssText = 'position:fixed;top:0;left:0;opacity:0;pointer-events:none';
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  let ok = false;
  try { ok = document.execCommand('copy'); } catch { /* */ }
  document.body.removeChild(textarea);
  return ok;
}

/** Small pill copy button that sits inside a data row. */
function CopyPill({ text, label, tone = '#012B4E' }: { text: string; label: string; tone?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (await copyToClipboard(text)) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      style={{ backgroundColor: copied ? '#2BC4B5' : tone }}
      className="text-xs font-bold px-[15px] py-2 rounded-full text-white flex-shrink-0 transition-all duration-200 active:scale-95 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2BC4B5]"
      aria-label={`Copiar ${label}`}
    >
      {copied ? '✓ Copiado' : 'Copiar'}
    </button>
  );
}

/** Outlined pill action, used as the card footer action. */
function CardAction({
  onClick,
  children,
  variant = 'outline',
  tone = '#012B4E',
}: {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'outline' | 'solid';
  tone?: string;
}) {
  const style =
    variant === 'solid'
      ? { backgroundColor: tone, color: '#fff' }
      : { borderColor: tone, color: tone };

  return (
    <button
      onClick={onClick}
      style={style}
      className={`w-full flex items-center justify-center gap-2 font-bold py-3.5 rounded-full text-sm transition-all duration-200 active:scale-95 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2BC4B5] ${
        variant === 'outline' ? 'border-2' : ''
      }`}
    >
      {children}
    </button>
  );
}

/**
 * All three method cards share one shell: header / body / footer action,
 * so heights and button positions line up across the row.
 */
function MethodCard({
  badge,
  badgeColor,
  title,
  subtitle,
  children,
  action,
}: {
  badge: React.ReactNode;
  badgeColor: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  action: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-[28px] overflow-hidden flex flex-col h-full">
      <div className="px-7 pt-[26px] pb-[22px] flex items-center gap-3.5 border-b border-[#F0E6D8]">
        <div
          style={{ backgroundColor: badgeColor }}
          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-extrabold text-[13px] flex-shrink-0 text-center leading-tight"
        >
          {badge}
        </div>
        <div>
          <h3 className="font-heading text-[19px] text-[#012B4E]">{title}</h3>
          <p className="text-xs text-[#7A93A8] mt-[3px]">{subtitle}</p>
        </div>
      </div>
      <div className="px-7 py-6 flex flex-col gap-4 flex-1">{children}</div>
      <div className="px-7 pb-7 mt-auto">{action}</div>
    </div>
  );
}

function DataRow({
  label,
  value,
  valueColor = '#012B4E',
  copy,
  copyLabel,
  copyTone,
}: {
  label: string;
  value: string;
  valueColor?: string;
  copy?: string;
  copyLabel?: string;
  copyTone?: string;
}) {
  return (
    <div className="bg-[#FFF5EC] rounded-[18px] px-[18px] py-3.5 flex items-center justify-between gap-3">
      <div className="min-w-0">
        <p className="text-[10px] text-[#7A93A8] uppercase tracking-[0.14em] font-bold mb-[3px]">{label}</p>
        <p className="font-mono font-bold text-[15px] truncate" style={{ color: valueColor }}>{value}</p>
      </div>
      {copy && <CopyPill text={copy} label={copyLabel ?? label} tone={copyTone} />}
    </div>
  );
}

function BcpCard({ method }: { method: DonationMethod }) {
  const data = method.data as BcpData;
  const [copied, setCopied] = useState(false);

  const copyBoth = async () => {
    if (await copyToClipboard(`Cuenta: ${data.accountNumber} · CCI: ${data.cci}`)) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <MethodCard
      badge="BCP"
      badgeColor="#012B4E"
      title="Transferencia BCP"
      subtitle="Desde cualquier banco del Perú"
      action={<CardAction onClick={copyBoth}>{copied ? '✓ Copiado' : 'Copiar cuenta y CCI'}</CardAction>}
    >
      <div>
        <p className="text-[10px] text-[#7A93A8] uppercase tracking-[0.14em] font-bold mb-[5px]">Titular</p>
        <p className="text-sm font-semibold text-[#012B4E] leading-[1.45]">{data.accountHolder}</p>
      </div>
      <DataRow label="N° de cuenta" value={data.accountNumber} copy={data.accountNumber} copyLabel="cuenta" />
      <DataRow label="CCI" value={data.cci} copy={data.cci} copyLabel="CCI" />
    </MethodCard>
  );
}

function YapeCard({ method }: { method: DonationMethod }) {
  const data = method.data as YapeData;
  const [copied, setCopied] = useState(false);

  const copyPhone = async () => {
    if (await copyToClipboard(data.phone.replace(/\s/g, ''))) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const steps = [
    'Escanea el QR o usa el número de Yape.',
    'Elige el monto que deseas donar.',
    '¡Gracias por ayudar!',
  ];

  return (
    <MethodCard
      badge="Yape"
      badgeColor="#7B2FBE"
      title="Yape"
      subtitle={method.description}
      action={
        <CardAction onClick={copyPhone} tone="#7B2FBE">
          {copied ? '✓ Copiado' : 'Copiar número Yape'}
        </CardAction>
      }
    >
      <div className="flex items-center gap-[18px]">
        <div className="w-24 h-24 bg-[#FFF5EC] rounded-[22px] flex items-center justify-center border border-dashed border-[#E8D9C8] flex-shrink-0">
          <div className="text-center">
            <div className="text-2xl mb-0.5" aria-hidden="true">📱</div>
            <div className="text-[10px] text-[#7A93A8] font-semibold">QR Yape</div>
          </div>
        </div>
        <div className="min-w-0">
          <p className="text-[10px] text-[#7A93A8] uppercase tracking-[0.14em] font-bold mb-[3px]">Destinatario</p>
          <p className="font-semibold text-[#012B4E] text-sm mb-3">{data.holderName}</p>
          <p className="text-[10px] text-[#7A93A8] uppercase tracking-[0.14em] font-bold mb-[3px]">Número Yape</p>
          <p className="font-mono font-bold text-[#7B2FBE] text-xl whitespace-nowrap">{data.phone}</p>
        </div>
      </div>
      <div className="bg-[#FFF5EC] rounded-[18px] px-[18px] py-4">
        <ol className="flex flex-col gap-2.5 text-[13px] text-[#4A6580]">
          {steps.map((step, i) => (
            <li key={step} className="flex gap-2.5 items-start">
              <span
                className="w-5 h-5 rounded-full text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: i === steps.length - 1 ? '#2BC4B5' : '#012B4E' }}
              >
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </MethodCard>
  );
}

function PaypalCard({ method }: { method: DonationMethod }) {
  const [showModal, setShowModal] = useState(false);
  const data = method.data as import('@/types').PaypalData;

  return (
    <>
      <MethodCard
        badge={<>Pay<br />Pal</>}
        badgeColor="#003087"
        title="PayPal"
        subtitle="Para donantes internacionales"
        action={
          <CardAction variant="solid" tone="#003087" onClick={() => setShowModal(true)}>
            DONAR CON PAYPAL
          </CardAction>
        }
      >
        <p className="text-[#4A6580] text-[15px] leading-[1.65]">{method.description}</p>
        <DataRow label="Correo PayPal" value={data.email} valueColor="#003087" copy={data.email} copyLabel="correo" copyTone="#003087" />
        <div className="bg-[#FFF5EC] border border-dashed border-[#E8D9C8] rounded-[18px] px-[18px] py-4">
          <p className="text-[13px] text-[#4A6580] leading-relaxed">
            Las donaciones internacionales vía PayPal estarán disponibles próximamente.
          </p>
        </div>
      </MethodCard>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Donaciones internacionales">
        <div className="text-center">
          <div className="text-5xl mb-4" aria-hidden="true">🌍</div>
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
            className="bg-[#2BC4B5] hover:bg-[#22a99c] text-white font-bold px-6 py-3.5 rounded-full transition-colors w-full"
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
    /* Panel azul contenido — radio 44 en las cuatro esquinas, como el resto de bloques de énfasis. */
    <section className="pb-20 lg:pb-24 bg-[#FFF5EC]" aria-label="Sección de donaciones">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="bg-[#012B4E] rounded-[44px] p-8 sm:p-12 lg:p-14 relative overflow-hidden">
          <div
            className="absolute -top-[140px] -right-[100px] w-[440px] h-[440px] rounded-full bg-[#2BC4B5]/12 pointer-events-none"
            aria-hidden="true"
          />
          <div className="relative">
        {/* Asymmetric section header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-end mb-14">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2BC4B5] mb-4">Formas de donar</div>
            <h2 className="font-heading text-[36px] lg:text-[50px] text-white leading-[1.08]">
              Cada sol se convierte en <span className="text-[#FEE35A]">alimento y medicina.</span>
            </h2>
          </div>
          <p className="text-white/65 text-[17px] leading-[1.7] lg:pb-2">
            El albergue depende de personas como tú para continuar rescatando y cuidando animales. Elige el método que te
            resulte más cómodo — la transferencia llega directamente al albergue.
          </p>
        </div>

        {/* Method cards — equal height, aligned footers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {methods.map((method) => (
            <div key={method.id} className="h-full">
              {method.type === 'bcp' && <BcpCard method={method} />}
              {method.type === 'yape' && <YapeCard method={method} />}
              {method.type === 'paypal' && <PaypalCard method={method} />}
            </div>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3 text-sm text-white/50 text-center">
          <span>¿Prefieres donar directamente en nuestra web?</span>
          <span className="text-[#FEE35A] font-semibold">Próximamente desde aquí.</span>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
