import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { UsersApp } from './UsersApp.jsx'
import { FakeApi } from './fakeApi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsersApp/>
    <FakeApi/>
  </StrictMode>,
)
