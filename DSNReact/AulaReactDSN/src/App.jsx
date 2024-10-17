import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [nome, setNome] = useState("")
  const [theme, setTheme] = useState(true)

  return (
    <>
      <button onClick={() => setTheme(theme ? false : true)}>Trocar o fundo </button>
      {theme ?
        <div className='white'>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        : <div className='black'>
          <h1 className='txt'>Nome</h1>
          <input type="text" onChange={(e) => setNome(e.target.value)} />
          <h1>{nome}</h1>
        </div>
      }
    </>
  )
}

export default App
