const express = require('express');
const router = express.Router();

//Registracion
router.get('/register', (req, res, next)=> {
    res.send('REGISTRARSE');
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