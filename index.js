var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handlers = {};
handlers['/'] = requestHandlers.hello;
handlers['/notfound'] = requestHandlers.notFound;
handlers['/impares.html'] = requestHandlers.impar;

server.start(router, handlers);
