'use client'

import { useTickets } from '@/hooks/useTickets'
import TicketForm from '@/components/TicketForm'
import CodeOutput from '@/components/CodeOutput'

export default function HomePage() {
  const { input, setInput, output, loading, handleGenerate } = useTickets()

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 gap-8">
      <h1 className="text-3xl font-bold">AI Code Assistant</h1>
      <p className="text-center max-w-xl text-gray-600">
        Paste a ticket or requirement description below. We'll generate code for you.
      </p>
      <div className="w-full max-w-2xl">
        <TicketForm onSubmit={() => handleGenerate()} />
      </div>
      {loading ? (
        <p className="text-sm text-gray-400">Generating code...</p>
      ) : output ? (
        <CodeOutput code={output} />
      ) : null}
    </main>
  )
}
