const express = require('express');
const app = express();

let envio = require('../controllers/correocontroller');
app.post('/envio',envio.envioCorreo);

module.exports = app;