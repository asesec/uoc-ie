import { HomeCard } from '../components/HomeCard'
import { StatusPill } from '../components/StatusPill'
import { homeFlows } from '../data/mockData'

export function Home({ onNavigate }) {
  return (
    <div className="space-y-6">
      <section className="senior-card grid gap-8 rounded-[2.5rem] p-7 md:grid-cols-[1fr_0.8fr] md:p-10">
        <div className="flex flex-col justify-center">
          <StatusPill tone="green">Prototipo PMV visual</StatusPill>
          <h2 className="mt-5 max-w-4xl text-5xl font-black leading-tight tracking-tight text-slate-950 md:text-7xl">
            La tecnologia se adapta a ti.
          </h2>
          <p className="mt-6 max-w-3xl text-2xl leading-relaxed text-slate-700">
            Aura Sr es un acompañante conversacional para personas mayores. Ayuda a hablar con la
            familia, hacer gestiones, sentirse acompañado y navegar el mundo digital sin miedo.
          </p>
        </div>

        <div className="rounded-[2.5rem] bg-teal-800 p-6 text-white shadow-2xl shadow-teal-900/20">
          <p className="text-xl font-bold text-teal-50">Buenos dias, Antonio</p>
          <p className="mt-4 text-4xl font-black leading-tight">Estoy aqui para ayudarte, paso a paso.</p>
          <div className="mt-8 rounded-[2rem] bg-white/14 p-5">
            <p className="text-2xl leading-relaxed">
              Puedes hablarme como hablarías con alguien de confianza. Yo te mostrare solo lo
              necesario.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-lg font-black uppercase tracking-[0.18em] text-teal-800">Elige qué necesitas</p>
            <h2 className="text-4xl font-black tracking-tight text-slate-950">Acciones grandes y claras</h2>
          </div>
          <p className="text-xl text-slate-700">Sin cuentas, sin formularios y sin servicios reales.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {homeFlows.map((flow) => (
            <HomeCard key={flow.id} flow={flow} onSelect={onNavigate} />
          ))}
        </div>
      </section>
    </div>
  )
}
