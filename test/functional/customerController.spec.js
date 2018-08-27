'use strict'

const { test, trait } = use('Test/Suite')('Customer')
const Customer = use('App/Models/Customer')

const Factory = use('Factory')

trait('DatabaseTransactions')
trait('Test/ApiClient')

test('we can get all the customers', async ({ client }) => {
  const response = await client.get('/customers').end()
  if (response.body) {
    response.assertStatus(200)
  }
})

test('we can find a customer by id', async ({ client }) => {
  const customer = {
    customer_id: 1,
    name: 'Louisa Patrick',
    created_at: '2018-08-26 13:24:16',
    updated_at: '2018-08-26 13:24:16'
  }
  const response = await client.get('customer/1').end()

  response.assertStatus(200)
  response.assertJSONSubset(customer)
})

test('we can get all customers with addresses', async ({ client, assert }) => {
  const response = await client.get('customers-with-addresses').end()
  const { body } = response
  let hasAllProperties = true

  for (let customer of body) {
    if (Object.values(customer).length !== 8) {
      hasAllProperties = false
    }
  }

  assert.isNotFalse(hasAllProperties)
})

test('we can create a customer', async ({ client }) => {
  const customer = {
    customer_id: 999999,
    name: 'Felix Feng',
    created_at: '2018-08-26 13:24:16',
    updated_at: '2018-08-26 13:24:16'
  }

  const response = await client.post('create/customer').send(customer).end()
  response.assertStatus(200)
})

test('we can edit a customer name, given an ID', async ({ client }) => {
  const updatedCustomer = {
    customer_id: 1,
    name: 'Felix Feng',
    created_at: '2018-08-26 13:24:16',
    updated_at: '2018-08-26 13:24:16'
  }
  const response = await client
    .patch(`update/customer/${updatedCustomer.customer_id}`)
    .send(updatedCustomer)
    .end()
  response.assertStatus(200)
})

test('we can delete a customer, given an ID', async ({ client }) => {
  const customer = {
    customer_id: 1,
    name: 'Louisa Patrick',
    created_at: '2018-08-26 13:24:16',
    updated_at: '2018-08-26 13:24:16'
  }
  const response = await client.delete(`delete/customer/${customer.customer_id}`).end()
  response.assertStatus(200)
})

