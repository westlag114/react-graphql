const { ApolloServer } = require("apollo-server");
const { loadSchemaSync } = require("@graphql-tools/load");
const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader");

const schema = loadSchemaSync("mockServer/schema.graphql", {
  loaders: [new GraphQLFileLoader()],
});

// サーバーを起動する
const server = new ApolloServer({ schema, mocks: true });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
