const mongoose = require('../database/index')

const GeoInformationSchema = mongoose.Schema({
    coord:{
        lat:{type:String, required:true},
        lon:{type:String, required:true},
        
    },
    temp:{
        temp:Number,
        feels_like:Number,
        temp_min:Number,
        temp_max:Number,
        pressure:Number,
        humidity:Number,
        weather:String

    },
    aqi:{
        type:Number
    },

    cityName:{
        type:String
    },
    cityStation:{
        geo:[{type:Number}],
        name:String,
        url:String
    },
    attributions:[{
        url:String,
        name:"String",
    }]

});

const geoInformation = mongoose.model('geoinfomation', GeoInformationSchema)

module.exports = geoInformation