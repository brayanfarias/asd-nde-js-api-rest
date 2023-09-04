const express = require('express');
const v1 = express.Router()
const ProdutoController = require('./controller/ProdutoController');

const produtoController = new ProdutoController()

v1.post('/produtos', (req, res) => produtoController.create(req, res));
v1.get('/produtos/:id', (req, res) => produtoController.getById(req, res));
v1.get('/produtos', (req, res) => produtoController.getAll(req, res));
v1.put('/produtos/:id', (req, res) => produtoController.update(req, res));
v1.delete('/produtos/:id', (req, res) => produtoController.delete(req, res));

module.exports = v1