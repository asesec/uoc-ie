import { Fragment } from 'react'
import { BRAND_NAME } from '../brand'

/**
 * "Sr" dibujado en SVG para que siempre se renderice (evita fallos raros con CSS/HTML).
 * variant: eyebrow (cabecera), hero (titulo grande), icon (dentro del cuadrado A).
 */
export function SrBadgeSvg({ variant = 'eyebrow' }) {
  const presets = {
    eyebrow: { w: 50, h: 32, rx: 9, fs: 16, bg: '#0f766e', fg: '#ffffff' },
    hero: { w: 100, h: 54, rx: 14, fs: 30, bg: '#0f766e', fg: '#ffffff' },
    icon: { w: 32, h: 22, rx: 6, fs: 12, bg: '#ffffff', fg: '#0f766e' },
  }
  const p = presets[variant] ?? presets.eyebrow

  return (
    <svg
      width={p.w}
      height={p.h}
      viewBox={`0 0 ${p.w} ${p.h}`}
      aria-hidden="true"
      focusable="false"
      style={{ flexShrink: 0, display: 'block', overflow: 'visible' }}
    >
      <rect x="0" y="0" width={p.w} height={p.h} rx={p.rx} fill={p.bg} />
      <text
        x={p.w / 2}
        y={p.h / 2}
        dominantBaseline="central"
        textAnchor="middle"
        fill={p.fg}
        fontSize={p.fs}
        fontWeight="800"
        fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
        letterSpacing="0.04em"
      >
        Sr
      </text>
    </svg>
  )
}

/** Marca: Aura + sufijo Sr (SVG). */
export function BrandMark({ variant = 'eyebrow' }) {
  const isHero = variant === 'hero'

  return (
    <span className="brand-mark" aria-label={BRAND_NAME}>
      <span
        aria-hidden="true"
        className={`brand-aura-word ${isHero ? 'brand-aura-word--hero' : 'brand-aura-word--eyebrow'}`}
      >
        Aura
      </span>
      <SrBadgeSvg variant={isHero ? 'hero' : 'eyebrow'} />
    </span>
  )
}

/** Titulo de cabecera: si incluye la marca, muestra Aura + Sr (SVG). */
export function BrandHeadingTitle({ title, className }) {
  if (!title.includes(BRAND_NAME)) {
    return <h1 className={className}>{title}</h1>
  }

  const parts = title.split(BRAND_NAME)

  return (
    <h1 className={className} aria-label={title}>
      {parts.map((part, index) => (
        <Fragment key={`brand-title-${index}`}>
          {part ? <span className="whitespace-pre-wrap">{part}</span> : null}
          {index < parts.length - 1 ? <BrandMark variant="hero" /> : null}
        </Fragment>
      ))}
    </h1>
  )
}
