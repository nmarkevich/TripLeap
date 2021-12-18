const fetch = require('node-fetch')
const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  getWeather : async function (lat, lng) {
    const url = "https://api.weatherbit.io/v2.0/current?lat=" + lat + "&lon=" + lng + '&key=' + process.env.WEATHERBIT_API_KEY;
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    const fetch_response = await fetch (url, requestOptions);
    const json = await fetch_response.json();
    console.log(json);
    return json;
  }
};
