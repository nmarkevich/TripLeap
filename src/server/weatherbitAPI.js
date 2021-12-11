const fetch = require('node-fetch')
const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  getWeather : async function (req, res) {
    const cityName = req.params.loc;
    const url = "https://api.weatherbit.io/v2.0/current?lat=51.5072&lon=-0.1276&" + 'key=' + process.env.WEATHERBIT_API_KEY;
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    const fetch_response = await fetch (url, requestOptions);
    const json = await fetch_response.json();
    res.json(json);
    console.log(json);
}
};
