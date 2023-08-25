const express = require('express');
const app = express();
const PORT = 3000;
const routes = require('./routes.js');

app.use(express.json());

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});