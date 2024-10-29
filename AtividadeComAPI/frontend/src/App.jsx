import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [marca, setMarca] = useState('')
  const [modelo, setModelo] = useState('')
  const [ano, setAno] = useState(0)
  const [proprietario, setProprietario] = useState('')
  const [cor, setCor] = useState('')

  useEffect(() => {
    console.log(marca, modelo, ano, cor, proprietario)
  }, [marca, modelo, ano, cor, proprietario])

  async function registerVehicle() {
    await axios.post("http://localhost:3000/inserir", {
      marca, modelo, ano, cor, proprietario
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    registerVehicle()
  }

  return (
    <>
      <div className="inserir">
        <form onSubmit={handleSubmit}>
          <label htmlFor="marca">Marca</label>
          <br />
          <input type="text" id='marca' onChange={(e) => { setMarca(e.target.value) }} />
          <br />
          <label htmlFor="modelo">Modelo</label>
          <br />
          <input type="text" id='modelo' onChange={(e) => { setModelo(e.target.value) }} />
          <br />
          <label htmlFor="ano">Ano</label>
          <br />
          <input type="text" id='ano' onChange={(e) => { setAno(Number(e.target.value)) }} />
          <br />
          <label htmlFor="cor">Cor</label>
          <br />
          <input type="text" id='cor' onChange={(e) => { setCor(e.target.value) }} />
          <br />
          <label htmlFor="proprietario">Proprietário</label>
          <br />
          <input type="text" id='proprietario' onChange={(e) => { setProprietario(e.target.value) }} />
          <br />
          <br />
          <button type='submit' onClick={handleSubmit}>Registrar veículo</button>
        </form>
      </div>
      <div className='ver'>
          <button type='submit' >Select</button>
      </div>
    </>
  )
}

export default App
