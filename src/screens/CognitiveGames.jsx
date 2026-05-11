import { useState } from 'react'
import { BigButton } from '../components/BigButton'
import { FlowCard } from '../components/FlowCard'
import { StatusPill } from '../components/StatusPill'
import { games } from '../data/mockData'

export function CognitiveGames() {
  const [selectedId, setSelectedId] = useState(games[0].id)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const selectedGame = games.find((game) => game.id === selectedId) ?? games[0]
  const isCorrect = selectedAnswer === selectedGame.answer

  function chooseGame(id) {
    setSelectedId(id)
    setSelectedAnswer('')
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[24rem_1fr]">
      <aside className="space-y-4">
        {games.map((game) => (
          <FlowCard
            key={game.id}
            title={game.title}
            detail="Actividad breve y sin prisa."
            status="Suave"
            selected={game.id === selectedId}
            onClick={() => chooseGame(game.id)}
          />
        ))}
      </aside>

      <section className="senior-card rounded-[2.5rem] p-7 md:p-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-black uppercase tracking-[0.18em] text-teal-800">Juego amable</p>
            <h2 className="text-5xl font-black tracking-tight text-slate-950">{selectedGame.title}</h2>
          </div>
          <StatusPill tone={selectedAnswer ? (isCorrect ? 'green' : 'amber') : 'teal'}>
            {selectedAnswer ? (isCorrect ? 'Muy bien' : 'Probamos otra vez') : 'Sin prisas'}
          </StatusPill>
        </div>

        <p className="mt-8 rounded-[2rem] bg-amber-50 p-7 text-4xl font-black leading-tight text-slate-950">
          {selectedGame.prompt}
        </p>

        <div className="mt-7 grid gap-4">
          {selectedGame.options.map((option) => (
            <BigButton
              key={option}
              variant={selectedAnswer === option ? 'warm' : 'secondary'}
              onClick={() => setSelectedAnswer(option)}
              className="justify-start text-left"
            >
              {option}
            </BigButton>
          ))}
        </div>

        <p className="mt-6 text-2xl leading-relaxed text-slate-700">
          {selectedAnswer
            ? isCorrect
              ? 'Aura Sr: Exacto. Lo has hecho muy bien. Seguimos cuando quieras.'
              : 'Aura Sr: No pasa nada. Lo importante es pasar un rato agradable.'
            : 'Aura Sr: Elige la respuesta que te suene. No hay contador ni penalizacion.'}
        </p>
      </section>
    </div>
  )
}
