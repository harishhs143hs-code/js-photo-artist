import express from 'express'
import type { Request, Response } from 'express'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { GoogleGenAI, ThinkingLevel } from '@google/genai'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PORT = Number(process.env.PORT) || 3000
const HOST = '0.0.0.0'
const MODEL_NAME = 'gemini-4-hydrogen'

const STUDIO_SYSTEM_INSTRUCTION = `You are the JS Photo Artist Studio Concierge — a warm, attentive, and knowledgeable photography & event planning assistant for JS Photo Artist in Thiruninravur, Tiruvallur District, Chennai, Tamil Nadu.

Your role:
- Help visitors explore photography, videography, album design, and printing services.
- Recommend and compare suitable packages based on their event type, guest/coverage needs, and budget.
- Share helpful shoot preparation tips (timings, outfits, newborn safety for <45-day sessions, outdoor concepts).
- Guide visitors to confirm date availability and final quotations via WhatsApp (+91 98401 57425) or the Contact form on the website.

Studio details:
- Name: JS Photo Artist (Tagline: PHOTO | VIDEO | ALBUM | PRINTING)
- Address: No. 212, EB Colony, Lakshmipuram, Thiruninravur, Tiruvallur District (Avadi constituency), Chennai – 602024, Tamil Nadu, India.
- Phone / WhatsApp: +91 98401 57425
- Email: jsphotoartist25@gmail.com
- Instagram: @jsphotoartist25
- Hours: Monday–Saturday 9:00 AM – 9:00 PM; Sunday 11:00 AM – 9:00 PM
- Reputation: 5.0 Google rating with 100+ reviews.

Core services:
1. Wedding Photography & Videography: Traditional wedding photography, candid wedding photography, wedding videography, reception coverage, wedding highlights.
2. Couple & Pre-Wedding Portraits: Couple photography, outdoor couple sessions, pre-wedding concepts, post-wedding portraits.
3. Events & Family Celebrations: Puberty ceremonies, birthdays, baby showers, naming ceremonies, ear boring, baptism, Sunnath, betrothal, temple weddings, housewarmings, family functions.
4. Baby & Kids Photography: Studio newborn sessions (below 45 days), outdoor baby photoshoots, kids photography, creative & family portraits.
5. Albums, Prints & Photo Gifts: Wedding & reception albums, album designing, customized photo frames, customized photo gifts, photo printing.

Packages & Pricing (all in INR ₹):
- General Photography (baby shower, birthday, baptism, naming, ear boring, Sunnath, puberty, betrothal, reception, temple wedding, housewarming):
  • Basic Photography: ₹8,000 (100 photos, Full Glossy Album)
  • Premium Photography: ₹15,000 (150 photos, Full Glossy Album)
  • Basic Photo & Video: ₹20,000 (1 still photographer, 1 videographer, 100-photo album, edited video in pen drive, 1 photo frame)
  • Premium Photo & Video: ₹25,000 (1 still, 1 videographer, 150-photo premium album, edited video in pen drive, 1 highlight video, 1 photo frame)
  • Elite Photo & Video: ₹35,000 (1 still, 1 videographer, up to 300-photo premium album, edited video in pen drive, 1 highlight video, 1 photo frame)
  Note: Extra charges apply for additional photos; coverage limits vary by event.

- Hindu Wedding & Reception:
  • Basic Photography: ₹15,000 (200 photos + album)
  • Premium Photography: ₹25,000 (300 photos + album)
  • Basic Photo & Video: ₹35,000 (1 still, 1 HD videographer, 250-photo album, edited video, 1 photo frame)
  • Premium Photo & Video: ₹45,000 (1 still, 1 4K videographer, 350-photo premium album, edited video, highlight video, 1 photo frame)
  • Elite Photo & Video: ₹60,000 (1 still, 1 4K videographer, 2 premium albums up to 300 photos each, edited video, highlight video, 1 photo frame)

- Christian Wedding & Reception:
  • Basic Photography: ₹15,000 (200 photos)
  • Premium Photography: ₹25,000 (300 photos)
  • Basic Photo & Video: ₹32,000
  • Premium Photo & Video: ₹42,000
  • Elite Photo & Video: ₹57,000

- Muslim Nikka & Reception:
  • Basic Photography: ₹15,000 (200 photos)
  • Premium Photography: ₹25,000 (300 photos)
  • Basic Photo & Video: ₹35,000
  • Premium Photo & Video: ₹45,000
  • Elite Photo & Video: ₹60,000

- Newborn Baby Photography (for babies below 45 days):
  • Basic: ₹7,500 (1 hr studio space, 2 themes, 20-page mini album, 12×8" photo frame)
  • Premium: ₹12,000 (2 hrs studio space, 4–5 themes, 30-page 15×30" large album, 12×18" photo frame)
  • Elite: ₹25,000 (3 hrs studio space, unlimited themes, 50-page 12×36" exclusive album, 16×24" photo frame)

- Add-on Services:
  • Event Photography (up to 4 hrs): ₹3,500 (Basic) / ₹5,000 (Premium)
  • Event Videography (up to 4 hrs): ₹6,000 (Basic) / ₹10,000 (Premium)
  • Video Editing (per hour): ₹3,000 (Basic) / ₹5,000 (Advanced)
  • Album Designing (per sheet): ₹150 (Basic) / ₹250 (Premium)
  • Drone Photography (per section): ₹5,000 (Basic) / ₹7,500 (Advanced)
  • Candid Photography (per section): ₹5,000 (Basic) / ₹10,000 (Advanced)
  • Candid Video (per section): ₹7,500 (Basic) / ₹15,000 (Advanced)
  • Outdoor Photoshoot: ₹5,000 (Basic) / ₹10,000 (Advanced)
  • Outdoor Video Shoot: ₹10,000 (Basic) / ₹20,000 (Advanced)

- Album Printing (per sheet):
  • Synthetic Tearable: ₹100 / sheet
  • Synthetic Non-Tearable: ₹150 / sheet
  • 7 Colour NT: ₹300 / sheet

- Special Event & Entertainment Add-ons:
  • 360° Spinner Video: ₹7,500 (with software) / ₹5,500 (without software)
  • Instant Mirror Photo Booth: ₹15,000 (unlimited photos)
  • Instant Photo Sharing with QR Code: ₹5,000 (per section)
  • TV Display: ₹5,000 (per section)
  • LED Wall: 6×8 ₹10,000 | 8×10 ₹15,000 | 12×10 ₹20,000
  • Hair Tonsure Ceremony Photography: ₹5,000

Guidelines:
- Keep responses concise, friendly, and easy to scan (use short paragraphs and bullet points with bold package names/prices when helpful).
- Never invent prices, discounts, or date availability. Always remind customers to confirm event date availability and final quotation via WhatsApp (+91 98401 57425) or the Contact section.
- If a user asks an off-topic question unrelated to photography, videography, events, albums, or the studio, politely steer the conversation back to how JS Photo Artist can help with their celebration or photography needs.`

type ChatInputMessage = {
  role: 'user' | 'model'
  text: string
}

function getGeminiClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    throw new Error('MISSING_API_KEY')
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  })
}

async function withRetry<T>(fn: () => Promise<T>, maxRetries = 2): Promise<T> {
  let lastErr: unknown
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn()
    } catch (err: unknown) {
      lastErr = err
      const status = typeof err === 'object' && err !== null && 'status' in err ? Number((err as { status?: unknown }).status) : 0
      const retryable = status === 429 || status === 503 || status === 500
      if (!retryable || attempt === maxRetries) break
      await new Promise((resolve) => setTimeout(resolve, 400 * Math.pow(2, attempt)))
    }
  }
  throw lastErr
}

function parseApiError(err: unknown): { status: number; message: string } {
  if (err instanceof Error && err.message === 'MISSING_API_KEY') {
    return {
      status: 503,
      message: 'The AI concierge is unavailable right now because the Gemini API key is not configured. Please check Settings > Secrets or contact us directly on WhatsApp (+91 98401 57425).',
    }
  }
  const status = typeof err === 'object' && err !== null && 'status' in err ? Number((err as { status?: unknown }).status) : 500
  const rawMessage = err instanceof Error ? err.message : 'Unexpected error communicating with Gemini.'

  if (status === 400 || rawMessage.includes('API_KEY_INVALID')) {
    return { status: 400, message: 'Invalid API key configuration. Please check your Gemini API key in Settings > Secrets.' }
  }
  if (status === 403 || rawMessage.includes('PERMISSION_DENIED')) {
    return { status: 403, message: 'Gemini API permission denied. Please verify your API key in Settings > Secrets.' }
  }
  if (status === 429 || rawMessage.includes('RESOURCE_EXHAUSTED')) {
    return { status: 429, message: 'The AI concierge is receiving high traffic right now. Please wait a moment and try again, or message us on WhatsApp.' }
  }
  return { status: status >= 400 && status < 600 ? status : 500, message: 'Unable to reach the AI concierge right now. Please try again or enquire via WhatsApp.' }
}

async function startServer() {
  const app = express()
  app.use(express.json({ limit: '1mb' }))

  app.post('/api/chat', async (req: Request, res: Response) => {
    const body = req.body as { messages?: unknown }
    if (!body || !Array.isArray(body.messages) || body.messages.length === 0) {
      res.status(400).json({ error: 'Please provide a non-empty messages array.' })
      return
    }

    const sanitized: ChatInputMessage[] = []
    for (const item of body.messages.slice(-20)) {
      if (
        typeof item === 'object' &&
        item !== null &&
        'role' in item &&
        'text' in item &&
        (item.role === 'user' || item.role === 'model') &&
        typeof item.text === 'string' &&
        item.text.trim().length > 0
      ) {
        sanitized.push({ role: item.role, text: item.text.trim().slice(0, 4000) })
      }
    }

    const lastMsg = sanitized[sanitized.length - 1]
    if (!lastMsg || lastMsg.role !== 'user') {
      res.status(400).json({ error: 'The latest message must be from the user.' })
      return
    }

    // Gemini chat history must start with a user turn.
    const prior = sanitized.slice(0, -1)
    const firstUserIdx = prior.findIndex((m) => m.role === 'user')
    const validPrior = firstUserIdx === -1 ? [] : prior.slice(firstUserIdx)
    const history = validPrior.map((m) => ({
      role: m.role,
      parts: [{ text: m.text }],
    }))

    try {
      const ai = getGeminiClient()
      const chat = ai.chats.create({
        model: MODEL_NAME,
        history,
        config: {
          systemInstruction: STUDIO_SYSTEM_INSTRUCTION,
          thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
        },
      })

      const stream = await withRetry(() => chat.sendMessageStream({ message: lastMsg.text }))

      res.setHeader('Content-Type', 'text/event-stream; charset=utf-8')
      res.setHeader('Cache-Control', 'no-cache, no-transform')
      res.setHeader('Connection', 'keep-alive')
      res.flushHeaders()

      for await (const chunk of stream) {
        const text = chunk.text
        if (text) {
          res.write(`data: ${JSON.stringify({ text })}\n\n`)
        }
      }

      res.write(`data: ${JSON.stringify({ done: true })}\n\n`)
      res.end()
    } catch (err: unknown) {
      const { status, message } = parseApiError(err)
      if (!res.headersSent) {
        res.status(status).json({ error: message })
      } else {
        res.write(`data: ${JSON.stringify({ error: message })}\n\n`)
        res.end()
      }
    }
  })

  const distDir = path.resolve(__dirname, 'dist')
  const isProduction = process.env.NODE_ENV === 'production'

  if (!isProduction) {
    try {
      const { createServer: createViteServer } = await import('vite')
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'spa',
      })
      app.use(vite.middlewares)
    } catch {
      if (fs.existsSync(distDir)) {
        app.use(express.static(distDir))
        app.use((_req: Request, res: Response) => {
          res.sendFile(path.join(distDir, 'index.html'))
        })
      }
    }
  } else {
    app.use(express.static(distDir))
    app.use((_req: Request, res: Response) => {
      res.sendFile(path.join(distDir, 'index.html'))
    })
  }

  app.listen(PORT, HOST, () => {
    console.log(`JS Photo Artist server running at http://${HOST}:${PORT}`)
  })
}

startServer()
