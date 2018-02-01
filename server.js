const hapi = require('hapi');
const server = new hapi.Server();

server.connection({
    port: 3000,
    routes:{
      cors:{ "headers": ["Accept", "Authorization", "Content-Type", "If-None-Match", "Accept-language", "fromhost", "oid"]},
      timeout: { server: 8000 },
      state: {
        parse: false, // parse and store in request.state
        failAction: 'ignore' // may also be 'ignore' or 'log'
      }
    }
});

server.register([
    require('./hello')], (err) => {
    if (err) {
        throw err;
    }
});

server.start((err) => {
    if (err) {
        throw err;
    }
});
