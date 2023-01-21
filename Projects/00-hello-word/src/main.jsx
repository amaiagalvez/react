import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Este es el punto de partida de la aplicación
// root es el id del div que está en el index.html, donde vamos a renderizar nuestra aplicación

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
)
