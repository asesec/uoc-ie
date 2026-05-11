import { useState } from 'react'
import { BigButton } from '../components/BigButton'
import { ChatBubble } from '../components/ChatBubble'
import { StatusPill } from '../components/StatusPill'
import { securityExample } from '../data/mockData'

export function DigitalSecurity() {
  const [explained, setExplained] = useState(false)

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_24rem]">
      <section className="senior-card rounded-[2.5rem] p-6 md:p-8">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-black uppercase tracking-[0.18em] text-teal-800">Seguridad digital</p>
            <h2 className="text-5xl font-black tracking-tight text-slate-950">Aura Sr revisa antes de pulsar</h2>
          </div>
          <StatusPill tone="amber">Revision simulada</StatusPill>
        </div>

        <div className="rounded-[2rem] border-2 border-dashed border-amber-300 bg-amber-50 p-6">
          <p className="text-lg font-black uppercase tracking-[0.18em] text-amber-900">
            Mensaje recibido de {securityExample.sender}
          </p>
          <p className="mt-4 text-3xl font-black leading-tight text-slate-950">
            {securityExample.message}
          </p>
        </div>

        <div className="mt-6 space-y-5">
          <ChatBubble message={{ from: 'aura', text: securityExample.verdict }} />
          <ChatBubble message={{ from: 'aura', text: securityExample.advice }} />
          {explained ? <ChatBubble message={{ from: 'aura', text: securityExample.explanation }} /> : null}
        </div>
      </section>

      <aside className="senior-card rounded-[2.5rem] p-6">
        <div className="rounded-[2rem] bg-slate-900 p-6 text-white">
          <p className="text-lg font-black uppercase tracking-[0.18em] text-amber-200">Consejo claro</p>
          <p className="mt-3 text-4xl font-black leading-tight">No pulses el enlace.</p>
          <p className="mt-4 text-xl leading-relaxed text-slate-100">
            Aura Sr no asusta: explica, protege y propone un camino seguro.
          </p>
        </div>

        <div className="mt-6 grid gap-3">
          <BigButton variant="warm" onClick={() => setExplained(true)}>
            Explicamelo facil
          </BigButton>
          <BigButton variant="secondary">Llamar al banco seguro</BigButton>
          <BigButton variant="secondary">Avisar a Maria</BigButton>
        </div>
      </aside>
    </div>
  )
}
