import { StatusPill } from './StatusPill'

export function FlowCard({ title, detail, status, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-[2rem] p-5 text-left transition duration-200 ${
        selected
          ? 'bg-teal-700 text-white shadow-xl shadow-teal-900/20'
          : 'senior-card text-slate-900 hover:-translate-y-0.5'
      }`}
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-2xl font-black">{title}</h3>
          <p className={`mt-2 text-lg ${selected ? 'text-teal-50' : 'text-slate-700'}`}>{detail}</p>
        </div>
        <StatusPill tone={selected ? 'green' : 'teal'}>{status}</StatusPill>
      </div>
    </button>
  )
}
