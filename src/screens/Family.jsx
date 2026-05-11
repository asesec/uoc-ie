import { useState } from 'react'
import { BigButton } from '../components/BigButton'
import { ChatBubble } from '../components/ChatBubble'
import { ContactCard } from '../components/ContactCard'
import { StatusPill } from '../components/StatusPill'
import { contacts } from '../data/mockData'

export function Family() {
  const [activeAction, setActiveAction] = useState({ type: 'video', contact: contacts[0] })

  const actionLabels = {
    call: 'Llamada en curso',
    video: 'Videollamada activa',
    message: 'Mensaje preparado',
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_26rem]">
      <section className="space-y-5">
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            onCall={(selected) => setActiveAction({ type: 'call', contact: selected })}
            onVideo={(selected) => setActiveAction({ type: 'video', contact: selected })}
            onMessage={(selected) => setActiveAction({ type: 'message', contact: selected })}
          />
        ))}
      </section>

      <aside className="senior-card rounded-[2.5rem] p-6">
        <StatusPill tone="green">{actionLabels[activeAction.type]}</StatusPill>

        <div
          className="soft-picture mt-5 grid min-h-80 place-items-center rounded-[2rem] p-6 text-center text-white"
          style={{ '--picture-gradient': activeAction.contact.gradient }}
        >
          <div>
            <div className="mx-auto grid h-28 w-28 place-items-center rounded-full bg-white/25 text-6xl font-black">
              {activeAction.contact.initials}
            </div>
            <h2 className="mt-5 text-5xl font-black">{activeAction.contact.name}</h2>
            <p className="mt-2 text-2xl font-semibold">{activeAction.contact.relation}</p>
          </div>
        </div>

        <div className="mt-5 space-y-4">
          <ChatBubble
            message={{
              from: 'aura',
              text:
                activeAction.type === 'message'
                  ? `He preparado un mensaje sencillo para ${activeAction.contact.name}: "Hola, estaba pensando en ti. ¿Hablamos luego?".`
                  : `${activeAction.contact.name} aparecera aqui en grande. Solo tienes que pulsar colgar cuando quieras terminar.`,
            }}
          />
          <BigButton
            variant={activeAction.type === 'message' ? 'primary' : 'danger'}
            className="w-full"
            onClick={() => setActiveAction({ type: 'video', contact: contacts[0] })}
          >
            {activeAction.type === 'message' ? 'Enviar mensaje simulado' : 'Colgar'}
          </BigButton>
        </div>
      </aside>
    </div>
  )
}
