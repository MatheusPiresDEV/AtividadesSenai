import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Img from './assets/freepik__candid-image-photography-natural-textures-highly-r__85082.jpeg'
import Heart from './assets/heart_12533153.png'

function App() {
  const [count, setCount] = useState(0)
  const [cond, setCond] = useState(true)
  const [senai, setSenai] = useState("")
  const [like, setLike] = useState(0)
  if (senai == "SENAI" || senai == "senai" || senai == "Senai") {
    var teste = 'Apareci'
  }
  return (
    <>
      <div className='botaoConta'>
        <h1>Adicionar {count}</h1>
        <button onClick={() => setCount((count) => count + 10)}>
          <h1>Adicionar 10</h1>
        </button>
        <h1>Subtrair {count}</h1>
        <button onClick={() => setCount((count) => count - 10)}>
          <h1>Subtrair</h1>

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
      <div className='copiaInsta'>
        <img src={Img} alt="" width={400} height={400} />
     {/* <img src={Heart} alt="" width={100} height={100}/> */}
        <button onClick={() => setLike((like) => like + 1)} > <img src={Heart} alt="" width={100} height={100}/> </button>
        <h1>Curtidas {like} </h1>
      </div>

    </>
  )
}

export default App
