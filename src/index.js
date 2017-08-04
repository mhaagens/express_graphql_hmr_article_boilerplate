import http from 'http';

import app from './server';
import schema from './schema';

const server = http.createServer(app);
let currentApp = app;

server.listen(3000, () => {
	console.log(`GraphQL-server listening on port 3000.`);
});

if (module.hot) {
	module.hot.accept(['./server', './schema'], () => {
		server.removeListener('request', currentApp);
		server.on('request', app);
		currentApp = app;
	});
}
