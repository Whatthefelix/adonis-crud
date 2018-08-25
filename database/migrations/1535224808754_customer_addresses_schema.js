'use strict'

const Schema = use('Schema')

class CustomerAddressesSchema extends Schema {
  up () {
    this.create('customer_addresses', (table) => {
      table.increments()
      table.string('street_address')
      table.string('postal_code')
      table.string('country')
      table.timestamps()
    })
  }

  down () {
    this.drop('customer_addresses')
  }
}

module.exports = CustomerAddressesSchema
