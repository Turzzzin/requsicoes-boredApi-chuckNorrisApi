const axios = require('axios');
require('dotenv').config();
const { guidGenerator, formatDate, replaceChuckNorris } = require('../utils/utils.js');

const cn_url = process.env.api_cn_url;
const bored_url = process.env.api_bored_url;


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

async function BoredApiActivitiesData() {
    const response = await axios.get(bored_url);
    const activityResponse = response.data;
    const newGuid = guidGenerator();
    let formatedBoredResponse = {
        id: newGuid,
        atividade: activityResponse.activity,
        tipo: activityResponse.type,
        participantes: activityResponse.participants,
        acessibilidade: activityResponse.accessibility
    };
    return formatedBoredResponse;
}
module.exports = { ChuckNorrisJokesData, BoredApiActivitiesData };