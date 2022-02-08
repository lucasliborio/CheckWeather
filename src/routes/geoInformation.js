const express = require('express')

const router = express.Router()
const getGeoInformationController = require('../controllers/getGeoInformationController')
const postGeoInformationController = require('../controllers/postGeoInformationController')

//geolocation

router.get('/', new getGeoInformationController().handle)
router.post('/', new postGeoInformationController().handle)


module.exports = router