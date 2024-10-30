import { useState, useEffect } from 'react';
import axios from 'axios'; // Certifique-se de importar axios para fazer requisições HTTP
import './App.css';

function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [usuarios, setUsuarios] = useState([]); // Estado para armazenar os usuários
  const [descricaoTarefa, setDescricao] = useState('');
  const [nomeSetor, setSetor] = useState('');
  const [prioridade, setPrioridade] = useState('');
  const [dataCadastro, setCadastro] = useState(0);
  const [fazer, setFazer] = useState('');
  const [tarefas, setTarefas] = useState([]); // Estado para armazenar as tarefas

  // registrar as mudanças nos estados de nome e email
  useEffect(() => {
    console.log(nome, email);
  }, [nome, email]);

  //  busca a lista de usuários quando o componente é montado
  useEffect(() => {
    async function fetchUsuarios() {
      try {
        const response = await axios.get('http://localhost:3000/Usuario'); // Faz uma requisição GET para buscar usuários
        setUsuarios(response.data); // Armazena os dados recebidos no estado de usuários
      } catch (error) {
        console.error('Erro ao buscar usuários:', error); // Tratamento de erro
      }
    }
    fetchUsuarios(); // Chama a função para buscar usuários
  }, []);

  // Efeito que busca a lista de tarefas quando o componente é montado
  useEffect(() => {
    async function fetchTarefas() {
      try {
        const response = await axios.get('http://localhost:3000/tarefas'); // Faz uma requisição GET para buscar tarefas
        setTarefas(response.data); // Armazena os dados recebidos no estado de tarefas
      } catch (error) {
        console.error('Erro ao buscar tarefas:', error); // Tratamento de erro
      }
    }
    fetchTarefas(); // Chama a função para buscar tarefas
  }, []);

  // Função para registrar um novo usuário
  async function registerUsuario() {
    try {
      await axios.post("http://localhost:3000/inserirUsuario", { nome, email }); // Envia os dados do usuário como corpo da requisição
      // Atualiza a lista de usuários sem recarregar a página
      const response = await axios.get('http://localhost:3000/Usuario');
      setUsuarios(response.data);
    } catch (error) {
      console.error('Erro ao registrar usuário:', error); // Tratamento de erro
    }
  }

  // Função para registrar uma nova tarefa
  async function registerTarefa() {
    try {
      await axios.post("http://localhost:3000/inserirTarefa", { descricaoTarefa, nomeSetor, prioridade, dataCadastro, fazer, fk_id_usuario: 1 }); // Envia os dados da tarefa como corpo da requisição
      // Atualiza a lista de tarefas sem recarregar a página
      const response = await axios.get('http://localhost:3000/tarefas');
      setTarefas(response.data);
    } catch (error) {
      console.error('Erro ao registrar tarefa:', error); // Tratamento de erro
    }
  }

  // Função chamada ao submeter o formulário de usuários
  const handleSubmitUsuario = (event) => {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário
    registerUsuario(); // Chama a função para registrar o usuário
  };

  // Função chamada ao submeter o formulário de tarefas
  const handleSubmitTarefa = (event) => {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário
    registerTarefa(); // Chama a função para registrar a tarefa
  };

  return (
    <>
      <header className="menu">
        <ul>
          <li><a href="#section01">Cadastro de usuários</a></li>
          <li><a href="#section02">Cadastro de tarefas</a></li>
          <li><a href="#section03">Gerenciar tarefas</a></li>
        </ul>
        <p className="titulo">Gerenciamento de tarefas</p>
      </header>

      <section id="section01">
        <div className="usuario">
          <form onSubmit={handleSubmitUsuario}>
            <label htmlFor="nome">Nome:</label>
            <br />
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <br />
            <label htmlFor="email">Email:</label>
            <br />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <button type="submit">Registrar</button>
          </form>
        </div>
      </section>

      <section id="section02">
        <div className='tarefas'>
          <div>
            <p>Cadastro de tarefas</p>
            <form onSubmit={handleSubmitTarefa}>
              <label htmlFor="descricaoTarefa">Descrição da tarefa:</label>
              <br />
              <input
                type="text"
                id="descricaoTarefa"
                value={descricaoTarefa}
                onChange={(e) => setDescricao(e.target.value)}
              />
              <br />
              <label htmlFor="nomeSetor">Nome do Setor:</label>
              <br />
              <input
                type="text"
                id="nomeSetor"
                value={nomeSetor}
                onChange={(e) => setSetor(e.target.value)}
              />
              <br />
              <label htmlFor="nomes">Selecione um usuário:</label>
              <br />
              <select name="nomes" id="nomes" onChange={(e) => setSetor(e.target.value)}>
                {usuarios.map((usuario) => (
                  <option key={usuario.id} value={usuario.nome}>
                    {usuario.nome}
                  </option>
                ))}
              </select>
              <br />
              <label htmlFor="Prioridade">Prioridade:</label>
              <br />
              <select name="Prioridade" id="Prioridade" onChange={(e) => setPrioridade(e.target.value)}>
                <option value="alta">Alta</option>
                <option value="media">Média</option>
                <option value="baixa">Baixa</option>
              </select>
              <br />
              <button type="submit">Registrar Tarefa</button>
            </form>
          </div>
        </div>
      </section>

      <section id="section03">
      </section>
    </>
  );
}

export default App;
