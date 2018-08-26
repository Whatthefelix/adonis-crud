'use strict'

const Customer = use('App/Models/Customer')
const CustomerAddress = use('App/Models/CustomerAddress')

class CustomerAddressController {
  async getCustomerAddresses ({ response }) {
    const customerAddresses = await CustomerAddress.all()

    response.send(customerAddresses)
  }

  async createCustomerAddress ({ request, response }) {
    const customer = await Customer.findOrFail(request.input('customer_id'))
    if (!customer) {
      return response.json({
        status: 404,
        message: 'No customer found'
      })
    }

    const customerAddress = new CustomerAddress()

    customerAddress.customer_id = customer.customer_id
    customerAddress.street_address = request.input('street_address')
    customerAddress.postal_code = request.input('postal_code')
    customerAddress.country = request.input('country')

    await customerAddress.save()

    response.json({
      status: 200,
      message: 'Customer Address successfully saved!'
    })
  }

  async updateCustomerAddressById({ params, request, response }) {
    const { id } = params
    const address = await CustomerAddress.findOrFail(id)
    address.street_address = request.input('street_address')
    address.postal_code = request.input('postal_code')
    address.country = request.input('country')

    await address.save()

    response.json({
      status: 200,
      message: 'Address successfully updated!'
    })
  }

  async deleteCustomerAddressById ({ params, response }) {
    const { id } = params
    const customerAddress = await CustomerAddress.findOrFail(id)

    await customerAddress.delete()

    response.json({
      status: 200,
      message: 'Address successfully deleted'
    })
  }
}

module.exports = CustomerAddressController
