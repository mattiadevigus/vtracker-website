const express = require('express');
const routerBasics = require('./routes/routerBasics');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", routerBasics);

module.exports = app;