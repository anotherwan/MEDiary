
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('doctors', function(table) {
      table.increments('id').primary();
      table.string('password').notNullable();
      table.string('name');
      table.string('email');
      table.string('speciality');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('doctors')
  ])
};
