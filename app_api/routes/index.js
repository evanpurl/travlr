// Fixed thanks to Jacob DeMaris on the general discussions

const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');

router.route('/trips').get(tripsController.triplist);

router.route('/trips/:tripCode').get(tripsController.tripsFindByCode);

module.exports = router;