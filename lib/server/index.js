'use strict';

const Hapi = require('@hapi/hapi');

const Routes = require('../routes');
const Plugins = require('./plugins');


exports.start = async function() {
  const server = Hapi.server({
    port: 8080,
    router: {isCaseSensitive: false}
  });

  await server.register(Plugins);

  server.route(Routes);

  await server.start();

  // eslint-disable-next-line no-console
  console.log('Server running on %s', server.info.uri);
  // eslint-disable-next-line no-console
  console.log('Documentation at:', `${server.info.uri }/documentation`);
};


process.on('unhandledRejection', (err) => {
  // eslint-disable-next-line no-console
  console.log(err);
});
