const ProdutoService = require("../service/ProdutoService");

class ProdutoController {

    constructor() {
        this.produtoService = new ProdutoService()
    }

    create(req, res) {
        const body = req.body
        const produto = this.produtoService.create(body.descricao, body.valor, body.marca)
        return res.status(201).json({ "id": produto.id })
    }

    getAll(req, res) {
        const produtos = this.produtoService.getAll()
        return res.json(produtos);
    }


    getById(req, res) {

        const id = req.params.id;
        const produto = this.produtoService.getById(id)

        if (produto) {
            return res.json(produto);
        } else {
            return res.status(404).json({ "message": 'Produto não encontrado' });
        }
    }

    update(req, res) {
        const id = req.params.id;
        const produto = this.produtoService.getById(id)

        if (!produto) return res.status(404).json({ "message": 'Produto não encontrado' });

        const body = req.body
        const updated = this.produtoService.update(id, {
            descricao: body.descricao,
            valor: body.valor,
            marca: body.marca
        })

        return res.json(updated);

    }

    delete(req, res) {
        const id = req.params.id;
        this.produtoService.delete(id)
        res.status(204).send();
    }

}
module.exports = ProdutoController
