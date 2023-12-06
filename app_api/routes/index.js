// Fixed thanks to Jacob DeMaris on the general discussions

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authentication');
const tripsController = require('../controllers/trips');
const jwt = require('express-jwt');

const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
});

router.route('/trips').get(tripsController.triplist).post(auth, tripsController.tripsAddTrip);

router.route('/trips/:tripCode').get(tripsController.tripsFindByCode).put(auth, tripsController.tripsUpdateTrip);

router.route('/login').post(authController.login);

router.route('/register').post(authController.register);

module.exports = router;