'use strict';

exports.register = function(server, options, next) {
    
    server.route({
        method: 'GET',
        path: '/',
        handler: function(request, reply) {
            return reply({hello:"world"});
        }
    });
    
    server.route({
        method: 'GET',
        path: '/loaderio-d17e3909378d40373e16fba08bb1f9b3/',

        handler: function(request, reply) {
            reply("loaderio-d17e3909378d40373e16fba08bb1f9b3");
        }
    });

    return next();
};

exports.register.attributes = {
    name: 'routes-hello'
};
