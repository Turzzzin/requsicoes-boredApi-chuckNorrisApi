const express = require('express');
const app = express();
const routes = require('./routes/routes.js');
require('dotenv').config();

const PORT = process.env.port_local;

app.use(express.static('public'));

app.use(express.json());

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});