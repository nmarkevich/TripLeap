var path = require('path')
const express = require('express')
const cors = require('cors')
const geoName = require('./geoNamesAPI.js')
const weatherbit = require('./weatherbitAPI.js')
const pixabay = require('./PixabayAPI.js')
const res = require('express/lib/response')
const console = require('console')

const app = express()
app.use(cors())

app.use(express.static('dist'))

console.log(__dirname)

let tripsData = [];

// designates what port the app will listen to for incoming requests
app.listen(8082, function () {
  console.log('TripLeap app listening on port 8082!')
})

app.get('/tripInfo/:loc/:ld/:days', function (req, res) {
  let trip = {
    city: req.params.loc,
    country: '',
    leavingDate: req.params.ld,
    daysDiff: req.params.days,
    temp: '',
    pic: '',
  };

  geoName.getGeoLocation(trip.city)
    .then(results => {
      const weatherTemp = weatherbit.getWeather(results.lat, results.lng, trip.leavingDate);
      trip.country = results.country;
      return weatherTemp;
    })
    .then(result => {
      trip.temp = result;
      const img = pixabay.getImage(trip.city);
      return img;
    })
    .then(result => {
      trip.pic = result;
      tripsData.push(trip);
      console.log(tripsData);
      res.send(tripsData);
    })
    .catch((err) => console.log(err));
});
