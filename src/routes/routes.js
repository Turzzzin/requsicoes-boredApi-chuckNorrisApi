const express = require('express');
const router = express.Router();
const { BoredApiActivitiesData } = require('../controllers/boredApiActivitiesController.js');
const { ChuckNorrisJokesData } = require('../controllers/chuckNorrisJokesController.js');
const { AppStrings } = require('../utils/constants/appStrings.js');
const { AppNumbers } = require('../utils/constants/appNumbers.js');

router.get(AppStrings.messagePath, (req, res) => {
    res.status(AppNumbers.statusCodeSucess).send('Sucesso na inicialização da aplicação!');
});

router.get(AppStrings.jokesPath, async (req, res) => {
    let jokesResponse = await ChuckNorrisJokesData();
    console.log(jokesResponse);
    res.status(AppNumbers.statusCodeSucess).send(jokesResponse);
});

router.get(AppStrings.activitiesPath, async (req, res) => {
    let activityResponse = await BoredApiActivitiesData();
    console.log(activityResponse);
    res.status(AppNumbers.statusCodeSucess).send(activityResponse);
});

module.exports = router;