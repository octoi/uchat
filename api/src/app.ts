import express from 'express';
import cors from 'cors';
import { log } from './utils/log';
import { schema } from './graphql';
import { ApolloServer } from 'apollo-server-express';

const main = async () => {
  const app = express();

  // apply middlewares
  app.use(cors());
  app.use(express.json());

  const server = new ApolloServer({ schema, context: ({ req }) => ({ req }) });
  await server.start();

  server.applyMiddleware({ app, path: '/api' });

  // start server
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    log.success(`🚀 SERVER STARTED ON PORT ${port}`);
    log.info(`SERVER : http://localhost:${port}`);
    log.info(`GRAPHQL: http://localhost:${port}${server.graphqlPath}`);
  });
};

main().catch((err) => log.error(err));
