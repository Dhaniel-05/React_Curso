import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import PrimerComponente from './PrimerComponente.jsx' // Importación por defecto antes se usaba así
import { PrimerComponente } from './PrimerComponente.jsx' // Importación nombrada como se usa ahora
import './stylesGlobal.css' // Importación de un fichero CSS

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <PrimerComponente/>
  </StrictMode>,
)
