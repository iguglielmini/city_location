
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        table.string('id').primary();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('email').notNullable();
        table.string('gender').notNullable();
        table.string('company').notNullable();
        table.string('city').notNullable();
        table.string('title').notNullable();
        table.string('lat').notNullable();
        table.string('long').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('customers');
};
