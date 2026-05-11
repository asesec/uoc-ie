import { useState } from 'react'
import { DestinationCarousel } from '../components/DestinationCarousel'
import { ChatBubble } from '../components/ChatBubble'
import { destinations } from '../data/mockData'

export function VirtualTrip() {
  const [activeId, setActiveId] = useState(destinations[0].id)

  return (
    <div className="space-y-6">
      <DestinationCarousel destinations={destinations} activeId={activeId} onSelect={setActiveId} />

      <section className="senior-card rounded-[2.5rem] p-6">
        <ChatBubble
          message={{
            from: 'aura',
            text: 'Podemos mirar una imagen cada vez. Si un lugar te trae recuerdos, me lo cuentas y seguimos desde ahi.',
          }}
        />
      </section>
    </div>
  )
}
