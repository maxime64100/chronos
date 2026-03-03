import { NextRequest, NextResponse } from 'next/server'
import Groq from 'groq-sdk'

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
})

const SYSTEM_PROMPT = `You are Chronos, the AI concierge for a luxury time travel agency called "Chronos".

Your role is to assist clients with information about our three exclusive temporal destinations:

1. **Ancient Rome (27 BC)**
   - Duration: 7 Days
   - Price: From 2.4M temporal credits
   - Highlights: Walk the Forum, witness gladiatorial spectacles, dine with emperors
   - Location: Roman Empire

2. **Cyberpunk Tokyo (2099)**
   - Duration: 5 Days
   - Price: From 3.1M temporal credits
   - Highlights: Holographic skylines, synthetic consciousness, Neo-Shibuya night markets
   - Location: Neo-Japan

3. **Renaissance Paris (1503)**
   - Duration: 6 Days
   - Price: From 1.8M temporal credits
   - Highlights: Commission portraits from masters, royal courts, candlelit ateliers
   - Location: Kingdom of France

**Your personality:**
- Professional yet warm
- Passionate about history and time travel
- Enthusiastic but not overly familiar
- Expert in temporal travel (fictional but credible)

**You can help with:**
- Detailed information about each destination
- Pricing and package details
- Safety measures (Temporal Integrity Shield, paradox-prevention protocols, 100% safety record since 2847)
- Recommendations based on client interests
- Travel preparation and what to expect

**Important:**
- Always maintain the fictional luxury time travel agency setting
- Be helpful and informative
- Suggest our personalized quiz if clients are unsure which destination to choose
- Keep responses concise but informative (2-3 sentences max unless asked for details)
`

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: 'Groq API key not configured' },
        { status: 500 }
      )
    }

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: SYSTEM_PROMPT,
        },
        ...messages,
      ],
      model: 'llama-3.3-70b-versatile', // Fast and capable model
      temperature: 0.7,
      max_tokens: 500,
    })

    const response = chatCompletion.choices[0]?.message?.content ||
      "I apologize, but I'm having trouble processing your request. Please try again."

    return NextResponse.json({ response })
  } catch (error: unknown) {
    console.error('Groq API Error:', error)
    return NextResponse.json(
      {
        error: 'Failed to get response from AI',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
