const ProdutoRepository = require('../repository/ProdutoRepository');
const Produto = require('../model/Produto');

class ProdutoService {

    constructor() {
        this.produtos = ProdutoRepository
    }

    getAll() {
        return this.produtos
    }

    getById(id) {
        return this.produtos.find(produto => produto.id === id);

    }

    create(descricao, valor, marca) {
        const produto = new Produto(descricao, valor, marca)
        this.produtos.push(produto)
        return produto
    }

    update(id, { descricao, valor, marca }) {
        const produto = this.getById(id)
        produto.descricao = descricao ? descricao : produto.descricao
        produto.valor = valor ? valor : produto.valor
        produto.marca = marca ? marca : produto.marca

        return produto

    }

    delete(id) {
        const produto = this.getById(id)
        if (!produto) return

        const remove = this.produtos.findIndex(produto => produto.id === id);


        if (remove !== -1) {
            this.produtos.splice(remove, 1);

        }
    }

}

module.exports = ProdutoService

