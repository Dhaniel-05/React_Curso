import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Curso Básico de React: Creación de un proyecto</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Contador en {count}
        </button>
        <p>
          Edita <code>src/App.jsx</code> y guarda para probar en HMR
        </p>
      </div>
      <p className="read-the-docs">
        Puedes dar Click en el logo de Vite o el logo de React para más información
      </p>
    </>
  )
}

export default App
