'use client'

import { useState } from 'react'

export default function TicketForm({ onSubmit }: { onSubmit: (input: string) => void }) {
  const [ticket, setTicket] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(ticket)
    setTicket('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        className="w-full p-2 border rounded-md"
        placeholder="Paste your ticket requirement here..."
        value={ticket}
        onChange={(e) => setTicket(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  )
}