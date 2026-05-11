export function StatusPill({ children, tone = 'teal' }) {
  const tones = {
    teal: 'bg-teal-50 text-teal-900 ring-teal-200',
    amber: 'bg-amber-50 text-amber-950 ring-amber-200',
    green: 'bg-emerald-50 text-emerald-950 ring-emerald-200',
    rose: 'bg-rose-50 text-rose-950 ring-rose-200',
    slate: 'bg-slate-100 text-slate-900 ring-slate-200',
  }

  return (
    <span
      className={`inline-flex items-center rounded-full px-4 py-2 text-base font-bold ring-1 ${tones[tone]}`}
    >
      {children}
    </span>
  )
}
