
exports.up = function(knex, Promise) {
  return knex.schema.table('inputs', function(table) {
    table.string('title');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('inputs', function(table) {
    table.dropColumn('title');
  })
};
