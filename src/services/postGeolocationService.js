const geoInformatioon = require('../models/geoInformation')

class postGeolocationService{
    async execute(geoInfo){
        
        try{
            const geolocationsInfo = new geoInformatioon(geoInfo)
    
            await geolocationsInfo.save() 

            return 

        } catch (err){

            return new Error('informações insuficientes para criar um log')

        }
    } 
}

module.exports = postGeolocationService