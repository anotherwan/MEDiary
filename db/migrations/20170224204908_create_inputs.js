exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('inputs', function(table) {
      table.increments('id').primary();
      table.integer('user_id').references('users.id');
      table.integer('body_part_id');
      table.integer('pain_rating');
      table.string('description');
      table.timestamp('date_created').notNullable().defaultTo(knex.fn.now());
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('inputs')
  ])
};