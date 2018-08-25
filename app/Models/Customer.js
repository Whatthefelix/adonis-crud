'use strict'

const Model = use('Model')

class Customer extends Model {

  static get primaryKey () {
    return 'id'
  }

}

module.exports = Customer
