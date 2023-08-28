const express = require('express');
const ProdutoController = require('./controller/ProdutoController');

const app = express();

const PORT = 3000;

app.use(express.json())

const produtoController = new ProdutoController()

app.post('/produtos', (req, res) => produtoController.create(req, res));
app.get('/produtos/:id', (req, res) => produtoController.getById(req, res));
app.get('/produtos', (req, res) => produtoController.getAll(req, res));
app.put('/produtos/:id', (req, res) => produtoController.update(req, res));
app.delete('/produtos/:id', (req, res) => produtoController.delete(req, res));

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`);
});