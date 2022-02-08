const express = require('express');
const path = require('path');
const cors = require('cors')


const app = express();
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3000

const geoInformation = require('../src/routes/geoInformation')
const weather = require('../src/routes/weather')
const airq = require('../src/routes/airq')

app.use("/geoinformation", geoInformation)
app.use("/weather", weather)
app.use("/airq", airq)


app.listen(port, ()=>{
    console.log('App listening on port ' + port)
})