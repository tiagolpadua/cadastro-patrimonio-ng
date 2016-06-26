var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    routes = require('../app/routes');

//app.use(express.static('./client_gabarito'));
app.use(express.static('./client_exercicios'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

module.exports = app;
