/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('produtos').del()
  await knex('produtos').insert([
    {id: 1, descricao: 'Descricao 1', marca: "Marca 1", valor: 1.0},
    {id: 2, descricao: 'Descricao 2', marca: "Marca 2", valor: 1.0},
    {id: 3, descricao: 'Descricao 3', marca: "Marca 3", valor: 1.0},
    {id: 4, descricao: 'Descricao 4', marca: "Marca 4", valor: 1.0},
    {id: 5, descricao: 'Descricao 5', marca: "Marca 5", valor: 1.0},
  ]);
};
