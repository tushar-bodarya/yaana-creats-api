const { ApolloServer } = require('apollo-server')
const typeDefs = require('./src/product/schema')
const resolvers = require('./src/product/resolver')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  cors: {
    origin: ["https://www.yaanacreats.com/"],
  }
})

server
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }) => console.log('Server is running on localhost:4000', url))
