const db = require('../database/connection');

const loginAluno = (req, res) => {
    const { email, senha } = req.body;
    const query = 'SELECT * FROM alunos WHERE email = ? AND senha = ?';

    db.query(query, [email, senha], (err, results) => {
        if (err) {
            console.error('Erro ao consultar banco de dados:', err);
            res.status(500).send('Erro interno do servidor');
            return;
        }
        if (results.length > 0) {
            // Sucesso no login
            res.send('Login bem-sucedido.');
        } else {
            // Falha no login
            res.status(401).send('Credenciais inválidas.');
        }
    });
};

module.exports = { loginAluno };
