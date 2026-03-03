"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Sparkles } from "lucide-react"

interface Message {
  id: number
  role: "assistant" | "user"
  content: string
}

const initialMessages: Message[] = [
  {
    id: 1,
    role: "assistant",
    content:
      "Welcome to Chronos. I'm your temporal concierge. How may I assist you with your journey through time?",
  },
]

const quickReplies = [
  "Tell me about Ancient Rome",
  "What safety measures exist?",
  "Pricing information",
]

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const getAIResponse = async (userMessage: string) => {
    setIsTyping(true)

    try {
      // Prepare messages for API (only user and assistant messages, exclude initial message)
      const conversationMessages = messages
        .slice(1) // Skip initial greeting
        .map(msg => ({
          role: msg.role,
          content: msg.content,
        }))

      // Add current user message
      conversationMessages.push({
        role: "user" as const,
        content: userMessage,
      })

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: conversationMessages }),
      })

      if (!response.ok) {
        throw new Error('Failed to get AI response')
      }

      const data = await response.json()

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          role: "assistant",
          content: data.response,
        },
      ])
    } catch (error) {
      console.error('AI Response Error:', error)
      // Fallback response if API fails
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          role: "assistant",
          content: "I apologize, but I'm experiencing technical difficulties. Please try asking your question again, or contact our support team for immediate assistance.",
        },
      ])
    } finally {
      setIsTyping(false)
    }
  }

  const handleSend = () => {
    if (!input.trim()) return
    const userMsg: Message = {
      id: Date.now(),
      role: "user",
      content: input.trim(),
    }
    setMessages((prev) => [...prev, userMsg])
    const messageContent = input.trim()
    setInput("")
    getAIResponse(messageContent)
  }

  const handleQuickReply = (reply: string) => {
    const userMsg: Message = {
      id: Date.now(),
      role: "user",
      content: reply,
    }
    setMessages((prev) => [...prev, userMsg])
    getAIResponse(reply)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[360px] overflow-hidden rounded-lg border border-gold/15 bg-obsidian shadow-2xl shadow-gold/5 sm:w-[400px]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gold/10 bg-charcoal px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-gold/30">
                <Sparkles className="h-3.5 w-3.5 text-gold" />
                <div className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-charcoal bg-emerald-500" />
              </div>
              <div>
                <p className="text-xs font-medium text-champagne">
                  Temporal Concierge
                </p>
                <p className="text-[10px] text-champagne/30">
                  AI-Powered Assistant
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="flex h-7 w-7 items-center justify-center rounded-full text-champagne/30 transition-colors duration-300 hover:bg-secondary hover:text-champagne"
              aria-label="Close chat"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex h-[340px] flex-col gap-4 overflow-y-auto p-5"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg px-4 py-3 text-[13px] leading-relaxed ${
                    msg.role === "user"
                      ? "bg-gold/15 text-champagne"
                      : "bg-secondary text-champagne/70"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1.5 rounded-lg bg-secondary px-4 py-3">
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold/50" style={{ animationDelay: "0ms" }} />
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold/50" style={{ animationDelay: "200ms" }} />
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold/50" style={{ animationDelay: "400ms" }} />
                </div>
              </div>
            )}

            {/* Quick Replies (show only at start) */}
            {messages.length === 1 && !isTyping && (
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleQuickReply(reply)}
                    className="rounded-full border border-gold/15 px-3 py-1.5 text-[11px] text-gold/70 transition-all duration-300 hover:border-gold/40 hover:text-gold"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-gold/10 bg-charcoal p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend()
              }}
              className="flex items-center gap-3"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about temporal travel..."
                className="flex-1 bg-transparent text-sm text-champagne placeholder:text-champagne/20 focus:outline-none"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-obsidian transition-all duration-300 hover:bg-gold-light disabled:opacity-30 disabled:hover:bg-gold"
                aria-label="Send message"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-500 shadow-lg ${
          isOpen
            ? "border-gold/30 bg-charcoal shadow-gold/5"
            : "border-gold/20 bg-obsidian shadow-gold/10 hover:border-gold/40 hover:shadow-gold/20"
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="h-5 w-5 text-gold" />
        ) : (
          <MessageCircle className="h-5 w-5 text-gold transition-transform duration-300 group-hover:scale-110" />
        )}
        {/* Pulse ring */}
        {!isOpen && (
          <span className="absolute inset-0 animate-ping rounded-full border border-gold/20" style={{ animationDuration: "3s" }} />
        )}
      </button>
    </div>
  )
}
