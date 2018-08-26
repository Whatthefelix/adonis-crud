'use strict'

const Model = use('Model')

class Customer extends Model {
  static get primaryKey() {
    return 'customer_id'
  }

  address () {
    return this.hasOne('App/Models/CustomerAddress')
  }
}

module.exports = Customer
