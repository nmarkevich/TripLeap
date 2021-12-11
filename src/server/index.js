var path = require('path')
const express = require('express')
const cors = require ('cors')
const geoName = require('./geoNamesAPI.js')
const weatherbit = require ('./weatherbitAPI.js')

const app = express()
app.use(cors())

app.use(express.static('dist'))

console.log(__dirname)

// designates what port the app will listen to for incoming requests
app.listen(8082, function () {
    console.log('TripLeap app listening on port 8082!')
})

// app.get('/tripInfo/:loc/:ld', geoName.getGeoLocation);

app.get('/tripInfo/:loc/:ld', weatherbit.getWeather);
