const express = require('express');
const router = express.Router()

const getWeatherController = require('../controllers/getWeatherController')

router.get('/', new getWeatherController().handle)

module.exports = router