export function VoiceButton({ onClick, label = 'Hablar' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="animate-aura-pulse grid h-40 w-40 place-items-center rounded-full bg-teal-700 text-white shadow-2xl shadow-teal-900/20 transition hover:bg-teal-800 sm:h-48 sm:w-48"
      aria-label="Hablar con Aura Sr"
    >
      <span className="flex flex-col items-center gap-2">
        <span className="text-5xl" aria-hidden="true">
          ●
        </span>
        <span className="text-2xl font-black">{label}</span>
      </span>
    </button>
  )
}
