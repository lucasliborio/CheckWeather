const postGeoInformationService = require("../services/postGeolocationService")

class postGeoInformationController{
    async handle(req , res){

        const geoInfo = req.body.info;

        const service = new postGeoInformationService()

        const result = await service.execute(geoInfo);

        if(result instanceof Error) {
            return res.status(404).json({error:result.message})
        }
        return res.status(201).json({message:"Log criado com sucesso"})
    }
}

module.exports = postGeoInformationController