import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent, type ReactNode } from 'react'
import { ArrowUpRight, MessageCircle, RotateCcw, Send, Sparkles, X } from 'lucide-react'
import { site, waLink } from '../data/site'

type Message = {
  id: string
  role: 'user' | 'model'
  text: string
}

const WELCOME_MESSAGE: Message = {
  id: 'welcome',
  role: 'model',
  text: "Welcome to JS Photo Artist. I'm your studio concierge — ask me about wedding, newborn, or event packages, pricing comparisons, album printing, or planning tips for your celebration.",
}

const STARTER_PROMPTS = [
  'Compare Hindu wedding packages',
  'Newborn shoot pricing & details',
  'Candid & drone add-on rates',
  'Studio hours & location',
]

function renderInlineBold(line: string, keyPrefix: string): ReactNode[] {
  const parts = line.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return (
        <strong key={`${keyPrefix}-${idx}`} className="font-semibold text-ink">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return <span key={`${keyPrefix}-${idx}`}>{part}</span>
  })
}

function FormattedText({ text }: { text: string }) {
  const lines = text.split('\n')
  const blocks: ReactNode[] = []
  let listItems: string[] = []

  const flushList = (keyBase: string) => {
    if (listItems.length === 0) return
    blocks.push(
      <ul key={`list-${keyBase}`} className="my-1.5 space-y-1 pl-4">
        {listItems.map((item, idx) => (
          <li key={idx} className="relative pl-2 text-[0.84rem] leading-relaxed before:absolute before:-left-2.5 before:top-[0.55em] before:size-1.5 before:rounded-full before:bg-brand/60">
            {renderInlineBold(item, `${keyBase}-li-${idx}`)}
          </li>
        ))}
      </ul>,
    )
    listItems = []
  }

  lines.forEach((rawLine, index) => {
    const trimmed = rawLine.trim()
    const bulletMatch = trimmed.match(/^(?:[-*•])\s+(.*)$/)
    if (bulletMatch) {
      listItems.push(bulletMatch[1])
      return
    }
    flushList(String(index))
    if (!trimmed) {
      blocks.push(<div key={`gap-${index}`} className="h-1.5" />)
      return
    }
    blocks.push(
      <p key={`p-${index}`} className="text-[0.84rem] leading-relaxed">
        {renderInlineBold(trimmed, `p-${index}`)}
      </p>,
    )
  })
  flushList('end')

  return <div className="space-y-1">{blocks}</div>
}

export default function StudioChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE])
  const [input, setInput] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const abortRef = useRef<AbortController | null>(null)

  useEffect(() => {
    if (!open) return
    const timer = window.setTimeout(() => inputRef.current?.focus(), 120)
    const onKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  useEffect(() => {
    if (!scrollRef.current) return
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [messages, isStreaming, open])

  useEffect(() => {
    return () => abortRef.current?.abort()
  }, [])

  const sendConversation = async (historyToSend: Message[]) => {
    abortRef.current?.abort()
    const controller = new AbortController()
    abortRef.current = controller

    const assistantId = `model-${Date.now()}`
    setIsStreaming(true)
    setError(null)
    setMessages([...historyToSend, { id: assistantId, role: 'model', text: '' }])

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          messages: historyToSend.map((m) => ({ role: m.role, text: m.text })),
        }),
      })

      const contentType = response.headers.get('content-type') || ''
      if (!response.ok || !contentType.includes('text/event-stream')) {
        const errBody = await response.json().catch(() => null)
        throw new Error(errBody?.error || 'Unable to connect to the studio assistant right now.')
      }

      const reader = response.body?.getReader()
      if (!reader) throw new Error('Response stream unavailable.')

      const decoder = new TextDecoder()
      let buffer = ''
      let accumulated = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        const events = buffer.split('\n\n')
        buffer = events.pop() ?? ''

        for (const event of events) {
          const lines = event.split('\n')
          for (const line of lines) {
            if (!line.startsWith('data: ')) continue
            const payloadStr = line.slice(6).trim()
            if (!payloadStr) continue
            const payload = JSON.parse(payloadStr) as { text?: string; error?: string; done?: boolean }
            if (payload.error) {
              throw new Error(payload.error)
            }
            if (payload.text) {
              accumulated += payload.text
              setMessages((prev) =>
                prev.map((m) => (m.id === assistantId ? { ...m, text: accumulated } : m)),
              )
            }
          }
        }
      }

      if (!accumulated.trim()) {
        throw new Error('No response was received. Please try sending your question again.')
      }
    } catch (err: unknown) {
      if (err instanceof DOMException && err.name === 'AbortError') return
      const msg = err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      setError(msg)
      setMessages((prev) => prev.filter((m) => !(m.id === assistantId && !m.text.trim())))
    } finally {
      setIsStreaming(false)
    }
  }

  const handleSend = (textOverride?: string) => {
    const trimmed = (textOverride ?? input).trim()
    if (!trimmed || isStreaming) return

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: trimmed,
    }
    const nextHistory = [...messages, userMsg]
    if (!textOverride) setInput('')
    void sendConversation(nextHistory)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    handleSend()
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleReset = () => {
    abortRef.current?.abort()
    setIsStreaming(false)
    setError(null)
    setMessages([WELCOME_MESSAGE])
    setInput('')
    inputRef.current?.focus()
  }

  const handleRetry = () => {
    if (isStreaming) return
    const lastUserIdx = [...messages].reverse().findIndex((m) => m.role === 'user')
    if (lastUserIdx === -1) return
    const cutoff = messages.length - lastUserIdx
    void sendConversation(messages.slice(0, cutoff))
  }

  const showStarters = messages.length <= 1 && !isStreaming

  return (
    <>
      {/* Floating launcher on bottom-left (clear of bottom-right WhatsApp quick actions) */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="studio-ai-panel"
        aria-label={open ? 'Close Studio AI Concierge' : 'Open Studio AI Concierge'}
        className="fixed bottom-[calc(18px+env(safe-area-inset-bottom))] left-4 z-50 inline-flex h-12 items-center gap-2.5 rounded-full border border-white/80 bg-gradient-to-br from-plum via-brand to-[#8b2db2] px-4 text-white shadow-[0_10px_28px_rgba(57,6,79,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(57,6,79,0.38)] active:scale-[0.98] sm:left-6 sm:px-5"
      >
        {open ? <X size={18} strokeWidth={2} aria-hidden="true" /> : <Sparkles size={18} strokeWidth={2} aria-hidden="true" />}
        <span className="text-[0.72rem] font-semibold uppercase tracking-[0.14em]">
          {open ? 'Close' : 'Studio AI'}
        </span>
      </button>

      {/* Multi-turn Chat Drawer */}
      {open && (
        <section
          id="studio-ai-panel"
          role="dialog"
          aria-modal="false"
          aria-label="JS Photo Artist AI Studio Concierge"
          className="fixed bottom-[calc(78px+env(safe-area-inset-bottom))] left-3 right-3 z-50 flex h-[min(540px,calc(100dvh-110px))] flex-col overflow-hidden rounded-2xl border border-lavender bg-paper shadow-[0_24px_64px_rgba(33,21,42,0.26)] sm:left-6 sm:right-auto sm:w-[395px]"
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-3 bg-gradient-to-r from-[#2b0738] via-plum to-brand px-4 py-3.5 text-white">
            <div className="flex min-w-0 items-center gap-3">
              <div className="grid size-9 shrink-0 place-items-center rounded-full border border-white/25 bg-white/10">
                <Sparkles size={16} aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <h2 className="truncate font-display text-xl font-medium leading-tight tracking-tight">
                  Studio Concierge
                </h2>
                <p className="truncate text-[0.65rem] font-medium uppercase tracking-[0.16em] text-white/75">
                  Packages · Guidance · Availability
                </p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-1">
              <button
                type="button"
                onClick={handleReset}
                title="Start new conversation"
                aria-label="Start new conversation"
                className="grid size-8 place-items-center rounded-full text-white/80 transition hover:bg-white/15 hover:text-white"
              >
                <RotateCcw size={15} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                title="Close chat"
                aria-label="Close chat"
                className="grid size-8 place-items-center rounded-full text-white/80 transition hover:bg-white/15 hover:text-white"
              >
                <X size={17} aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Scrollable Thread */}
          <div
            ref={scrollRef}
            aria-live="polite"
            className="flex-1 space-y-3.5 overflow-y-auto px-4 py-4"
          >
            {messages.map((msg) => {
              const isUser = msg.role === 'user'
              const isPendingEmpty = !isUser && !msg.text && isStreaming
              return (
                <div key={msg.id} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={
                      isUser
                        ? 'max-w-[85%] rounded-2xl rounded-br-sm bg-plum px-3.5 py-2.5 text-[0.84rem] leading-relaxed text-white shadow-sm'
                        : 'max-w-[90%] rounded-2xl rounded-bl-sm border border-lavender bg-white px-3.5 py-2.5 text-ink shadow-[0_4px_16px_rgba(57,6,79,0.04)]'
                    }
                  >
                    {isPendingEmpty ? (
                      <div className="flex items-center gap-1.5 py-1 text-brand" aria-label="Thinking">
                        <span className="size-1.5 animate-bounce rounded-full bg-brand [animation-delay:-0.3s]" />
                        <span className="size-1.5 animate-bounce rounded-full bg-brand [animation-delay:-0.15s]" />
                        <span className="size-1.5 animate-bounce rounded-full bg-brand" />
                      </div>
                    ) : isUser ? (
                      <p className="whitespace-pre-wrap">{msg.text}</p>
                    ) : (
                      <FormattedText text={msg.text} />
                    )}
                  </div>
                </div>
              )
            })}

            {showStarters && (
              <div className="pt-1">
                <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted">
                  Popular questions
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {STARTER_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => handleSend(prompt)}
                      className="rounded-xl border border-lavender bg-white px-3 py-1.5 text-left text-[0.76rem] font-medium text-plum transition hover:border-brand/40 hover:bg-[#f6effa]"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {error && (
              <div
                role="alert"
                className="rounded-xl border border-red-200 bg-red-50 px-3.5 py-2.5 text-xs leading-relaxed text-red-900"
              >
                <p>{error}</p>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={handleRetry}
                    className="font-semibold text-brand underline underline-offset-2 hover:text-plum"
                  >
                    Try again
                  </button>
                  <a
                    href={waLink(site.defaultWa)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-emerald-800 underline underline-offset-2"
                  >
                    WhatsApp us <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Quick studio actions strip */}
          <div className="flex items-center justify-between gap-2 border-t border-lavender/80 bg-[#f6effa]/70 px-4 py-2 text-[0.7rem]">
            <a
              href="/pricing"
              className="inline-flex items-center gap-1 font-semibold text-plum transition hover:text-brand"
            >
              View all packages <ArrowUpRight size={12} aria-hidden="true" />
            </a>
            <a
              href={waLink(site.defaultWa)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-[#168b52] transition hover:opacity-80"
            >
              <MessageCircle size={12} aria-hidden="true" /> Book on WhatsApp
            </a>
          </div>

          {/* Input composer */}
          <form
            onSubmit={handleSubmit}
            className="flex items-end gap-2 border-t border-lavender bg-white px-3 py-2.5"
          >
            <label htmlFor="studio-chat-input" className="sr-only">
              Ask about photography packages, shoots, or pricing
            </label>
            <textarea
              ref={inputRef}
              id="studio-chat-input"
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about packages, shoots, or pricing..."
              disabled={isStreaming}
              className="max-h-24 min-h-[40px] flex-1 resize-none border-0 bg-transparent px-1.5 py-2 text-[0.85rem] text-ink placeholder:text-ink/40 focus:outline-none focus:ring-0 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={!input.trim() || isStreaming}
              aria-label="Send message"
              className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand text-white transition hover:bg-plum disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Send size={16} aria-hidden="true" />
            </button>
          </form>
        </section>
      )}
    </>
  )
}
