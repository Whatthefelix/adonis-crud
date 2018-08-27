'use strict'

const Route = use('Route')

// Customer Controller routes
Route.get('customers', 'CustomerController.getCustomers')
Route.get('customers-with-addresses', 'CustomerController.getCustomersWithAddresses')
Route.get('customer/:id', 'CustomerController.getCustomerById')
Route.post('create/customer', 'CustomerController.createCustomer')
Route.patch('update/customer/:id', 'CustomerController.updateCustomerById')
Route.delete('delete/customer/:id', 'CustomerController.deleteCustomerById')

// Customer Addresses Controller routes
Route.get('customer-addresses', 'CustomerAddressController.getCustomerAddresses')
Route.post('create/customer-address', 'CustomerAddressController.createCustomerAddress')
Route.patch('update/customer-address/:id', 'CustomerAddressController.updateCustomerAddressById')
Route.delete('delete/customer-address/:id', 'CustomerAddressController.deleteCustomerAddressById')
