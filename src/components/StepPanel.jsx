import { ChatBubble } from './ChatBubble'
import { StatusPill } from './StatusPill'

export function StepPanel({ title, status, steps }) {
  return (
    <section className="senior-card rounded-[2.5rem] p-6 md:p-8">
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-black tracking-[0.18em] text-teal-800">Aura Sr te acompaña</p>
          <h2 className="mt-1 text-4xl font-black tracking-tight text-slate-950">{title}</h2>
        </div>
        <StatusPill tone="green">{status}</StatusPill>
      </div>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <ChatBubble
            key={step}
            message={{
              from: 'aura',
              text: `${index + 1}. ${step}`,
            }}
          />
        ))}
      </div>
    </section>
  )
}
