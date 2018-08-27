## Setup
Manually clone the repo and then run `npm install`.

Install the adonis CLI
```js
npm i -g @adonisjs/cli
```

Copy the .env.example file into the .env

create the .env file with `touch .env`,

then you can edit the file with `vim` and paste the contents from .env.example

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