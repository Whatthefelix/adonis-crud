'use strict'

const Route = use('Route')

// Customer Controller routes
Route.get('/', 'CustomerController.index')
Route.get('customer/:id', 'CustomerController.getById')
Route.patch('update/customer/:id', 'CustomerController.update')
Route.post('create/customer', 'CustomerController.store')
Route.delete('delete/customer/:id', 'CustomerController.delete')

// Customer Addresses Controller routes
Route.get('customer-addresses', 'CustomerAddressController.index')
Route.patch('update/customer-address/:id', 'CustomerAddressController.update')
Route.post('create/customer-address', 'CustomerAddressController.store')
Route.delete('delete/customer-address/:id', 'CustomerAddressController.delete')
