const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    res.status(200).send('Essa é o app do grupo 5');
});

router.get('/api/piadas', async (req, res) => {
    axios.get('https://api.chucknorris.io/jokes/random')
        .then((response) => {
            const apiData = response.data;
            const responseApi = {
                data_atualizacao: apiData.updated_at,
                data_criacao: apiData.created_at,
                icone:apiData.icon_url,
                id:apiData.id,
                piada:apiData.value,
                referencia:apiData.url,
            };
            res.json(responseApi);
        });
});

router.get('/api/atividades', async (req, res) => {
    axios.get('https://www.boredapi.com/api/activity')
        .then((response) => {
            const boredData = response.data;
            res.json(boredData);
    })
});

module.exports = router;

// Retorno API CHUCK NORRIS
/* {"categories":[],
"created_at":"2020-01-05 13:42:24.142371",
"icon_url":"https://assets.chucknorris.host/img/avatar/chuck-norris.png",
"id":"YSHDZHoTSuqUWoDPdzioLw",
"updated_at":"2020-01-05 13:42:24.142371",
"url":"https://api.chucknorris.io/jokes/YSHDZHoTSuqUWoDPdzioLw",
"value":"The arc of triumph in Paris is Chuck Norris cock-ring."} 
*/

// RETORNO API BORED-API
/* 
{"activity":"Practice coding in your favorite lanaguage",
"type":"recreational",
"participants":1,
"price":0,
"link":"",
"key":"7096020",
"accessibility":0.1}
*/