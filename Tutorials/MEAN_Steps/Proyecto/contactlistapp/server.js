var express = require("express");
var app = express();

//Solo para pruebas
// app.get('/', function(req, res){
//     res.send("Hola desde servidor Express");    
// });

app.use(express.static(__dirname + "/public"));

var portNumber = 3000;
app.listen(portNumber);
console.log("Server levantado escuchando en puerto: " + portNumber);
