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


### Testing

Run the following command to run the written tests
```js
adonis test
```
### Running

Run the following to spin up a local server
```js
adonis serve --dev
```

### Migrations

Run the following command to seed the database
```js
adonis seed
```