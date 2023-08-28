const Produto = require('../model/Produto');

class ProdutoRepository {

    constructor() {
        if (!ProdutoRepository.instance) {
            this.array = [];
            this.array.push(new Produto("Uma descrição", 1.00, "Uma marca"))
            ProdutoRepository.instance = this.array;
        }
        return ProdutoRepository.instance;
    }

}
const instance = new ProdutoRepository();
module.exports = instance;
