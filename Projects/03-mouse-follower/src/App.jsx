import { useState, useEffect } from 'react'

import './App.css'

function App () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const haddleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      // me subcribo al evento
      window.addEventListener('pointermove', haddleMove)
    }

    // cleanup
    return () => {
      // para quitar las subscripciones que no necesito
      // se ejecuta cada vez que cambia la dependiencia
      window.removeEventListener('pointermove', haddleMove)
    }
  }, [enabled])
  // si no pongo esta ultima condición, este efecto se ejecutara cada vez que se renderiza la página

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />

      <h3>Jaraitu</h3>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} puntero
      </button>
    </main>
  )
}

export default App
