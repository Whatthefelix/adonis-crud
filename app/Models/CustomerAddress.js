'use strict'

const Model = use('Model')

class CustomerAddress extends Model {
  customer () {
    return this.hasOne('App/Models/Customer')
  }
}

module.exports = CustomerAddress
