'use strict'

const Route = use('Route')

Route.get('/', 'CustomerController.index')
Route.get('customer/:id', 'CustomerController.getById')

Route.post('customer', 'CustomerController.store')

Route.delete('customer/delete/:id', 'CustomerController.delete')

// Route.get('/customers', CustomerController.index
// async () => {
//   return await Customer.all()
// })

// Route.get('/customer/{id}', async () => {
//   return await Customer.get(id)
// })

// Route.post('/create', async (req) => {
//   const customer = new Customer()
//   customer.name = req.name
//   return await Customer.save()
// })