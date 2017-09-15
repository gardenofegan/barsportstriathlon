
exports.up = function (knex, Promise) {
  return knex.schema.table('triathlete', function (t) {
    t.integer('primary_division_id').unsigned().index().references('id_def_division').inTable('def_division')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('triathlete', function (t) {
    t.dropColumn('primary_division_id')
  })
}
