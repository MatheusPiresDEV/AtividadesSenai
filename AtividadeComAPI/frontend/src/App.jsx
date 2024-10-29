import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [marca, setMarca] = useState("")
  const [modelo, setModelo] = useState("")
  const [ano, setAno] = useState(0)
  const [proprietario, setProprietario] = useState("")
  const [cor, setCor] = useState("")

  useEffect(() => {
    console.log(marca, modelo, ano, cor, proprietario)
  }, [marca, modelo, ano, cor, proprietario])

  async function registrar() {
    await axios.post("http://localhost:3000/inserir", {
      marca,
      modelo,
      ano,
      cor,
      proprietario
    })
  }

  return (
    <>
      <div className='formulario'>
        <form onSubmit={registrar}>
          <label htmlFor="marca">Marca</label>
          <input type="text" id='marca' onChange={(e) => { setMarca(e.target.value) }} />
          <label htmlFor="modelo">Modelo</label>
          <input type="text" id='modelo' onChange={(e) => { setModelo(e.target.value) }} />
          <label htmlFor="ano">Ano</label>
          <input type="number" id='ano' onChange={(e) => { setAno(Number(e.target.value)) }} />
          <label htmlFor="proprietario">Proprietario</label>
          <input type="text" id='proprietario' onChange={(e) => { setProprietario(e.target.value) }} />
          <label htmlFor="cor">Cor</label>
          <input type="text" id='cor' onChange={(e) => { setCor(e.target.value) }} />
          <button type='submit' onClick={registrar}>Registrar</button>
        </form>
      </div>
    </>
  )
}

export default App
