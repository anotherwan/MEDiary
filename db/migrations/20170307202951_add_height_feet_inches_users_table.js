
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(table) {
    table.string('height_feet');
    table.string('height_inches');
    table.string('allergies');
    table.string('medication');
    table.string('conditions');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function(table) {
    table.dropColumn('height_feet');
    table.dropColumn('height_inches');
    table.dropColumn('allergies');
    table.dropColumn('medication');
    table.dropColumn('conditions');
  })
};
