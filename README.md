# UCHAT 💬

Yet another messaging app 😀.

Uchat is a chat app where users can create rooms and chat together. It like clubhouse but for chatting.

| Tech                                                         | Usage                        |
| ------------------------------------------------------------ | ---------------------------- |
| [Typescript](https://www.typescriptlang.org/)                | Programming language         |
| [Node Js](https://nodejs.org/en/)                            | Server with express          |
| [Next Js](https://nextjs.org/)                               | Web app                      |
| [GraphQL](https://graphql.org/) / [ApolloGraphql](https://www.apollographql.com/) | To query server              |
| [PostgreSQL](https://www.postgresql.org/)                    | Database                     |
| [Redis](https://redis.io/)                                   | For saving real time data    |
| [Prisma](https://prisma.io/)                                 | ORM                          |
| [Socket IO](https://socket.io/)                              | For real time connection     |
| [Tailwind CSS](https://tailwindcss.com/)                     | For styling web app          |
| [Chakra UI](https://chakra-ui.com/)                          | To build web app faster      |
| [Hookstate](https://hookstate.js.org/)                       | State management for web app |

## SETUP

Well its core part is made using [NODE JS](https://nodejs.org/en/), [POSTGRES](https://www.postgresql.org/) & [REDIS](https://redis.io/), so you need that installed by default and [NPM](https://www.npmjs.com/package/download) of course 😌.

### API

move to `/api` which contains all server code, which includes a Graphql API and a Socket IO server for real time connection.

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

>  well you must need to run Prisma migration btw

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

### CLIENT

client is created using Next JS.

> If you didn't or break any steps above, or the server live on port 5000, you are good to go 😇

move to `/app`

**<u>INSTALL DEPENDENCIES</u>**

```bash
$ npm install
# Or using yarn
$ yarn install
```

**<u>RUN CLIENT</u>**

```bash
$ npm run dev
# Or using yarn
$ yarn dev
```

You can check `app/package.json` for other scripts
