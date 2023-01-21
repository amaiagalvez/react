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
  // [] => se ejecuta solo una vez cuando se monta el componente
  // [dependencias] => se ejecuta cada vez que se monta el componente y cuando cambia la dependiendia
  // si no pongo nada, este efecto se ejecutara cada vez que se renderiza el componente

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#000',
        border: '1px solid #fff',
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

      <h3>Jarraitu Punteroa</h3>

      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} puntero
      </button>
    </main>
  )
}

export default App
