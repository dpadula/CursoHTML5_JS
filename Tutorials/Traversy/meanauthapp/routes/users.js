const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/users');

//Registracion
router.post('/register', (req, res, next) => {
    // res.send('REGISTRARSE');
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
    });

    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({
                success: false,
                msg: 'Fallo al registrar usuario'
            });
        } else {
            res.json({
                success: true,
                msg: 'Usuario registrado'
            });
        }
    })
});

//Autenticar
router.get('/authenticate', (req, res, next) => {
    // res.send('AUTENTICARSE');    
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({success: false, msg: 'Usuario no encontrado'});
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign(user, config.secret, {
                    expiresIn: 604800 // 1 semana
                });
                res.json({
                    success: true,
                    token: 'JWT '+token,
                    user: {
                        id: user._id,
                        name: user.name, 
                        username: user.username,
                        email: user.email,                        
                    }
                });
            } else {
                return res.json({success: false, msg: 'Contraseña incorrecta'});
            }
        })
    });

});

//Profile
router.get('/profile', (req, res, next) => {
    res.send('PROFILE');
});

//Autenticar
router.get('/validate', (req, res, next) => {
    res.send('VALIDATE');
});

module.exports = router;