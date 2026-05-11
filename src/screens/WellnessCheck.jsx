import { useState } from 'react'
import { BigButton } from '../components/BigButton'
import { ChatBubble } from '../components/ChatBubble'
import { StatusPill } from '../components/StatusPill'
import { wellnessChecks } from '../data/mockData'

export function WellnessCheck() {
  const [status, setStatus] = useState('pending')

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_24rem]">
      <section className="senior-card rounded-[2.5rem] p-6 md:p-8">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-black uppercase tracking-[0.18em] text-teal-800">Check de bienestar</p>
            <h2 className="text-5xl font-black tracking-tight text-slate-950">Aura Sr pregunta con cuidado</h2>
          </div>
          <StatusPill tone={status === 'ok' ? 'green' : status === 'help' ? 'amber' : 'teal'}>
            {status === 'ok' ? 'Todo tranquilo' : status === 'help' ? 'Aviso preparado' : 'Pendiente'}
          </StatusPill>
        </div>

        <div className="space-y-5">
          {wellnessChecks.map((text) => (
            <ChatBubble key={text} message={{ from: 'aura', text }} />
          ))}
          {status === 'ok' ? (
            <ChatBubble message={{ from: 'user', text: 'Si, estoy bien. Gracias por preguntar.' }} />
          ) : null}
          {status === 'help' ? (
            <ChatBubble
              message={{
                from: 'aura',
                text: 'He preparado un aviso tranquilo para Maria: "Antonio quiere hablar contigo cuando puedas".',
              }}
            />
          ) : null}
        </div>
      </section>

      <aside className="senior-card rounded-[2.5rem] p-6">
        <div className="rounded-[2rem] bg-emerald-50 p-6">
          <p className="text-lg font-black uppercase tracking-[0.18em] text-emerald-900">Sistema de tranquilidad</p>
          <p className="mt-3 text-3xl font-black leading-tight text-slate-950">
            Aura Sr detecta silencio prolongado sin ser invasiva.
          </p>
        </div>

        <div className="mt-6 grid gap-3">
          <BigButton variant="calm" onClick={() => setStatus('ok')}>
            Estoy bien
          </BigButton>
          <BigButton variant="warm" onClick={() => setStatus('help')}>
            Quiero avisar a alguien
          </BigButton>
          <BigButton variant="secondary" onClick={() => setStatus('pending')}>
            Recordarmelo luego
          </BigButton>
        </div>
      </aside>
    </div>
  )
}
