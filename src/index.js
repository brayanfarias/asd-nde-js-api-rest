const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');

const PORT = 3000;

app.use(express.json())

class Produto {
    constructor(descricao, valor, marca) {
        this.id = uuidv4();
        this.descricao = descricao;
        this.valor = valor;
        this.marca = marca;
    }
}

const lista_produtos = [
    new Produto("Arroz parboilizado 5Kg", 25.00, "Tio João")
]


app.post('/produtos', (req, res) => {
    const body = req.body
    const produto = new Produto(body.descricao, body.valor, body.marca)
    lista_produtos.push(produto)
    res.status(201).json({ "id": produto.id });
});

app.get('/produtos/:id', (req, res) => {
    const id = req.params.id;
    const produto = lista_produtos.find(produto => produto.id === id);

    if (produto) {
        res.json(produto);
    } else {
        res.status(404).json({ "message": 'Produto não encontrado' });
    }
});

app.get('/produtos', (req, res) => {
    res.json(lista_produtos);
});

app.put('/produtos/:id', (req, res) => {
    const id = req.params.id;
    const produto = lista_produtos.find(produto => produto.id === id);

    if (produto) {
        const body = req.body
        produto.descricao = body.descricao ? body.descricao : produto.descricao
        produto.valor = body.valor ? body.valor : produto.valor
        produto.marca = body.marca ? body.marca : produto.marca
        res.json(produto);
    } else {
        res.status(404).json({ message: 'Produto não encontrado' });
    }
});

app.delete('/produtos/:id', (req, res) => {
    const id = req.params.id;
    const produto = lista_produtos.findIndex(produto => produto.id === id);

    if (produto !== -1) {
        lista_produtos.splice(produto, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Produto não encontrado' });
    }
});


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`);
});


