const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');

const gateway = new ApolloGateway({
  // NOTE: Here the we have a service with a valid URL but a missing "name" property.
  serviceList: [{"service":"should-be-name", "url":"http://localhost:4001/graphql"}]
});

const server = new ApolloServer({
  gateway,
  subscriptions: false,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
