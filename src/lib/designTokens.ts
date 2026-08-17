/**
 * Design tokens for CRAA
 *
 * Centralizes brand colors so future changes only require editing this file.
 * Usage in Tailwind inline styles: style={{ backgroundColor: colors.cta }}
 * Usage in className strings: use the CSS variable classes defined in globals.css
 *   e.g. `bg-cta`, `hover:bg-cta-hover`
 */

export const colors = {
  azul: '#012B4E',
  azulHover: '#024070',
  turquesa: '#2BC4B5',
  turquesaHover: '#22a99c',
  amarillo: '#FEE35A',
  amarilloHover: '#f5d83a',
  naranjaClaro: '#FEBE69',
  naranja: '#FC9A36',
  coral: '#FD544A',
  coralHover: '#e04540',
  crema: '#FFF5EC',

  /** Color principal de CTAs de donación y acción urgente */
  cta: '#2BC4B5',
  ctaHover: '#22a99c',
} as const;

/**
 * Tailwind class strings for the primary CTA button (donate / help).
 * Update here to change all CTA buttons at once.
 */
export const ctaButtonClasses =
  'bg-[#2BC4B5] hover:bg-[#22a99c] text-white' as const;

export const ctaButtonClassesFull =
  `${ctaButtonClasses} font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-95` as const;

/**
 * Gradient for card headers (e.g. "Información del evento").
 * Update here to change all card header gradients at once.
 */
export const cardHeaderGradient =
  'bg-gradient-to-r from-[#012B4E] to-[#2BC4B5]' as const;
