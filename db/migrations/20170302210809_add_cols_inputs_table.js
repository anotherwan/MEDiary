
exports.up = function(knex, Promise) {
  return knex.schema.table('inputs', function(table) {
    table.string('body_part_id');
    table.float('pain_rating');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('inputs', function(table) {
    table.dropColumn('body_part_id');
    table.dropColumn('pain_rating');
  })
};
