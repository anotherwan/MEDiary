exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.integer('doctor_id').references('doctors.id').notNullable();
      table.string('password').notNullable();
      table.integer('age');
      table.string('gender');
      table.integer('weight');
      table.string('height');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users')
  ])
};