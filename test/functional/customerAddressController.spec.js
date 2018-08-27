'use strict'

const { test, trait } = use('Test/Suite')('Customer')
const CustomerAddress = use('App/Models/CustomerAddress')

const Factory = use('Factory')

trait('DatabaseTransactions')
trait('Test/ApiClient')

test('we can get all the addresses', async ({ client }) => {
  const response = await client.get('/customer-addresses').end()
  response.assertStatus(200)
})