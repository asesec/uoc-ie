import { useState } from 'react'
import { BigButton } from '../components/BigButton'
import { ChatBubble } from '../components/ChatBubble'
import { StatusPill } from '../components/StatusPill'
import { VoiceButton } from '../components/VoiceButton'
import { conversationMessages } from '../data/mockData'

const simulatedReplies = [
  {
    from: 'user',
    text: 'Sí, revisemos la cita médica.',
    time: '09:05',
  },
  {
    from: 'aura',
    text: 'Perfecto. Lo haremos juntos y sin prisas. He encontrado una cita para el jueves a las 10:30.',
    time: '09:05',
  },
]

export function Conversation() {
  const [messages, setMessages] = useState(conversationMessages)
  const [isListening, setIsListening] = useState(false)

  function simulateVoice() {
    setIsListening(true)
    setMessages((current) => {
      if (current.length > conversationMessages.length) return current
      return [...current, ...simulatedReplies]
    })
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_22rem]">
      <section className="senior-card rounded-[2.5rem] p-5 md:p-7">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-black uppercase tracking-[0.18em] text-teal-800">Conversación principal</p>
            <h2 className="text-4xl font-black tracking-tight text-slate-950">Aura Sr te escucha</h2>
          </div>
          <StatusPill tone={isListening ? 'green' : 'teal'}>
            {isListening ? 'Respuesta simulada lista' : 'Micrófono simulado'}
          </StatusPill>
        </div>

        <div className="space-y-5 rounded-[2rem] bg-teal-50/70 p-4 md:p-6">
          {messages.map((message, index) => (
            <ChatBubble key={`${message.time}-${index}`} message={message} />
          ))}
        </div>
      </section>

      <aside className="senior-card flex flex-col items-center justify-center rounded-[2.5rem] p-7 text-center">
        <VoiceButton onClick={simulateVoice} />
        <h3 className="mt-8 text-3xl font-black text-slate-950">Pulsa y habla</h3>
        <p className="mt-3 text-xl leading-relaxed text-slate-700">
          En este prototipo la voz está simulada. La experiencia representa hablar de forma natural
          con Aura Sr.
        </p>
        <BigButton variant="secondary" onClick={simulateVoice} className="mt-6 w-full">
          Simular respuesta
        </BigButton>
      </aside>
    </div>
  )
}
