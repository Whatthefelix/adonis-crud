'use strict'

const Customer = use('App/Models/Customer')

class CustomerController {

  async index ({ response }) {
    const customers = await Customer.all()

    response.send(customers)
  }

  async getCustomersAndAddresses ({ response }) {
    const customersAndAddresses = await Customer
      .query()
      .innerJoin('customer_addresses', 'customers.customer_id', 'customer_addresses.customer_id')

    response.send(customersAndAddresses)
  }

  async getById ({ params, response }) {
    const { id } = params
    const customer = await Customer.find(id)

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

  async update ({ params, request, response }) {
    const { id } = params
    const customer = await Customer.find(id)
    customer.name = request.input('name')

    await customer.save()

    response.json({
      status: 200,
      message: `${customer.name} has been updated!`
    })
  }

  async delete ({ params, response }) {
    const { id } = params
    const customer = await Customer.find(id)
    if (!customer) {
      return response.json({
        status: 400,
        message: 'Customer not found'
      })
    }
    await customer.delete()
    // because sqlite doesn't have foreign keys
    // we manually delete the address associated with this customer
    await customer.address().delete()

    response.json({
      status: 200,
      message: `${customer.name} successfully deleted`
    })
  }
}

module.exports = CustomerController
