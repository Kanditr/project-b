import { useState } from 'react'
import { parseTicket } from '@/lib/ai/parseTicket'
import { generateCode } from '@/services/codeGenerator'

export function useTickets() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)

  const handleGenerate = async () => {
    setLoading(true)
    try {
      const parsed = await parseTicket(input)
      const code = await generateCode(parsed.summary)
      setOutput(code)
    } catch (err) {
      console.error('Error generating code:', err)
      setOutput('// Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return {
    input,
    setInput,
    output,
    loading,
    handleGenerate,
  }
}