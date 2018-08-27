## Setup
Manually clone the repo and then run `npm install`.

Install the adonis CLI
npm i -g @adonisjs/cli

Copy the .env.example file into the .env
create the .env file with `touch .env`,
then you can edit the file with `vim` and paste the contents from .env.example

Run the command `adonis key:generate` to generate an APP_KEY



### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

Run the following command to seed the database
```js
adonis seed
```

Run the following command to run the written tests
```js
adonis test
```