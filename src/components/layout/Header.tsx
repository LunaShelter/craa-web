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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/logo_craa.png"
              alt="CRAA - Conciencia y Rescate Animal Ayacucho"
              width={48}
              height={48}
              className="object-contain"
            />
            <div className="hidden sm:block">
              <span className="font-bold text-[#012B4E] text-lg leading-tight block">CRAA</span>
              <span className="text-xs text-gray-500 leading-tight block">Conciencia y Rescate Animal</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:text-[#2BC4B5] hover:bg-[#2BC4B5]/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/donar"
              className="inline-flex items-center gap-1.5 bg-[#2BC4B5] hover:bg-[#22a99c] text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 text-sm"
            >
              DONAR <span aria-hidden="true">❤️</span>
            </Link>

            {/* Hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label="Abrir menú de navegación"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1" aria-label="Menú móvil">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-base font-medium text-gray-700 rounded-xl hover:text-[#2BC4B5] hover:bg-[#2BC4B5]/5 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donar"
              className="mt-2 inline-flex items-center justify-center gap-1.5 bg-[#2BC4B5] hover:bg-[#22a99c] text-white font-semibold px-5 py-3 rounded-xl transition-all duration-200"
              onClick={() => setMenuOpen(false)}
            >
              DONAR AHORA ❤️
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
