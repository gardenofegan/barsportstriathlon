
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('blind_doubles', function (t) {
    t.increments('id_blind_doubles').primary().unique().unsigned()
    t.integer('blind_doubles_competition_id').unsigned().index().references('id_competition').inTable('competition')
    t.integer('blind_doubles_triathlete_id').unsigned().index().references('id_triathlete').inTable('triathlete')
    t.integer('blind_doubles_partner_id').unsigned().index().references('id_triathlete').inTable('triathlete')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('blind_doubles')
}