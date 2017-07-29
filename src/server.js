import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';

import schema from './schema';

const app = express();

app.use(
	'/graphiql',
	graphiqlExpress({
		endpointURL: '/graphql'
	})
);

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: schema }));

export default app;
