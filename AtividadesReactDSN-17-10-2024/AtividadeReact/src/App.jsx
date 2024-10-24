import { useEffect, useState } from 'react'; /** Importa os hooks useEffect e useState do React */
import reactLogo from './assets/react.svg'; /** Importa o logo do React */
import viteLogo from '/vite.svg'; /** Importa o logo do Vite */
import './App.css'; /** Importa o arquivo de estilos CSS */
import Img from './assets/freepik__candid-image-photography-natural-textures-highly-r__85082.jpeg'; /** Importa uma imagem */
import Heart from './assets/heart_12533153.png'; /** Importa a imagem do coração */

function App() {
  const [count, setCount] = useState(0); /** Define um estado inicial como 0 para contar os caracteres */
  const [cond, setCond] = useState(true); /** Define um estado inicial como true para a condição */
  const [senai, setSenai] = useState(""); /** Define um estado inicial como string vazia para armazenar "senai" */
  const [like, setLike] = useState(true); /** Define um estado inicial como true para o "like" */
  const [caracter, setCaracter] = useState([]); /** Define um estado inicial como array vazio para armazenar os caracteres */
  const [nome, setNome] = useState(""); /** Define um estado inicial para o nome */
  const [idade, setIdade] = useState(""); /** Define um estado inicial para a idade */
  const [gmail, setGmail] = useState(""); /** Define um estado inicial para o gmail */
  const [array, setArray] = useState([]); /** Define um estado inicial como array vazio para armazenar os registros */
  const [verificar, setVerificar] = useState(true); /** Define um estado para controlar a exibição */

  const mudar = (e) => { /** Função que lida com a mudança no input */
    const value = e.target.value; /** Obtém o valor do input */
    setCaracter([...value]); /** Atualiza o estado caracter com o valor do input, transformando-o em um array de caracteres */
    setCount(value.length); /** Atualiza o estado count com o número de caracteres */
  };

  let teste = ""; /** Inicializa a variável "teste" */
  if (senai === "SENAI" || senai === "senai" || senai === "Senai") { /** Verifica se "senai" corresponde a um dos valores */
    teste = 'Apareci'; /** Atribui 'Apareci' à variável "teste" se a condição for atendida */
  }

  const verifica = () => { /** Função que lida com o clique do botão */
    array.push({ nome, idade, gmail }); /** Adiciona um novo registro ao array */
    setArray([...array]); /** Atualiza o array de registros */
    setVerificar(!verificar); /** Alterna o estado verificar */
  };

  return ( /** Retorna o JSX que será renderizado */
    <>
      <div className='botaoConta'> {/** Div para botões de adicionar e subtrair contador */}
        <h1>Adicionar {count}</h1> {/** Exibe o valor atual do contador */}
        <button onClick={() => setCount((count) => count + 10)}> {/** Botão para adicionar 10 ao contador */}
          <h1>Adicionar 10</h1>
        </button>
        <h1>Subtrair {count}</h1> {/** Exibe o valor atual do contador */}
        <button onClick={() => setCount((count) => count - 10)}> {/** Botão para subtrair 10 do contador */}
          <h1>Subtrair</h1>
        </button>
      </div>
      <div className='balaco'> {/** Div para exibir/ocultar conteúdo com base na condição "cond" */}
        <button onClick={() => setCond(cond ? false : true)}>Ocultar o balacobaco</button> {/** Botão para alternar a visibilidade */}
        {cond ? ( /** Verifica a condição "cond" */
          <div className='com'> {/** Div que será exibida se "cond" for true */}
            <h1>Balacobaco</h1>
          </div>
        ) : (
          <div className='sem'></div> /** Div que será exibida se "cond" for false */
        )}
      </div>
      <div className='sumir'> {/** Div para entrada de texto e exibição de "senai" e "teste" */}
        <input type="text" onChange={(e) => setSenai(e.target.value)} /> {/** Input de texto que chama setSenai em cada mudança */}
        <h1>{senai} {teste}</h1> {/** Exibe "senai" e "teste" */}
      </div>
      <div className='copiaInsta'> {/** Div para exibição da imagem e "like" */}
        <img src={Img} alt="" width={400} height={400} /> {/** Imagem exibida */}
        <button onClick={() => setLike(!like)}> {/** Botão que alterna o estado "like" */}
          <img src={Heart} alt="" width={100} height={100} /> {/** Imagem de coração no botão */}
        </button>
        <h1>{like ? `like = ${1}` : `like = ${0}`}</h1> {/** Exibe o valor de "like" baseado na condição */}
      </div>
      <div className='contCaracter'> {/** Div para o contador de caracteres */}
        <h1>Contador de Caracteres</h1> {/** Título da seção */}
        <input type="text" onChange={mudar} /> {/** Input de texto que chama handleCaracterChange em cada mudança */}
        <h1>Número de caracteres = {count}</h1> {/** Exibe o número total de caracteres */}
      </div>
      <div className='formulario'>
        <h1>Digite seu nome</h1>
        <input type="text" onChange={(e) => setNome(e.target.value)} />
        <h1>Digite sua idade</h1>
        <input type="text" onChange={(e) => setIdade(e.target.value)} />
        <h1>Digite seu gmail</h1>
        <input type="text" onChange={(e) => setGmail(e.target.value)} />
        <button onClick={verifica}>
          Adicionar
        </button>
        <h1>{verificar ? "" : `Dados cadastrados: ${nome} ${idade} ${gmail}`}</h1>
      </div>
    </>
  );
}

export default App; /** Exporta o componente App como o padrão */
