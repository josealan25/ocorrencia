const express = require('express');
const router = express.Router();
const AlunoController = require('../controllers/alunoController');
const ProfessorController = require('../controllers/professorController');

// Rotas para login
router.post('/loginAluno', AlunoController.loginAluno);
router.post('/loginProfessor', ProfessorController.loginProfessor);

// Rotas para ocorrências
router.get('/ocorrencias/aluno/:email', AlunoController.getOcorrencias);
router.post('/aplicar_ocorrencia', ProfessorController.aplicarOcorrencia);

module.exports = router;
