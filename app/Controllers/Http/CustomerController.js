'use strict'

const Customer = use('App/Models/Customer')

class CustomerController {

  async index ({ response }) {
    const customers = await Customer.all()
    console.log(customers)
    // response.send('yeet')
    response.send(customers)
  }

  async getById ({ params, response }) {
    const customer = await Customer.find(params.id)

    response.send(customer)
  }

  async store ({ request, response }) {
    const customer = new Customer()
    customer.name = request.input('name')
    await customer.save()

    response.json({
      status: 200,
      message: 'Customer successfully saved!'
    })
  }

  // also handle deleting from customer addresses
  async delete ({ params, response }) {
    const customer = await Customer.find(params.id)
    if (!customer) {
      return response.json({
        status: 400,
        message: 'Customer not found'
      })
    }

    await customer.delete()

    response.json({
      status: 200,
      message: `${customer.name} successfully deleted`
    })
  }
}

module.exports = CustomerController
