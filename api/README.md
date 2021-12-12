### API

move to `/api` which contains all server code, which includes a Graphql API and a Socket IO server for real time connection.

```bash
$ cd api
```

## Docker setup

You need `docker`, `docker-compose`, & `npm` installed on your system in order to do this.

1. Install dependencies and build files

   ```bash
   $ npm install
   $ npm run build
   
   # Or using yarn
   
   $ yarn install
   $ yarn build
   ```

2. Create docker container

   ```bash
   $ docker build -t uchat .
   ```

3. Docker compose

   ```bash
   $ docker-compose up
   ```

Now you will have a graphql server on http://localhost:5000

## Manual Setup

**<u>SETUP ENVIRONMENT</u>**

create a file named `.env` in root of `/api`

```bash
$ touch .env
```

fill that file with your env variables, you can find examples from `.env-example`

```bash
# File: `.env-example`

DATABASE_URL="postgresql://postgres:password@localhost:5432/uchat?schema=public"
JWT_KEY="never gonna give you up"

# Uncomment this if you are using redis without default configuration
# REDIS_URL="REDIS URL"
```

**<u>INSTALL DEPENDENCIES</u>**

```bash
$ npm install
# Or using yarn
$ yarn install
```

**<u>SETUP DATABASE</u>**

create a database named `uchat` in Postgres

```sql
CREATE DATABASE uchat;
```

You can skip the above step if you want

> well you must need to run Prisma migration btw

```bash
$ npm run migrate
# Or using yarn
$ yarn migrate
```

run redis server

```bash
$ redis-server
```

**<u>RUN SERVER</u>**

1. run dev server

   ```bash
   $ npm run dev
   # Or using yarn
   $ yarn dev
   ```

2. run server with ts-node (kinda like production)

   ```bash
   $ npm start
   # Or using yarn
   $ yarn start
   ```

3. build code for production

   ```bash
   $ npm run build
   # Or using yarn
   $ yarn build
   ```

4. run build code (run only after build)

   ```bash
   $ npm run js-start
   # Or using yarn
   $ yarn js-start
   ```

5. run build code for development (run only after build)

   ```bash
   $ npm run js-dev
   # Or using yarn
   $ yarn js-dev
   ```
