const axios = require('axios').default
require('dotenv/config')
class getAirQService{
    async execute(lat, long){
        try{

            const response = await axios({
                method:'get',
                url:`https://api.waqi.info/feed/geo:${lat};${long}/?token=${process.env.API_AIQ}`,
                responseType:'json'
            })

            return response.data

        } catch (err) {

            return new Error('não foi possivel coletar informações sobre AirQ');
        }

    }
}

module.exports = getAirQService