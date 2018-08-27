'use strict'

const Model = use('Model')

class CustomerAddress extends Model {
  customer () {
    return this.belongsTo('App/Models/Customer')
  }
}

module.exports = CustomerAddress
