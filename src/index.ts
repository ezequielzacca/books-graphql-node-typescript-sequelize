import { loadFixtures } from "./database/fixtures";
import { initializeDB } from "./models/models";
import { ApolloServer, gql } from "apollo-server-express";
import { typeDefs } from "./graphql/type-defs";
import { resolvers } from "./graphql/resolvers";

import express from "express";

const startServer = async () => {
  const app = express();

  // Resolvers define the technique for fetching the types in the
  // schema.  We'll retrieve books from the "books" array above.

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true
  });

  server.applyMiddleware({ app });

  // This `listen` method launches a web-server.  Existing apps
  // can utilize middleware options, which we'll discuss later.
  app.listen({ port: process.env.PORT || 4000 }, () => {
    console.log(
      `🚢 Server Shipped at http://localhost:${process.env.PORT || 4000}${
        server.graphqlPath
      }`
    );
  });
};

startServer()
  .then(async () => {
    await initializeDB();
    await loadFixtures();
  })
  .catch(console.log);
