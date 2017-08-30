exports.up = function(knex, Promise) {
  return createTriathleteTable()
    .then(createDivisionTable)
    .then(createCompetitionTable)
    .then(createCompetitionOddsTable)
    .then(createDefMajorEventTable)
    .then(createDefMinorEventTable)
    .then(createMajorEventTable)
    .then(createMinorEventTable)
    .then(createResultTable);


  function createTriathleteTable() {
    return knex.schema.createTableIfNotExists('triathlete', function (t) {
      t.increments('id_triathlete').primary().unique().unsigned()
      t.string('first_name', 50).notNullable()
      t.string('last_name', 50).notNullable()
      t.string('nick_name', 50)
      t.string('description', 250)
    })
  }

  function createDivisionTable() {
    return knex.schema.createTableIfNotExists('def_division', function (t) {
      t.increments('id_def_division').primary().unique().unsigned()
      t.string('division_name', 50).notNullable()
      t.string('division_desc', 500)
    })
  }

  function createCompetitionTable() {
    return knex.schema.createTableIfNotExists('competition', function (t) {
      t.increments('id_competition').primary().unique().unsigned()
      t.integer('year').notNullable().unsigned()
      t.date('date').notNullable()
      t.string('location', 50).notNullable()
      t.string('description', 250)
      t.integer('competition_division_id').unsigned().index().references('id_def_division').inTable('def_division')
    })
  }

  function createCompetitionOddsTable() {
    return knex.schema.createTableIfNotExists('competition_odd', function (t) {
      t.increments('id_competition_odd').primary().unique().unsigned()
      t.integer('competition_odd_competition_id').unsigned().index().references('id_competition').inTable('competition')
      t.integer('competition_odd_triathlete_id').unsigned().index().references('id_triathlete').inTable('triathlete')
      t.string('description', 250)
    })
  }

  function createDefMajorEventTable() {
    return knex.schema.createTableIfNotExists('def_major_event_type', function (t) {
      t.increments('id_def_major_event_type').primary().unique().unsigned()
      t.string('event_name', 100).notNullable()
      t.string('division_desc', 500).notNullable()
    })
  }

  function createDefMinorEventTable() {
    return knex.schema.createTableIfNotExists('def_minor_event_type', function (t) {
      t.increments('id_def_minor_event_type').primary().unique().unsigned()
      t.string('event_name', 100).notNullable()
      t.string('division_desc', 500).notNullable()
    })
  }

  function createMajorEventTable() {
    return knex.schema.createTableIfNotExists('major_event', function (t) {
      t.increments('id_major_event').primary().unique().unsigned()
      t.integer('major_event_def_major_event_type_id').unsigned().index().references('id_def_major_event_type').inTable('def_major_event_type')
      t.integer('major_event_competition_id').unsigned().index().references('id_competition').inTable('competition')
    })
  }

  function createMinorEventTable() {
    return knex.schema.createTableIfNotExists('minor_event', function (t) {
      t.increments('id_minor_event').primary().unique().unsigned()
      t.integer('minor_event_major_event_id').unsigned().index().references('id_major_event').inTable('major_event')
      t.integer('minor_event_def_minor_event_type_id').unsigned().index().references('id_def_minor_event_type').inTable('def_minor_event_type')
    })
  }

  function createResultTable() {
    return knex.schema.createTableIfNotExists('result', function (t) {
      t.increments('id_result').primary().unique().unsigned()
      t.integer('result_minor_event_id').unsigned().index().references('id_minor_event').inTable('minor_event')
      t.integer('result_triathlete_id').unsigned().index().references('id_triathlete').inTable('triathlete')
      t.integer('result_opponent_id').unsigned().index().references('id_triathlete').inTable('triathlete')
      t.integer('result_score_win_place').unsigned().defaultTo(0).notNullable()
    })
  }
};

exports.down = function(knex, Promise) {
  return dropTriathleteTable()
  .then(dropDivisionTable)
  .then(dropCompetitionTable)
  .then(dropCompetitionOddsTable)
  .then(dropDefMajorEventTable)
  .then(dropDefMinorEventTable)
  .then(dropMajorEventTable)
  .then(dropMinorEventTable)
  .then(dropResultTable);

  function dropTriathleteTable() {
    return knex.schema.dropTableIfExists('triathlete')
  }

  function dropDivisionTable() {
    return knex.schema.dropTableIfExists('def_division')
  }

  function dropCompetitionTable() {
    return knex.schema.dropTableIfExists('competition')
  }

  function dropCompetitionOddsTable() {
    return knex.schema.dropTableIfExists('competition_odd')
  }

  function dropDefMajorEventTable() {
    return knex.schema.dropTableIfExists('def_major_event_type')
  }
  
  function dropDefMinorEventTable() {
    return knex.schema.dropTableIfExists('def_minor_event_type')
  }

  function dropMajorEventTable() {
    return knex.schema.dropTableIfExists('major_event')
  }

  function dropMinorEventTable() {
    return knex.schema.dropTableIfExists('minor_event')
  }

  function dropResultTable() {
    return knex.schema.dropTableIfExists('result')
  }
};
