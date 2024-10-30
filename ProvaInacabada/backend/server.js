const express = require('express');
const db = require('./db');
const app = express();
app.use(express.json());
const port = 3000;
const cors = require('cors');
app.use(cors({ origin: "*" }));

// Rota para inserir um novo usuário
app.post('/inserirUsuario', (req, res) => {
    const { nome, email } = req.body;
    db.query(
        `INSERT INTO Usuario (nome, email) VALUES (?, ?)`,
        [nome, email],
        function (err, results, fields) {
            if (err) {
                console.error('Erro na inserção:', err);
                return res.status(500).json({ error: 'Erro ao inserir usuário' });
            }
            res.send(`Usuário inserido!\n\nNome: ${nome} \nEmail: ${email}`);
        }
    );
});

// Rota para inserir uma nova tarefa
app.post('/inseritarefa', (req, res) => {
    const { descricao_tarefa, nome_setor, prioridade, data_cadastro, fazer, fk_id_usuario } = req.body;
    db.query(
        `INSERT INTO tarefa (descricao_tarefa, nome_setor, prioridade, data_cadastro, fazer, fk_id_usuario) VALUES (?, ?, ?, ?, ?, ?)`,
        [descricao_tarefa, nome_setor, prioridade, data_cadastro, fazer, fk_id_usuario],
        function (err, results, fields) {
            if (err) {
                console.error('Erro na inserção:', err);
                return res.status(500).json({ error: 'Erro ao inserir tarefa' });
            }
            res.send(`Tarefa inserida!\n\nDescrição: ${descricao_tarefa} \nSetor: ${nome_setor}`);
        }
    );
});

// Rota para selecionar todos os usuários
app.get('/Usuario', (req, res) => {
    db.query(`SELECT * FROM Usuario`, function (err, results, fields) {
        if (err) {
            console.error('Erro na consulta:', err);
            return res.status(500).json({ error: 'Erro ao consultar usuários' });
        }
        res.json(results);
    });
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
