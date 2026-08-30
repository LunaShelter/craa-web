/**
 * CRAA Design Tokens — rediseño
 *
 * Paleta CRAA sobre las formas y la tipografía de Organic:
 * botones pill (rounded-full), radios grandes, titulares en Caprasimo.
 *
 * Color strategy:
 *   60–70% — crema/neutral (--background, --surface)
 *   20–30% — azul oscuro estructural
 *    5–10% — acentos (turquesa, amarillo, naranja) usados con intención
 */

export const colors = {
  // Brand palette
  azul:           '#012B4E',
  azulHover:      '#024070',
  azulLight:      '#0a3d6b',
  turquesa:       '#2BC4B5',
  turquesaHover:  '#22a99c',
  turquesaDeep:   '#1a8f84',  // turquesa legible en texto pequeño
  amarillo:       '#FEE35A',
  amarilloHover:  '#f5d83a',
  amarilloSoft:   '#F3DE9A',
  naranjaClaro:   '#FEBE69',
  naranja:        '#FC9A36',
  coral:          '#FD544A',
  coralDeep:      '#c2372f',  // coral legible en texto pequeño
  coralHover:     '#e04540',
  crema:          '#FFF5EC',
  cremaDark:      '#F7EAD8',

  // Semantic aliases
  primary:        '#2BC4B5',
  primaryHover:   '#22a99c',
  secondary:      '#012B4E',
  secondaryHover: '#024070',
  accent:         '#FEE35A',
  accentHover:    '#f5d83a',
  danger:         '#FD544A',
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
} as const;

/** Radios: contenedores sobre-redondeados, controles en pill. */
export const radii = {
  pill:    '999px',
  control: '18px',
  card:    '28px',
  panel:   '40px',
  section: '56px',
} as const;

// ============================================================
// BUTTON CLASS STRINGS
// Altura 48–52px · rounded-full · font-bold · foco temático
// ============================================================

const btnBase =
  'inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-full text-sm tracking-[0.02em] transition-all duration-200 active:scale-95 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2BC4B5]';

/** CTA principal — relleno turquesa */
export const btnPrimary =
  `${btnBase} bg-[#2BC4B5] hover:bg-[#22a99c] text-white shadow-[0_8px_20px_-6px_rgba(43,196,181,0.55)]` as const;

/** CTA secundario — azul oscuro sólido */
export const btnSecondary =
  `${btnBase} bg-[#012B4E] hover:bg-[#024070] text-white` as const;

/** Outline turquesa */
export const btnOutline =
  `${btnBase} border-2 border-[#2BC4B5] text-[#2BC4B5] hover:bg-[#2BC4B5] hover:text-white` as const;

/** Ghost — outline azul oscuro */
export const btnGhost =
  `${btnBase} border-2 border-[#012B4E] text-[#012B4E] hover:bg-[#012B4E] hover:text-white` as const;

/** Blanco — para fondos oscuros */
export const btnWhite =
  `${btnBase} border-2 border-white text-white hover:bg-white hover:text-[#012B4E]` as const;

/** Acento amarillo — voluntariado */
export const btnAccent =
  `${btnBase} bg-[#FEE35A] hover:bg-[#f5d83a] text-[#012B4E] font-extrabold` as const;

/** Urgencia — coral */
export const btnDanger =
  `${btnBase} bg-[#FD544A] hover:bg-[#e04540] text-white` as const;

/** Botón pequeño en línea (copiar, filtros) */
export const btnPillSm =
  'text-xs font-bold px-[15px] py-2 rounded-full transition-all duration-200 active:scale-95 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2BC4B5]' as const;

// ============================================================
// CARD PATTERNS
// ============================================================

/** Card blanca estándar */
export const cardWhite =
  'bg-white rounded-[28px] border border-[#F0E6D8]' as const;

/** Card crema — superficie de sección */
export const cardCream =
  'bg-[#F7EAD8] rounded-[28px] border border-[#E8D9C8]' as const;

/** Card oscura — azul */
export const cardDark =
  'bg-[#012B4E] rounded-[28px]' as const;

/** Panel grande (transparencia, campaña) */
export const panelDark =
  'bg-[#012B4E] rounded-[44px]' as const;

/** Fila de dato dentro de una card */
export const dataRow =
  'bg-[#FFF5EC] rounded-[18px] px-[18px] py-3.5' as const;

// ============================================================
// TYPE HELPERS
// ============================================================

export const kicker =
  'text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A93A8]' as const;

export const headingXl =
  'font-heading text-[40px] lg:text-[56px] leading-[1.08]' as const;

export const headingLg =
  'font-heading text-[36px] lg:text-[48px] leading-[1.1]' as const;

/** Fotografía lavada, para que la imagen no flote sobre el crema */
export const washed =
  '[filter:saturate(0.88)_contrast(0.94)_brightness(1.03)]' as const;
