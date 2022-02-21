const fetch = require('node-fetch')
const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  getGeoLocation : async function (city) {
    const url = "http://api.geonames.org/searchJSON?q=" + city + "&maxRows=1&username=" + process.env.GEONAMES_USERNAME;
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    const fetch_response = await fetch (url, requestOptions);
    const json = await fetch_response.json();
    const newData = {
      lng: json.geonames[0].lng,
      lat: json.geonames[0].lat,
      country: json.geonames[0].countryName
    };
    return newData;
}
};