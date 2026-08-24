/**
 * CRAA Design Tokens
 *
 * Single source of truth for brand colors and shared component class strings.
 * All components should use these tokens instead of hard-coded hex values.
 *
 * Color strategy:
 *   60–70% — cream/neutral background (--background, --surface)
 *   20–30% — dark blue structural color (azul)
 *    5–10% — accent colors used strategically (turquesa, amarillo)
 */

export const colors = {
  // Brand palette
  azul:           '#012B4E',
  azulHover:      '#024070',
  azulLight:      '#0a3d6b',
  turquesa:       '#2BC4B5',
  turquesaHover:  '#22a99c',
  amarillo:       '#FEE35A',
  amarilloHover:  '#f5d83a',
  naranjaClaro:   '#FEBE69',
  naranja:        '#FC9A36',
  coral:          '#FD544A',
  coralHover:     '#e04540',
  crema:          '#FFF5EC',
  cremaDark:      '#F7EAD8',

  // Semantic aliases
  primary:        '#2BC4B5',  // Main action — teal
  primaryHover:   '#22a99c',
  secondary:      '#012B4E',  // Secondary action — dark blue
  secondaryHover: '#024070',
  accent:         '#FEE35A',  // Accent — yellow (use sparingly)
  accentHover:    '#f5d83a',
  danger:         '#FD544A',  // Urgent/error
  dangerHover:    '#e04540',
  success:        '#10B981',
  warning:        '#FC9A36',

  // Text
  textPrimary:    '#012B4E',
  textSecondary:  '#4A6580',
  textSubtle:     '#7A93A8',

  // Surfaces
  background:     '#FFF5EC',
  surface:        '#FFFFFF',
  surfaceMuted:   '#F7EAD8',

  // Borders
  border:         '#E8D9C8',
  borderLight:    '#F0E6D8',

  /** @deprecated use colors.primary */
  cta:            '#2BC4B5',
  /** @deprecated use colors.primaryHover */
  ctaHover:       '#22a99c',
} as const;

// ============================================================
// BUTTON CLASS STRINGS
// Shared Tailwind class strings for all button variants.
// Height: 44px (py-2.5 + text-sm) to 48px (py-3 + text-base)
// Border radius: rounded-xl (12px) consistently
// ============================================================

/** Primary CTA button — teal background */
export const btnPrimary =
  'inline-flex items-center justify-center gap-2 bg-[#2BC4B5] hover:bg-[#22a99c] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#2BC4B5] focus:ring-offset-2' as const;

/** Secondary CTA button — dark blue */
export const btnSecondary =
  'inline-flex items-center justify-center gap-2 bg-[#012B4E] hover:bg-[#024070] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#012B4E] focus:ring-offset-2' as const;

/** Outline button — teal border */
export const btnOutline =
  'inline-flex items-center justify-center gap-2 border-2 border-[#2BC4B5] text-[#2BC4B5] hover:bg-[#2BC4B5] hover:text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#2BC4B5] focus:ring-offset-2' as const;

/** Ghost button — outline dark blue */
export const btnGhost =
  'inline-flex items-center justify-center gap-2 border-2 border-[#012B4E] text-[#012B4E] hover:bg-[#012B4E] hover:text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#012B4E] focus:ring-offset-2' as const;

/** White ghost — for dark backgrounds */
export const btnWhite =
  'inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#012B4E] font-semibold px-6 py-3 rounded-xl transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2' as const;

/** Danger/urgent button — coral */
export const btnDanger =
  'inline-flex items-center justify-center gap-2 bg-[#FD544A] hover:bg-[#e04540] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#FD544A] focus:ring-offset-2' as const;

// ============================================================
// BACKWARD COMPATIBLE ALIASES
// ============================================================

/** @deprecated use btnPrimary */
export const ctaButtonClasses =
  'bg-[#2BC4B5] hover:bg-[#22a99c] text-white' as const;

/** @deprecated use btnPrimary */
export const ctaButtonClassesFull =
  `${ctaButtonClasses} font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-95` as const;

/** @deprecated use cardHeaderDark */
export const cardHeaderGradient =
  'bg-[#012B4E]' as const;

// ============================================================
// CARD PATTERNS
// ============================================================

/** White card — standard component card */
export const cardWhite =
  'bg-white rounded-2xl border border-[#F0E6D8] shadow-[0_2px_8px_0_rgba(1,43,78,0.07)]' as const;

/** Cream card — section background card */
export const cardCream =
  'bg-[#F7EAD8] rounded-2xl border border-[#E8D9C8]' as const;

/** Dark card — azul background */
export const cardDark =
  'bg-[#012B4E] rounded-2xl' as const;

/** Dark card header — for cards with a branded header strip */
export const cardHeaderDark =
  'bg-[#012B4E]' as const;
