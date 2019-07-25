exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('cars').insert([
        { car_make: 'test car', car_model: 'test', car_mileage: 10000 },
        { car_make: 'test car', car_model: 'test', car_mileage: 10000 },
        { car_make: 'test car', car_model: 'test', car_mileage: 10000 }
      ])
    })
}
