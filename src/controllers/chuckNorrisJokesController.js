const axios = require('axios');
require('dotenv').config();
const { formatDate, replaceChuckNorris } = require('../utils/utils.js');

const cn_url = process.env.api_cn_url;

async function ChuckNorrisJokesData() {
    const response = await axios.get(cn_url);
    const jokesResponse = response.data;
    let formatedJokesResponse = {
        data_atualizacao: formatDate(jokesResponse.updated_at),
        data_criacao: formatDate(jokesResponse.created_at),
        icone: jokesResponse.icon_url,
        id: jokesResponse.id,
        piada: replaceChuckNorris(jokesResponse.value),
        referencia: jokesResponse.url,
    };
    return formatedJokesResponse;
}

module.exports = { ChuckNorrisJokesData };