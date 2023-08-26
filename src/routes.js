const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

const cn_url = process.env.api_cn_url;

router.get('/', (req, res) => {
    res.status(200).send('Essa é o app do grupo 5');
});

router.get('/cn-jokes', async (req, res) => {
    axios.get(cn_url)
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

module.exports = router;

/* {"categories":[],
"created_at":"2020-01-05 13:42:24.142371",
"icon_url":"https://assets.chucknorris.host/img/avatar/chuck-norris.png",
"id":"YSHDZHoTSuqUWoDPdzioLw",
"updated_at":"2020-01-05 13:42:24.142371",
"url":"https://api.chucknorris.io/jokes/YSHDZHoTSuqUWoDPdzioLw",
"value":"The arc of triumph in Paris is Chuck Norris cock-ring."} */