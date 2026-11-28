import { GoogleGenAI, ThinkingLevel } from '@google/genai'

const MODEL_NAME = 'gemini-4-hydrogen'

const SYSTEM_INSTRUCTION = `You are the JS Photo Artist Studio Concierge for a photography studio in Thiruninravur, Tamil Nadu. Help visitors with photography, videography, albums, printing, package comparisons, and shoot planning. Never invent availability or prices. Direct visitors to confirm bookings and final quotations via WhatsApp +91 98401 57425 or the website contact form. Be concise, friendly, and clear.`

type ChatMessage = { role: 'user' | 'model'; text: string }

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed. Use POST.' })
  }

  const body = req.body as { messages?: unknown } | undefined
  if (!body || !Array.isArray(body.messages) || body.messages.length === 0) {
    return res.status(400).json({ error: 'Please provide a non-empty messages array.' })
  }

  const messages: ChatMessage[] = body.messages.slice(-20).filter((item): item is ChatMessage =>
    !!item &&
    typeof item === 'object' &&
    'role' in item &&
    'text' in item &&
    ((item as ChatMessage).role === 'user' || (item as ChatMessage).role === 'model') &&
    typeof (item as ChatMessage).text === 'string' &&
    (item as ChatMessage).text.trim().length > 0
  ).map((item) => ({ role: item.role, text: item.text.trim().slice(0, 4000) }))

  const last = messages[messages.length - 1]
  if (!last || last.role !== 'user') {
    return res.status(400).json({ error: 'The latest message must be from the user.' })
  }

  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    return res.status(503).json({ error: 'Studio AI is not configured yet. Please contact us on WhatsApp: +91 98401 57425.' })
  }

  const prior = messages.slice(0, -1)
  const firstUser = prior.findIndex((message) => message.role === 'user')
  const history = (firstUser < 0 ? [] : prior.slice(firstUser)).map((message) => ({
    role: message.role,
    parts: [{ text: message.text }],
  }))

  try {
    const ai = new GoogleGenAI({ apiKey })
    const chat = ai.chats.create({
      model: MODEL_NAME,
      history,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
      },
    })

    const stream = await chat.sendMessageStream({ message: last.text })
    res.setHeader('Content-Type', 'text/event-stream; charset=utf-8')
    res.setHeader('Cache-Control', 'no-cache, no-transform')
    res.setHeader('Connection', 'keep-alive')
    res.setHeader('X-Accel-Buffering', 'no')
    res.status(200)

    for await (const chunk of stream) {
      const text = chunk.text
      if (text) res.write(`data: ${JSON.stringify({ text })}\\n\\n`)
    }
    res.write(`data: ${JSON.stringify({ done: true })}\\n\\n`)
    return res.end()
  } catch (error: unknown) {
    const err = error as { status?: number; message?: string }
    const status = Number(err?.status) || 500
    const message = status === 429
      ? 'Studio AI is busy right now. Please wait a moment and try again, or message us on WhatsApp.'
      : 'Studio AI could not connect. Please try again or contact us on WhatsApp: +91 98401 57425.'
    if (res.headersSent) {
      res.write(`data: ${JSON.stringify({ error: message })}\\n\\n`)
      return res.end()
    }
    return res.status(status >= 400 && status < 600 ? status : 500).json({ error: message })
  }
}
