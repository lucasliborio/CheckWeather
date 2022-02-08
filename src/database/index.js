const mongoose = require('mongoose')

require('dotenv/config')

mongoose.connect(`mongodb+srv://${process.env.MDB_USER}:${process.env.MDB_PASS}@cluster0.ekpwh.mongodb.net/check_weather_proj?retryWrites=true&w=majority`)

module.exports = mongoose