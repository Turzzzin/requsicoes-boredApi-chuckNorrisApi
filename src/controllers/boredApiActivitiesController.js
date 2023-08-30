const axios = require('axios');
require('dotenv').config();
const { guidGenerator } = require('../utils/utils.js');

const bored_url = process.env.api_bored_url;

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

module.exports = { BoredApiActivitiesData };