import { useState, useEffect } from 'react'; // Importa hooks do React para gerenciar estado e efeitos colaterais
import axios from 'axios'; // Importa a biblioteca axios para realizar requisições HTTP
import './App.css'; // Importa o arquivo CSS para estilização
import Navbar from './components/Navbar';

function App() {
  // Declaração de estados para armazenar os dados do veículo
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState(0);
  const [proprietario, setProprietario] = useState('');
  const [cor, setCor] = useState('');
  const [veiculos, setVeiculos] = useState([]); // Estado para armazenar a lista de veículos

  // Efeito que registra as mudanças nos estados do veículo
  useEffect(() => {
    console.log(marca, modelo, ano, cor, proprietario);
  }, [marca, modelo, ano, cor, proprietario]);

  // Efeito que busca a lista de veículos quando o componente é montado
  useEffect(() => {
    async function fetchVeiculos() {
      try {
        const response = await axios.get('http://localhost:3000/veiculos'); // Faz uma requisição GET para buscar veículos
        setVeiculos(response.data); // Armazena os dados recebidos no estado de veículos
      } catch (error) {
        console.error('Erro ao buscar veículos:', error); // Tratamento de erro
      }
    }

    fetchVeiculos(); // Chama a função para buscar veículos
  }, []);

  // Função para registrar um novo veículo
  async function registerVehicle() {
    await axios.post("http://localhost:3000/inserir", {
      marca, modelo, ano, cor, proprietario // Envia os dados do veículo como corpo da requisição
    });
    // Recarrega a página após o registro para atualizar a lista de veículos
    window.location.reload();
  }

  // Função chamada ao submeter o formulário
  const handleSubmit = (event) => {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário
    registerVehicle(); // Chama a função para registrar o veículo
  };

  return (
    <>
    <Navbar>
    </Navbar>
      <div className="card">
        <form>
          <label htmlFor="marca">Marca</label>
          <br />
          <input type="text" id='marca' onChange={(e) => setMarca(e.target.value)} />
          <br />
          <label htmlFor="modelo">Modelo</label>
          <br />
          <input type="text" id='modelo' onChange={(e) => setModelo(e.target.value)} />
          <br />
          <label htmlFor="ano">Ano</label>
          <br />
          <input type="number" id='ano' onChange={(e) => setAno(Number(e.target.value))} />
          <br />
          <label htmlFor="cor">Cor</label>
          <br />
          <input type="text" id='cor' onChange={(e) => setCor(e.target.value)} />
          <br />
          <label htmlFor="proprietario">Proprietário</label>
          <br />
          <input type="text" id='proprietario' onChange={(e) => setProprietario(e.target.value)} />
          <br />
          <br />
          <button type='submit' onClick={handleSubmit}>Registrar</button> {/* Botão para registrar o veículo */}
        </form>
      </div>

      <div className='ver'>
        <h2>Lista de Veículos</h2>
        <ul>
          {/* Mapeia e exibe a lista de veículos */}
          {veiculos.map((veiculo) => (
            <li key={veiculo.id}>
              {`${veiculo.marca} ${veiculo.modelo} - ${veiculo.ano} - ${veiculo.cor} - ${veiculo.proprietario}`}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App; // Exporta o componente App para uso em outros arquivos
