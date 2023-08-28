const express = require('express');
const router = express.Router();
const { ChuckNorrisJokesData, BoredApiActivitiesData } = require('../controllers/controllers.js');

router.get('/', (req, res) => {
    res.status(200).send('Esse é o app do grupo 5');
});

router.get('/api/piadas', async (req, res) => {
    let jokesResponse = await ChuckNorrisJokesData();
    console.log(jokesResponse);
    res.status(200).send(jokesResponse);
});

router.get('/api/atividades', async (req, res) => {
    let activityResponse = await BoredApiActivitiesData();
    console.log(activityResponse);
    res.status(200).send(activityResponse);
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