const express = require('express');
const db = require('./db');
const app = express();
app.use(express.json());
const port = 3000;

app.post('/cadastro/funcionario', (req, res) => {
    const { nome, sobrenome, cargo } = req.body;
    db.query(
        `INSERT INTO funcionario (nome, sobrenome, cargo) VALUES (?, ?, ?)`,
        [nome, sobrenome, cargo],
        function (err, results) {
            if (err) {
                console.error('Erro na inserção:', err);
                return res.status(500).send('Erro na inserção');
            }
            res.send(`Funcionário cadastrado!\n\nNome: ${nome} \nSobrenome: ${sobrenome} \nCargo: ${cargo}`);
        }
    );
});

app.post('/cadastro/cargo', (req, res) => {
    const { cargo, departamento } = req.body;
    db.query(
        `INSERT INTO cargo (cargo, departamento) VALUES (?, ?)`,
        [cargo, departamento],
        function (err, results) {
            if (err) {
                console.error('Erro na inserção:', err);
                return res.status(500).send('Erro na inserção');
            }
            res.send(`Cargo cadastrado!\n\nCargo: ${cargo} \nDepartamento: ${departamento}`);
        }
    );
});

app.post('/cadastro/departamento', (req, res) => {
    const { departamento } = req.body;
    db.query(
        `INSERT INTO departamento (departamento) VALUES (?)`,
        [departamento],
        function (err, results) {
            if (err) {
                console.error('Erro na inserção:', err);
                return res.status(500).send('Erro na inserção');
            }
            res.send(`Departamento cadastrado!\n\nDepartamento: ${departamento}`);
        }
    );
});

app.get('/departamento/:id', (req, res) => {
    const { id } = req.params;
    db.query(
        `SELECT * FROM departamento WHERE id = ?`,
        [id],
        function (err, results) {
            if (err) {
                console.error('Erro na consulta:', err);
                return res.status(500).json({ error: 'Erro ao consultar' });
            }
            res.json(results);
        }
    );
});

app.get('/funcionario/:id', (req, res) => {
    const { id } = req.params;
    db.query(
        `SELECT nome, sobrenome, cargo FROM funcionario WHERE id = ?`,
        [id],
        function (err, results) {
            if (err) {
                console.error('Erro na consulta:', err);
                return res.status(500).json({ error: 'Erro ao consultar' });
            }
            res.json(results);
        }
    );
});

app.get('/cargo/:id', (req, res) => {
    const { id } = req.params;
    db.query(
        `SELECT cargo, departamento FROM cargo WHERE id = ?`,
        [id],
        function (err, results) {
            if (err) {
                console.error('Erro na consulta:', err);
                return res.status(500).json({ error: 'Erro ao consultar' });
            }
            res.json(results);
        }
    );
});

app.get('/cargos/departamento/:departamento', (req, res) => {
    const { departamento } = req.params;
    db.query(
        `SELECT * FROM cargo WHERE departamento = ?`,
        [departamento],
        function (err, results) {
            if (err) {
                console.error('Erro na consulta:', err);
                return res.status(500).json({ error: 'Erro ao consultar cargos' });
            }
            res.json(results);
        }
    );
});

app.get('/funcionarios/nome/:nome', (req, res) => {
    const { nome } = req.params;
    db.query(
        `SELECT nome, sobrenome, cargo FROM funcionario WHERE nome = ?`,
        [nome],
        function (err, results) {
            if (err) {
                console.error('Erro na consulta:', err);
                return res.status(500).json({ error: 'Erro ao consultar funcionários' });
            }
            res.json(results);
        }
    );
});

app.put('/atualizar/funcionario/:id', (req, res) => {
    const { id } = req.params;
    const { nome, sobrenome, cargo } = req.body;
    db.query(
        `UPDATE funcionario SET nome = ?, sobrenome = ?, cargo = ? WHERE id = ?`,
        [nome, sobrenome, cargo, id],
        function (err, results) {
            if (err) {
                console.error('Erro na atualização:', err);
                return res.status(500).send('Erro na atualização');
            }
            res.send(`Funcionário atualizado!\n\nNome: ${nome} \nSobrenome: ${sobrenome} \nCargo: ${cargo}`);
        }
    );
});

app.delete('/deletar/funcionario/:id', (req, res) => {
    const { id } = req.params;
    db.query(
        `DELETE FROM funcionario WHERE id = ?`,
        [id],
        function (err, results) {
            if (err) {
                console.error('Erro na deleção:', err);
                return res.status(500).send('Erro na deleção');
            }
            res.send(`Funcionário deletado!`);
        }
    );
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});