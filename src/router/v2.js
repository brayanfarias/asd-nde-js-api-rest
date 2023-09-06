const express = require('express');
const v2 = express.Router()
const knex = require('knex')(require('../../knexfile').development)

v2.get('/produtos', (req, res) => {
    knex("produtos")
        .then(produtos => {
            return res.status(200).json(produtos)
        })
});


v2.get('/produtos/:id', (req, res) => {
    knex("produtos")
        .where({ id: req.params.id })
        .then(produtos => {
            if (!produtos.length) return res.status(404).json({ erro: "Produto não encontrado" })
            return res.status(200).json(produtos[0])
        })
});

v2.post('/produtos', (req, res) => {
    knex("produtos")
        .insert(req.body)
        .then(id => {
            return res.status(201).json(id);
        })
});

v2.put('/produtos/:id', (req, res) => {
    knex("produtos")
        .where({ id: req.params.id })
        .then(produto => {
            if (!produto) return res.status(404).json({ erro: "Produto não encontrado" })

            knex("produtos")
                .where({ id: req.params.id })
                .update(
                    {
                        descricao: req.body.descricao,
                        valor: req.body.valor,
                        marca: req.body.marca
                    }
                ).then(() => {
                    knex("produtos")
                        .where({ id: req.params.id })
                        .then(updated => {
                            return res.status(200).json(updated);
                        })


                })

        })
});

v2.delete('/produtos/:id', (req, res) => {
    knex("produtos")
        .where({ id: req.params.id })
        .del().then(() => {
            return res.status(204).send();

        })

});

module.exports = v2
