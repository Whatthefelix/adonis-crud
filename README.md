## Setup
Manually clone the repo and then run `npm install`.

Install the adonis CLI
```js
npm i -g @adonisjs/cli
```

Create the .env file with `touch .env`,

Next, copy the contents of the .env.example file

into the newly created `.env`

you can edit the file with `vim .env` and paste the contents of .env.example

Run the following command to generate an APP_KEY
```adonis key:generate```


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

Run the following command to seed the database
```js
adonis seed
```

### Testing

Run the following command to run the written tests
```js
adonis test
```