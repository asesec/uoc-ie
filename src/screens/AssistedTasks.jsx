import { useState } from 'react'
import { BigButton } from '../components/BigButton'
import { FlowCard } from '../components/FlowCard'
import { StepPanel } from '../components/StepPanel'
import { assistedTasks } from '../data/mockData'

export function AssistedTasks() {
  const [selectedId, setSelectedId] = useState(assistedTasks[0].id)
  const selectedTask = assistedTasks.find((task) => task.id === selectedId) ?? assistedTasks[0]

  return (
    <div className="grid gap-6 lg:grid-cols-[24rem_1fr]">
      <aside className="space-y-4">
        {assistedTasks.map((task) => (
          <FlowCard
            key={task.id}
            title={task.title}
            detail={task.detail}
            status={task.status}
            selected={task.id === selectedId}
            onClick={() => setSelectedId(task.id)}
          />
        ))}
      </aside>

      <div className="space-y-5">
        <StepPanel title={selectedTask.title} status={selectedTask.status} steps={selectedTask.steps} />

        <section className="senior-card rounded-[2rem] p-6">
          <h3 className="text-3xl font-black text-slate-950">Tu decides el siguiente paso</h3>
          <p className="mt-2 text-xl text-slate-700">
            Aura Sr no muestra formularios ni palabras dificiles. Solo confirma contigo antes de avanzar.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <BigButton>Si, continuar</BigButton>
            <BigButton variant="secondary">Mejor mas tarde</BigButton>
          </div>
        </section>
      </div>
    </div>
  )
}
