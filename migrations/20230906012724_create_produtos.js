/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("produtos", table => {
        table.increments('id')
        table.text("descricao", 255).unique().notNullable()
        table.text("marca", 255).notNullable()
        table.decimal("valor").notNullable()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists("produtos")
};
