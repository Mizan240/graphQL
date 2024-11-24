const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schemas/userSchema');
const { resolvers } = require('./resolvers/userResolver');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server is running at ${url}`);
});
