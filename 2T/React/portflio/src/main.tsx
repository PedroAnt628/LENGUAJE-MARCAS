import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Componente proviene de la exportacion del App.tsx 
    todo el html que devuelve el <App></App> se sustituye
    en la etiqueta */}
    <App />
  </StrictMode>,
)
