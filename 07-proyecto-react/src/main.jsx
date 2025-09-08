import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { BotonEvent } from './BotonEvent'
import { BotonEventArg } from './BotonEventArg'
import { ContadorApp } from './ContadorApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BotonEvent/>
    <BotonEventArg/>
    <ContadorApp value={0}/>
  </StrictMode>,
)
