import { makeExecutableSchema } from 'graphql-tools';

const RootQuery = `
  type RootQuery {
    hello_world: String!
   }
`;

const SchemaDefinition = `
  schema {
    query: RootQuery
  }
`;

export default makeExecutableSchema({
	typeDefs: [SchemaDefinition, RootQuery],
	resolvers: {
		RootQuery: {
			hello_world: () => 'Hi from GraphQL!!!'
		}
	}
});
