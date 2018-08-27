'use strict'

const Customer = use('App/Models/Customer')
class CustomerController {

  async getCustomers ({ response }) {
    const customers = await Customer.all()

    response.send(customers)
  }

  async getCustomersWithAddresses ({ response }) {
    const getCustomersWithAddresses = await Customer
      .query()
      .innerJoin('customer_addresses', 'customers.customer_id', 'customer_addresses.customer_id')

    response.send(getCustomersWithAddresses)
  }

  async getCustomerById ({ params, response }) {
    const { id } = params
    const customer = await Customer.findOrFail(id)

    response.send(customer)
  }

  async createCustomer ({ request, response }) {
    const customer = new Customer()
    customer.name = request.input('name')
    await customer.save()

    response.json({
      status: 200,
      message: 'Customer successfully saved!'
    })
  }

  async updateCustomerById ({ params, request, response }) {
    const { id } = params
    const customer = await Customer.findOrFail(id)
    customer.name = request.input('name')

    await customer.save()

    response.json({
      status: 200,
      message: `${customer.name} has been updated!`
    })
  }

  async deleteCustomerById ({ params, response }) {
    const { id } = params
    const customer = await Customer.findOrFail(id)
    if (!customer) {
      return response.json({
        status: 404,
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
