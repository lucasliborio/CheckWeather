const geoInformation = require('../models/geoInformation')

class getGeoInformationService{
    async execute(){

        const geolocationInfo = await geoInformation.find({})

        if(!geolocationInfo) return new Error({error:"can't find any geoinformation log"})

        return geolocationInfo
    }
}

module.exports = getGeoInformationService