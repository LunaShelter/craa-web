'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-white/96 backdrop-blur-md border-b transition-all duration-300 ${
        scrolled ? 'border-[#E8D9C8] shadow-[0_2px_12px_0_rgba(1,43,78,0.08)]' : 'border-transparent shadow-none'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <Image
              src="/logo_craa.png"
              alt="CRAA - Conciencia y Rescate Animal Ayacucho"
              width={40}
              height={40}
              className="object-contain group-hover:scale-105 transition-transform duration-200"
            />
            <div className="hidden sm:block leading-none">
              <span className="font-bold text-[#012B4E] text-base block tracking-tight">CRAA</span>
              <span className="text-[11px] text-[#7A93A8] block mt-0.5">Conciencia y Rescate Animal</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-[#4A6580] rounded-lg hover:text-[#012B4E] hover:bg-[#F7EAD8] transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/donar"
              className="inline-flex items-center gap-1.5 bg-[#2BC4B5] hover:bg-[#22a99c] text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 text-sm focus:outline-none focus:ring-2 focus:ring-[#2BC4B5] focus:ring-offset-2"
            >
              DONAR
            </Link>

            {/* Hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg text-[#4A6580] hover:bg-[#F7EAD8] hover:text-[#012B4E] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label="Abrir menú de navegación"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-[#F0E6D8]">
          <nav className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col gap-1" aria-label="Menú móvil">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-sm font-medium text-[#4A6580] rounded-xl hover:text-[#012B4E] hover:bg-[#F7EAD8] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donar"
              className="mt-3 inline-flex items-center justify-center gap-2 bg-[#2BC4B5] hover:bg-[#22a99c] text-white font-semibold px-5 py-3 rounded-xl transition-all duration-200 active:scale-95"
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
