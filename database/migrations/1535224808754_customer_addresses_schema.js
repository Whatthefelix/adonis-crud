'use strict'

const Schema = use('Schema')

class CustomerAddressesSchema extends Schema {
  up () {
    this.create('customer_addresses', (table) => {
      table.increments()
      table.string('customer_id')
      table.foreign('customer_id').references('customer_id')
        .on('customers').onDelete('cascade')
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
