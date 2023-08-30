const axios = require('axios');
const { formatDate } = require('../utils/formatDate.js');
const { replaceChuckNorris } = require('../utils/replaceChuckNorris.js');
const { AppStrings } = require('../utils/constants/appStrings.js');


async function ChuckNorrisJokesData() {
    const response = await axios.get(AppStrings.api_cn_url);
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