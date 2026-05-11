import { BrandMark } from './BrandMark'

export function ChatBubble({ message, align = message.from === 'user' ? 'right' : 'left' }) {
  const isUser = align === 'right'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[88%] rounded-[2rem] px-6 py-5 text-xl leading-relaxed shadow-sm md:max-w-[72%] md:text-2xl ${
          isUser
            ? 'rounded-br-md bg-teal-700 text-white'
            : 'rounded-bl-md bg-white text-slate-900 ring-1 ring-slate-200'
        }`}
      >
        {!isUser ? (
          <div className="mb-3">
            <BrandMark variant="eyebrow" />
          </div>
        ) : null}
        <p>{message.text}</p>
        {message.time ? (
          <p className={`mt-3 text-base font-semibold ${isUser ? 'text-teal-50' : 'text-slate-500'}`}>
            {message.time}
          </p>
        ) : null}
      </div>
    </div>
  )
}
