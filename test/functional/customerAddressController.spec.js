'use strict'

const { test, trait } = use('Test/Suite')('CustomerAddress')
const CustomerAddress = use('App/Models/CustomerAddress')
const Customer = use('App/Models/Customer')

const Factory = use('Factory')

trait('DatabaseTransactions')
trait('Test/ApiClient')

test('we can get all the addresses', async ({ client }) => {
  const response = await client.get('/customer-addresses').end()
  response.assertStatus(200)
})

test('we can create an address, given a customer_id', async ({ client }) => {
  const address = {
    "id": 1,
    "customer_id": "1",
    "street_address": "857 Danhew Grove",
    "postal_code": "R8P 5O9",
    "country": "IE",
    "created_at": "2018-08-26 13:24:16",
    "updated_at": "2018-08-26 13:24:16"
  }

  const response = await client.post('create/customer-address')
    .send(address)
    .end()

  response.assertStatus(200)
})

test('we can edit an address, given a customer_id', async ({ client }) => {
  const address = {
    "id": 1,
    "customer_id": "1",
    "street_address": "857 Danhew Grove",
    "postal_code": "R8P 5O9",
    "country": "IE",
    "created_at": "2018-08-26 13:24:16",
    "updated_at": "2018-08-26 13:24:16"
  }
  const response = await client.patch(`update/customer-address/${address.customer_id}`)
    .send(address)
    .end()
  response.assertStatus(200)
})

test('we can delete an address, given a customer_id', async ({ client }) => {
  const address = {
    "id": 1,
    "customer_id": "1",
    "street_address": "857 Danhew Grove",
    "postal_code": "R8P 5O9",
    "country": "IE",
    "created_at": "2018-08-26 13:24:16",
    "updated_at": "2018-08-26 13:24:16"
  }
  const response = await client.delete(`delete/customer-address/${address.customer_id}`)
    .send(address)
    .end()
  response.assertStatus(200)
})