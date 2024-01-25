const { ApolloServer,gql } = require('apollo-server-express');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

async function startApolloServer() {
  const app = express();
  
const typeDefs = gql`
    type Query {
        greetings: String
    }
`;

const resolver = {};
  const server = new ApolloServer({
	typeDefs,
	resolver
  });

  await server.start();

  // Apply middleware AFTER calling server.start()
  server.applyMiddleware({ app });

  // Additional Express app configuration and routes if needed

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/graphql`);
  });
}

startApolloServer();



