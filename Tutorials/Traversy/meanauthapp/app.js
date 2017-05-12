const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//Conexion a Base de datos mediante archivo de configuracion
mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
    console.log('Conectado a BD MongoDB '+config.database);
});

mongoose.connection.on('error', (err) => {
    console.log('Error al conectar a BD MongoDB '+err);
});

const app = express();

const port = 3000;

const users = require('./routes/users') ;

//CORS 
app.use(cors());

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser
app.use(bodyParser.json());

app.use('/users', users);

//Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
})

//Server Port
app.listen(port, () => {
    console.log('Server iniciado en puerto: '+port);
});