import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import PrimerComponente from './PrimerComponente.jsx' // Importación por defecto antes se usaba así
import { PrimerComponente } from './PrimerComponente.jsx' // Importación nombrada como se usa ahora
import './stylesGlobal.css' // Importación de un fichero CSS
import { ComponenteProps } from './ComponenteProps.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <PrimerComponente titulo='Esta sección es de props' subtitulo='Curso de React' numero={4}/>
  <ComponenteProps tituloProps='Este es el componente de props' subtituloProps='Curso de React con Props' numeroProps={4}/>
  </StrictMode>,
)
