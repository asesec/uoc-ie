export function HomeCard({ flow, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(flow.id)}
      className="senior-card group flex min-h-64 flex-col justify-between rounded-[2rem] p-6 text-left transition duration-200 hover:-translate-y-1 hover:shadow-2xl"
    >
      <div>
        <div
          className={`mb-5 grid h-16 w-16 place-items-center rounded-3xl ${flow.tone} text-3xl font-black text-white shadow-lg`}
        >
          {flow.icon}
        </div>
        <h2 className="text-3xl font-black tracking-tight text-slate-950">{flow.title}</h2>
        <p className="mt-3 text-xl leading-relaxed text-slate-700">{flow.description}</p>
      </div>

      <span className="mt-8 inline-flex items-center text-xl font-black text-teal-800">
        {flow.action}
        <span className="ml-3 transition group-hover:translate-x-1" aria-hidden="true">
          →
        </span>
      </span>
    </button>
  )
}
