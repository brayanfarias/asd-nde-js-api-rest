# API de Produtos usando Express.js

Bem-vindo à documentação da API de Produtos baseada em Express.js. Esta API permite interagir com uma coleção de produtos através de operações RESTful.

## Rotas

### GET /produtos

Recupere a lista de todos os produtos disponíveis.

### GET /produtos/:id

Recupere um produto específico pelo seu ID.

### POST /produtos

Crie um novo produto. Você deve fornecer os detalhes do produto no corpo da solicitação. Exemplo de corpo da requisição:

```json
{
  "descricao": "Produto Novo",
  "valor": 29.99,
  "marca": "Exemplo Marca"
}
```

### PUT /produtos/:id

Atualize um produto existente pelo seu ID. Forneca os detalhes atualizados no corpo da solicitação. Exemplo de corpo da requisição:

```json
{
  "valor": 39.99
}
```

### DELETE /produtos/:id

Exclua um produto existente pelo seu ID.

## Instalação e Tecnologias Utilizadas

### Instalação

1. Clone este repositório.
2. Execute o comando `npm install` para instalar as dependências.
3. Execute o comando `npm run start` para iniciar o servidor.


### Tecnologias Utilizadas

- Node.js
- Express.js