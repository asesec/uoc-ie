import { BrandHeadingTitle, BrandMark, SrBadgeSvg } from './BrandMark'
import { BigButton } from './BigButton'
import { StatusPill } from './StatusPill'

export function AppShell({ title, subtitle, children, onHome, showBack = true }) {
  return (
    <div className="min-h-screen px-4 py-5 text-slate-900 sm:px-6 lg:px-10">
      <div className="mx-auto flex min-h-[calc(100svh-2.5rem)] w-full max-w-7xl flex-col">
        <header className="mb-6 flex flex-col gap-4 rounded-[2rem] bg-white/70 p-4 shadow-sm ring-1 ring-white/80 backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-3xl bg-teal-700 text-white shadow-lg shadow-teal-900/20">
              <span aria-hidden="true" className="text-3xl font-black leading-none">
                A
              </span>
              <span aria-hidden="true" className="mt-1 inline-block leading-none">
                <SrBadgeSvg variant="icon" />
              </span>
            </div>
            <div>
              <BrandHeadingTitle
                title={title}
                className="flex flex-wrap items-center gap-x-3 gap-y-2 text-3xl font-black tracking-tight text-slate-950 normal-case md:text-5xl"
              />
              {subtitle ? <p className="mt-1 max-w-3xl text-xl text-slate-700">{subtitle}</p> : null}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <StatusPill tone="green">Modo sencillo activo</StatusPill>
            {showBack ? (
              <BigButton variant="secondary" onClick={onHome} className="min-h-14 px-5 py-3">
                Volver al inicio
              </BigButton>
            ) : null}
          </div>
        </header>

        <main className="animate-aura-in flex-1">{children}</main>
      </div>
    </div>
  )
}
