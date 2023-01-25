import { useState } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact() {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  // no devolver la actualización del estado -setFact-
  return { fact, refreshFact }
}
