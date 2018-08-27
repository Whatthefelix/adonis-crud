'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

const Factory = use('Factory')

Factory.blueprint('App/Models/Customer', (faker) => {
  return {
    customer_id: faker.integer(),
    name: faker.name(),
    created_at: faker.date({ year: 1983 }),
    updated_at: faker.date({ year: 1983 })
  }
})

Factory.blueprint('App/Models/CustomerAddress', (faker) => {
  return {
    street_address: faker.address(),
    postal_code: faker.postal(),
    country: faker.country(),
    created_at: faker.date({ year: 1983 }),
    updated_at: faker.date({ year: 1983 })
  }
})