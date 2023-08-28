const { v4: uuidv4 } = require('uuid');
class Produto {
    constructor(descricao, valor, marca) {
        this.id = uuidv4();
        this.descricao = descricao;
        this.valor = valor;
        this.marca = marca;
    }
}

module.exports = Produto