var express = require("express");
var app = express();

//Solo para pruebas
// app.get('/', function(req, res){
//     res.send("Hola desde servidor Express");    
// });

app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(req, res){
    console.log("Recibi una solicitud GET");
    // res.send("Hola desde servidor Express");  
    person1 = {
        name: "Tim",
        email: "tim@email.com",
        phone: "111-111-111"
    };

    person2 = {
        name: "Emily",
        email: "emy@email.com",
        phone: "222-222-222"
    };

    person3 = {
        name: "John",
        email: "john@email.com",
        phone: "333-333-333"
    };

    contactlist = {person1, person2, person3};
    res.json(contactlist);
});

var portNumber = 3000;
app.listen(portNumber);
console.log("Server levantado escuchando en puerto: " + portNumber);
