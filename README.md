# API de Produtos usando Express.js

Bem-vindo à documentação da API de Produtos baseada em Express.js. Esta API permite interagir com uma coleção de produtos através de operações RESTful.
*
## Rotas para produtos *em memoria*

### GET /api/v1/produtos

Recupere a lista de todos os produtos disponíveis.

### GET /api/v1/produtos/:id

Recupere um produto específico pelo seu ID.

### POST /api/v1/produtos

Crie um novo produto. Você deve fornecer os detalhes do produto no corpo da solicitação. Exemplo de corpo da requisição:

```json
{
  "descricao": "Produto Novo",
  "valor": 29.99,
  "marca": "Exemplo Marca"
}
```

### PUT /api/v1/produtos/:id

Atualize um produto existente pelo seu ID. Forneca os detalhes atualizados no corpo da solicitação. Exemplo de corpo da requisição:

```json
{
  "valor": 39.99
}
```

### DELETE /api/v2/produtos/:id

Exclua um produto existente pelo seu ID.
##

## Rotas para produtos *em banco em memoria*

### GET /api/v2/produtos

Recupere a lista de todos os produtos disponíveis.

### GET /api/v2/produtos/:id

Recupere um produto específico pelo seu ID.

### POST /api/v2/produtos

Crie um novo produto. Você deve fornecer os detalhes do produto no corpo da solicitação. Exemplo de corpo da requisição:

```json
{
  "descricao": "Produto Novo",
  "valor": 29.99,
  "marca": "Exemplo Marca"
}
```

### PUT /api/v2/produtos/:id

Atualize um produto existente pelo seu ID. Forneca os detalhes atualizados no corpo da solicitação. Exemplo de corpo da requisição:

```json
{
  "valor": 39.99
}
```

### DELETE /api/v2/produtos/:id

Exclua um produto existente pelo seu ID.

## Instalação e Tecnologias Utilizadas

### Instalação

1. Clone este repositório.
2. Execute o comando `npm install` para instalar as dependências
3. Execute o comando `npx knex migrate:up` para subir a migration da tabela de produtos
4.  Execute o comando `npx knex seed:run` para popular a tabela de produtos criada no passo 3
5. Para subir em modo desenvolvimento, execute o comando `npm run dev`. Isso rodará a aplicação junto com nodemon


### Tecnologias Utilizadas

- Node
- Express
- Knex
- Nodemon --dev