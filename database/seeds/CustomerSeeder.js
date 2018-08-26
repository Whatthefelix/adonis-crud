'use strict'

/*
|--------------------------------------------------------------------------
| CustomerSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')

class CustomerSeeder {
  async run () {
    const customers = await Factory.model('App/Models/Customer').createMany(5)
    const address = await Factory.model('App/Models/CustomerAddress').makeMany(5)

    customers.forEach((customer, index) => {
      customer.address().save(address[index])
    });
  }
}

module.exports = CustomerSeeder
