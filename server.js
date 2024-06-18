const express = require('express');
const cors = require('cors');
const router = require('./routes/routers'); // Rota correta para o arquivo de rotas
const db = require('./database/connection'); // Rota correta para o arquivo de conexão

require('dotenv').config(); // Para carregar variáveis de ambiente

const app = express();
const PORT = process.env.PORT || 3306; // Porta do servidor, lendo do arquivo variaveis.env ou padrão 3000

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log(`Server Running on: http://localhost:${PORT}`);
    
    // Testa a conexão com o banco de dados
    db.connect((err) => {
        if (err) {
            console.error('Erro ao conectar ao banco de dados:', err);
        } else {
            console.log('Conexão bem-sucedida com o banco de dados');
        }
    });
});
