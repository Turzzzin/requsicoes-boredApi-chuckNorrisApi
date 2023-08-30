const express = require('express');
const app = express();
const routes = require('./routes/routes.js');
const { AppNumbers } = require('./utils/constants/appNumbers.js');
const PORT = AppNumbers.serverPort;

app.use(express.static('public'));

app.use(express.json());

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});