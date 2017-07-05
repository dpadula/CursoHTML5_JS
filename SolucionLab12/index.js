// INICIO APP Express
var express = require('express');
var app = express();
var server = require('http').Server(app);
var bodyParser = require('body-parser');
// configuracion express
var port = process.env.PORT || 4100; // configuro el puerto

// ===== rutas
var rutaAreas = require('./app/rutas/areas');


//========================================================================
// =========== MIDDLEWARE DE MANEJO DE HTTP ==============================
//========================================================================
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    'extended': 'true'
})); // parseo application/x-www-form-urlencoded
app.use(bodyParser.json()); // parseo application/json

//============================================
// API REST
//============================================
app.use('/api/areas', rutaAreas);

server.listen(port);
console.log("Servidor escuchando peticiones en el puerto " + port);