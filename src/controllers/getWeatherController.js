const getWeatherService = require('../services/getWeatherService')

class getWeatherController{
    async handle(req , res){  
        
        const { latitude, longitude } = req.query

        const service = new getWeatherService()

        const response = await service.execute(latitude, longitude);

        if(response instanceof Error) return res.status(404).json({ error: response.message });

        return res.json(response)
        
    }
}

module.exports = getWeatherController