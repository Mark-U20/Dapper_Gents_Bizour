require('dotenv').config();
const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');
const PORT = process.env.PORT || 3111;
const { authMiddleware } = require('./auth');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/build')));

const stripe = require('stripe')(process.env.STRIPE_API_KEY);

const storeListings = new Map([
  ['1', { id: '1', name: 'Guitar', price: 1000 }],
  ['2', { id: '2', name: 'Drums', price: 2000 }],
  ['3', { id: '3', name: 'Piano', price: 3000 }],
]);

async function startServer(typeDefs, resolvers) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,

    context: authMiddleware,
  });

  await server.start();

  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log('Express started on port %s', PORT);
      console.log('GraphQL is ready on %s', server.graphqlPath);
    });
  });
}

startServer(typeDefs, resolvers);
