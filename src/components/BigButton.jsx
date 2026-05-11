export function BigButton({
  children,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  ariaLabel,
}) {
  const variants = {
    primary: 'bg-teal-700 text-white hover:bg-teal-800',
    secondary: 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50',
    warm: 'bg-amber-600 text-white hover:bg-amber-700',
    calm: 'bg-emerald-700 text-white hover:bg-emerald-800',
    danger: 'bg-rose-700 text-white hover:bg-rose-800',
  }

  return (
    <button
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      className={`min-h-16 rounded-3xl px-7 py-4 text-xl font-bold shadow-lg shadow-slate-900/10 transition duration-200 hover:-translate-y-0.5 active:translate-y-0 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
