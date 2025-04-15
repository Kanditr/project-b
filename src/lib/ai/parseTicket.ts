export async function parseTicket(ticketText: string): Promise<{ summary: string }> {
    // Mock AI call
    return {
      summary: `Parsed summary for: ${ticketText.slice(0, 50)}...`,
    }
  }