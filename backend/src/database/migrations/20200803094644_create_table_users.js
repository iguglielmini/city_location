
exports.up = knex => knex.schema.createTable('users', function () {
        table.increments('id')
        table.text('first_name').notNullable()
        table.text('last_name').notNullable()
        table.text('email').notNullable()
        table.text('gender').notNullable()
        table.text('company').notNullable()
        table.text('city').notNullable()
        table.text('title').notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())

    })


exports.down = function (knex) {
    return knex.schema.dropTable('users')
};
