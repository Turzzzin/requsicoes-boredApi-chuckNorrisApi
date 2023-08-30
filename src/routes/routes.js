const express = require('express');
const router = express.Router();
const { BoredApiActivitiesData } = require('../controllers/boredApiActivitiesController.js');
const { ChuckNorrisJokesData } = require('../controllers/chuckNorrisJokesController.js');
const { AppStrings } = require('..utils/constants/appStrings.js');

router.get(AppStrings.messagePath, (req, res) => {
    res.status(200).send('Esse é o app do grupo 5');
});

router.get(AppStrings.jokesPath, async (req, res) => {
    let jokesResponse = await ChuckNorrisJokesData();
    console.log(jokesResponse);
    res.status(200).send(jokesResponse);
});

router.get(AppStrings.activitiesPath, async (req, res) => {
    let activityResponse = await BoredApiActivitiesData();
    console.log(activityResponse);
    res.status(200).send(activityResponse);
});

module.exports = router;