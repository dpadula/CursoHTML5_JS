var http = require('http');
var fs = require('fs');

function send404(response) {
    response.writeHead(404, {
        'Content-Type': 'text/plain'
    });
    response.write('Error 404: Resource not found.');
    response.end();
}
var server = http.createServer(function (req, res) {
    if (req.method == 'GET' && req.url == '/hola') {
        res.writeHead(200, {
            'content-type': 'text/html'
        });
        fs.createReadStream('./public/saludo.html').pipe(res);
    } else {
        if (req.method == 'GET' && req.url == '/docente') {
            res.writeHead(200, {
                'content-type': 'application/json'
            });
            fs.createReadStream('./public/objeto.json').pipe(res);
        } else {
            send404(res); //invocar a una función que envía un mensaje de error al cliente
        }
    }
}).listen(3000);
console.log('server running on port 3000');