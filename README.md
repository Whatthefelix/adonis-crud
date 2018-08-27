This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Setup
Manually clone the repo and then run `npm install`.

Database settings are in the env.example because this is just a test project

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