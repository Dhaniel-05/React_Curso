import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { FakeApi } from './fakeApi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FakeApi/>
  </StrictMode>,
)
