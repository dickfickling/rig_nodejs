var Hapi = require('hapi');
var helper = require('./lib/helper');

// Create a server with a host and port
var server = Hapi.createServer('localhost', 5454);

// Add the route
server.route({
    method: 'GET',
    path: '/rig',
    handler: function (request, reply) {
        helper.getIdentity(reply);
    }
});

// Start the server
server.start();
