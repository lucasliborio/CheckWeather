const express = require('express');
const router = express.Router()

const getAirQController = require('../controllers/getAirQController')

router.get('/', new getAirQController().handle)

module.exports = router