const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

//Registracion
router.post('/register', (req, res, next)=> {
    // res.send('REGISTRARSE');
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
    });

    User.addUser(newUser, (err, user) => {
        if(err) {
            res.json({success: false, msg: 'Fallo al registrar usuario'});
        }else
        {
            res.json({success: true, msg: 'Usuario registrado'});
        }
    })
});

//Autenticar
router.get('/authenticate', (req, res, next)=> {
    res.send('AUTENTICARSE');
});

//Profile
router.get('/profile', (req, res, next)=> {
    res.send('PROFILE');
});

//Autenticar
router.get('/validate', (req, res, next)=> {
    res.send('VALIDATE');
});

module.exports = router;