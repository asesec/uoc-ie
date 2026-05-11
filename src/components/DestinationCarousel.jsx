import { BigButton } from './BigButton'
import { StatusPill } from './StatusPill'

export function DestinationCarousel({ destinations, activeId, onSelect }) {
  const active = destinations.find((destination) => destination.id === activeId) ?? destinations[0]

  return (
    <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="senior-card overflow-hidden rounded-[2.5rem]">
        <div
          className="soft-picture flex min-h-[28rem] flex-col justify-end p-7 text-white md:p-10"
          style={{ '--picture-gradient': active.gradient }}
        >
          <StatusPill tone="slate">Viaje de hoy</StatusPill>
          <h2 className="mt-5 text-5xl font-black tracking-tight md:text-7xl">{active.name}</h2>
          <p className="mt-4 max-w-2xl text-2xl font-semibold leading-relaxed text-white/95">
            {active.subtitle}
          </p>
        </div>
      </div>

      <div className="space-y-5">
        <article className="senior-card rounded-[2rem] p-6">
          <p className="text-lg font-black tracking-[0.18em] text-teal-800">Narracion de Aura Sr</p>
          <p className="mt-3 text-2xl leading-relaxed text-slate-800">{active.narration}</p>
        </article>

        <article className="senior-card rounded-[2rem] p-6">
          <h3 className="text-2xl font-black text-slate-950">Veremos despacio</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {active.facts.map((fact) => (
              <StatusPill key={fact} tone="amber">
                {fact}
              </StatusPill>
            ))}
          </div>
        </article>

        <div className="grid gap-3">
          {destinations.map((destination) => (
            <BigButton
              key={destination.id}
              variant={destination.id === active.id ? 'primary' : 'secondary'}
              onClick={() => onSelect(destination.id)}
            >
              Visitar {destination.name}
            </BigButton>
          ))}
        </div>
      </div>
    </section>
  )
}
