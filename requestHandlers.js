var exec = require('child_process').exec;

function hello(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Ola a todos!");
    response.end();
}

function notFound(request, response) {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write("Nao encontrado!");
    response.end();
}

function impar(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("<!DOCTYPE html><html><head></head><body>");
    response.write("<h2>Impares</h2>");
    for(var i = 1; i <=100; i++)
        if(i%2 !== 0)
            response.write("<p>"+ i + "</p>");
    response.write("</body></html>");
    response.end();
}

exports.hello = hello;
exports.notFound = notFound;
exports.impar = impar;
