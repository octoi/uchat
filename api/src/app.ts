import http from 'http';
import express from 'express';
import cors from 'cors';
import { log } from './utils/log';
import { schema } from './graphql';
import { ApolloServer } from 'apollo-server-express';
import { Server as SocketServer } from 'socket.io';
import { handleSocketIoConnection } from './socketio';

const main = async () => {
  const app = express();
  const httpServer = http.createServer(app);

  // apply middlewares
  app.use(cors());
  app.use(express.json());

  const server = new ApolloServer({ schema, context: ({ req }) => ({ req }) });
  await server.start();

  server.applyMiddleware({ app, path: '/api' });

  // socket io
  const io = new SocketServer(httpServer);
  io.listen(httpServer, { cors: { origin: '*' } });
  handleSocketIoConnection(io);

  // start server
  const port = process.env.PORT || 5000;
  httpServer.listen(port, () => {
    log.success(`🚀 SERVER STARTED ON PORT ${port}`);
    log.info(`SERVER : http://localhost:${port}`);
    log.info(`GRAPHQL: http://localhost:${port}${server.graphqlPath}`);
  });
};

main().catch((err) => log.error(err));
