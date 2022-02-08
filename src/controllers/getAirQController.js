const getAirQService = require('../services/getAirQService')

class getAirQController{
    async handle(req , res){  
        
        const { latitude, longitude } = req.query

        const service = new getAirQService()

        const response = await service.execute(latitude, longitude)

        if(response instanceof Error) return res.status(404).json({ error: response.message })

        return res.status(200).json(response)
        
    }
}

module.exports = getAirQController