'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/historias', label: 'Historias' },
  { href: '/transparencia', label: 'Transparencia' },
  { href: '/adopcion', label: 'Adopción' },
  { href: '/voluntariado', label: 'Voluntariado' },
  { href: '/partners', label: 'Partners' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FFF5EC]/92 backdrop-blur-[14px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-[72px] md:h-[84px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <Image
              src="/logo_craa.png"
              alt="CRAA - Conciencia y Rescate Animal Ayacucho"
              width={44}
              height={44}
              className="object-contain group-hover:scale-105 transition-transform duration-200"
            />
            <span className="hidden sm:block leading-none">
              <span className="block font-heading text-[#012B4E] text-xl tracking-[0.01em]">CRAA</span>
              <span className="block text-[11px] text-[#7A93A8] mt-[3px] tracking-[0.02em]">Conciencia y Rescate Animal</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-[15px] py-[9px] text-sm font-medium text-[#4A6580] rounded-full hover:bg-[#F7EAD8] hover:text-[#012B4E] transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/donar"
              className="inline-flex items-center gap-2 bg-[#012B4E] hover:bg-[#024070] text-white font-bold px-[26px] py-[13px] rounded-full text-sm tracking-[0.02em] transition-all duration-200 active:scale-95 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2BC4B5]"
            >
              DONAR
              <span className="w-[7px] h-[7px] rounded-full bg-[#2BC4B5] inline-block" aria-hidden="true" />
            </Link>

            {/* Hamburger */}
            <button
              className="lg:hidden p-2 rounded-full text-[#4A6580] hover:bg-[#F7EAD8] hover:text-[#012B4E] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label="Abrir menú de navegación"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.75} viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#FFF5EC] border-t border-[#E8D9C8]">
          <nav className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col gap-1" aria-label="Menú móvil">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-5 py-3 text-sm font-medium text-[#4A6580] rounded-full hover:text-[#012B4E] hover:bg-[#F7EAD8] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donar"
              className="mt-3 inline-flex items-center justify-center gap-2 bg-[#012B4E] hover:bg-[#024070] text-white font-bold px-6 py-3.5 rounded-full transition-all duration-200 active:scale-95"
              onClick={() => setMenuOpen(false)}
            >
              DONAR AHORA
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
