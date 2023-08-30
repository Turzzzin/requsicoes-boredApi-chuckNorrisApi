const axios = require('axios');
const { guidGenerator } = require('../utils/guidGenerator.js');
const { AppStrings } = require('../utils/constants/appStrings.js');

async function BoredApiActivitiesData() {
    const response = await axios.get(AppStrings.api_bored_url);
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

module.exports = { BoredApiActivitiesData };