import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [cond, setCond] = useState(true)
  const [senai, setSenai] = useState("")
    if(senai == "SENAI" || senai == "senai" || senai == "Senai") {
         var teste='Apareci'
    }
  return (
    <>
      <div className='botaoConta'>
        <button onClick={() => setCount((count) => count + 10)}>
          <h1>Adicionar 10</h1>
          {count}
        </button>
        <button onClick={() => setCount((count) => count - 10)}>
          <h1>Subtrair</h1>
          {count}
        </button>
      </div>
      <div className='balaco'>
        <button onClick={() => setCond(cond ? false : true)}>Ocoltar o balacobaco </button>
        {cond ?
          <div className='com'>
            <h1>Balacobaco</h1>
          </div>
          : <div className='sem'>
          </div>
          //Não foi do melhor jeito possivel, atualizar depois
        }
      </div>

      <div className='sumir'>
      <input type="text" onChange={(e) => setSenai(e.target.value)} />
      <h1>{senai}{teste}</h1>
      </div>

    </>
  )
}

export default App
