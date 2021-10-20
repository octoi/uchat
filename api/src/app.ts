import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { log } from './utils/log';
import { schema } from './graphql';

const app = express();

// apply middlewares
app.use(cors());
app.use(express.json());
app.use('/api', graphqlHTTP({ graphiql: true, schema })); // graphql hookup

// start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  log.success(`🚀 SERVER STARTED ON PORT ${port}`);
  log.info(`SERVER : http://localhost:${port}`);
  log.info(`GRAPHQL: http://localhost:${port}/api`);
});
