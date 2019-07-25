exports.up = function(knex, Promise) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments()

        tbl.string('car_make', 255).notNullable()
        tbl.string('car_model', 255).notNullable()
        tbl.integer('car_mileage', 128)
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cars')
}
