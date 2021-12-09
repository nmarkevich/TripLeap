const fetch = require('node-fetch')
const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  getGeoLocation : async function (req, res) {
    const cityName = req.params.loc;
    const url = "http://api.geonames.org/searchJSON?q=" + cityName + "&maxRows=1&username=" + process.env.GEONAMES_USERNAME;
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