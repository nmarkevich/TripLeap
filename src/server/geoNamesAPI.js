const fetch = require('node-fetch')

module.exports = {
  getGeoLocation : async function (req, res) {

    const fetch_response = await fetch ("http://api.geonames.org/searchJSON?q=Wheeling&maxRows=1&username=");
    const json = await fetch_response.json();
    res.json(json);
    console.log(json);
}
};