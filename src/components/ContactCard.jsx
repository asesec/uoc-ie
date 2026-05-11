import { BigButton } from './BigButton'
import { StatusPill } from './StatusPill'

export function ContactCard({ contact, onCall, onVideo, onMessage }) {
  return (
    <article className="senior-card rounded-[2rem] p-5">
      <div className="flex flex-col gap-5 md:flex-row md:items-center">
        <div
          className="soft-picture grid h-36 w-full place-items-center rounded-[2rem] text-6xl font-black text-white md:h-40 md:w-40"
          style={{ '--picture-gradient': contact.gradient }}
          aria-hidden="true"
        >
          {contact.initials}
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-4xl font-black text-slate-950">{contact.name}</h2>
            <StatusPill tone="green">{contact.relation}</StatusPill>
          </div>
          <p className="mt-2 text-2xl font-bold text-slate-700">{contact.availability}</p>
          <p className="mt-2 text-xl text-slate-600">{contact.note}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <BigButton onClick={() => onCall(contact)}>Llamar</BigButton>
        <BigButton variant="warm" onClick={() => onVideo(contact)}>
          Videollamada
        </BigButton>
        <BigButton variant="secondary" onClick={() => onMessage(contact)}>
          Mensaje
        </BigButton>
      </div>
    </article>
  )
}
