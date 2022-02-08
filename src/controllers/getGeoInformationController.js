const getGeoInformationService = require("../services/getGeoInformationService")

class getGeoInformationController{
    async handle(req , res){
        
        const service = new getGeoInformationService()

        const result = await service.execute();

        if(result instanceof Error) return res.status(200).json(result.message)
        
        return res.status(200).json(result)
    }
}

module.exports = getGeoInformationController