const db = require('../database/connection');

// Função de login do professor
const loginProfessor = (req, res) => {
    const { cpf, senha } = req.body;
    const query = 'SELECT * FROM professores WHERE cpf = ? AND senha = ?';

    db.query(query, [cpf, senha], (err, results) => {
        if (err) {
            console.error('Erro ao consultar banco de dados:', err);
            res.status(500).send('Erro interno do servidor');
            return;
        }
        if (results.length > 0) {
            res.send('Login bem-sucedido.');
        } else {
            res.status(401).send('Credenciais inválidas.');
        }
    });
};

// Função para aplicar uma ocorrência
const aplicarOcorrencia = (req, res) => {
    const { alunoId, motivo, data, materia, resolucao } = req.body;
    const query = 'INSERT INTO ocorrencias (aluno_id, motivo, data, materia, resolucao) VALUES (?, ?, ?, ?, ?)';

    db.query(query, [alunoId, motivo, data, materia, resolucao], (err, results) => {
        if (err) {
            console.error('Erro ao inserir no banco de dados:', err);
            res.status(500).send('Erro interno do servidor');
            return;
        }
        res.send('Ocorrência aplicada com sucesso.');
    });
};

module.exports = { loginProfessor, aplicarOcorrencia };
