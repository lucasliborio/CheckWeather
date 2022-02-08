const axios = require('axios').default
require('dotenv/config')
class getWeatherService{
    async execute(lat, long){
        
        try{
            const response = await axios({
                method:'get',
                url:`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.API_KEY}&units=metric`,
                responseType:'json'
    
            });
            return response.data

        } catch (err){
            
            return new Error('não foi possivel coletar informações sobre OpenWeather');

        }
    }
}

module.exports = getWeatherService