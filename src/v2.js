const express = require('express');
const v2 = express.Router()
const ProdutoController = require('./controller/ProdutoController');

const produtoController = new ProdutoController()

v2.post('/produtos', (req, res) => produtoController.create(req, res));
v2.get('/produtos/:id', (req, res) => produtoController.getById(req, res));
v2.get('/produtos', (req, res) => produtoController.getAll(req, res));
v2.put('/produtos/:id', (req, res) => produtoController.update(req, res));
v2.delete('/produtos/:id', (req, res) => produtoController.delete(req, res));

module.exports = v2