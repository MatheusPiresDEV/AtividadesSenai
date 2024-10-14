const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'empresa',
});

connection.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados');

});

module.exports = connection;
/*
    Respondendo as perguntas disertativas da prova que nã fiz ⬇

    Relacione backend e frontend aos conceitos de client-side e server-side. explique o que é cada um e relacione os conceitos.
    
    Client-side é o frontend, front se resume no que o usuario final ou cliente ira ver 
    Server-side é o backend, backend é a estrutura que possibilita a operação do sistema

    Quais são os comandos DML, DDL, DQL? 
    
    DDL
    Data Definition Language, ou Linguagem de Definição de Dados, é usada para definir a estrutura do banco de dados. Os comandos DDL são:
    CREATE, para criar uma definição de dados
    ALTER, para alterar uma definição
    DROP, para excluir uma definição

    DML
    Data Manipulation Language, ou Linguagem de Manipulação de Dados, é usada para editar os dados dentro das tabelas. Os comandos DML são:
    INSERT
    DELETE
    UPDATE

    DQL
    Data Query Language, ou Linguagem de Consulta de Dados, é usada para realizar consultas. O comando DQL é o SELECT. 

*/