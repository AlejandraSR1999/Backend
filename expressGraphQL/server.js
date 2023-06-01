import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from '@graphql-tools/schema';

import typeDefs from './schemas';
import resolvers from './resolvers';

const PORT = 3000;
const endPoint = '/pizza_api';

const app = express();

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

const server = new ApolloServer({ schema });

(async () => {
  await server.start();
  server.applyMiddleware({ app, path: endPoint });

  app.listen(PORT, () => {
      console.log('GraphQL API listen at http://localhost:' + PORT + endPoint);
      console.log(`GraphiQL listen at http://localhost:${PORT}${server.graphqlPath}`);
  });
})();
