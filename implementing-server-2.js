const { ApolloServer, gql } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/federation');

const typeDefs = gql`
  type Query {
    you: OtherUser
  }

  type OtherUser @key(fields: "id") {
    id: ID!
    username: String
  }
`;

const resolvers = {
  Query: {
    you() {
      return { id: "2", username: "@avo" }
    }
  },
  OtherUser: {
    __resolveReference(user, { fetchUserById }){
      return fetchUserById(user.id)
    }
  }
}

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }])
});

server.listen(4002).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});

