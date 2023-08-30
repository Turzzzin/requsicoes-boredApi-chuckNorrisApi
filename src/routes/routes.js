const express = require('express');
const router = express.Router();
const { BoredApiActivitiesData } = require('../controllers/boredApiActivitiesController.js');
const { ChuckNorrisJokesData } = require('../controllers/chuckNorrisJokesController.js');

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