const axios = require('axios');
const { formatDate } = require('../utils/functions/formatDate.js');
const { replaceChuckNorris } = require('../utils/functions/replaceChuckNorris.js');
const { AppStrings } = require('../utils/constants/appStrings.js');
const { guidGenerator } = require('../utils/functions/guidGenerator.js');

async function ChuckNorrisJokesData() {
    const response = await axios.get(AppStrings.api_cn_url);
    const jokesResponse = response.data;
    const newGuid = guidGenerator();
    let formatedJokesResponse = {
        data_atualizacao: formatDate(jokesResponse.updated_at),
        data_criacao: formatDate(jokesResponse.created_at),
        icone: jokesResponse.icon_url,
        id: newGuid,
        piada: replaceChuckNorris(jokesResponse.value),
        referencia: jokesResponse.url,
    };
    return formatedJokesResponse;
}

module.exports = { ChuckNorrisJokesData };