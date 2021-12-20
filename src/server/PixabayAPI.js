const fetch = require('node-fetch')
const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  getImage : async function (searchTerm) {
    const url = "https://pixabay.com/api/?key=" + process.env.PIXABAY_API_KEY + "&q=" + searchTerm + "&image_type=photo";
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    const fetch_response = await fetch (url, requestOptions);
    const json = await fetch_response.json();
    console.log(json.hits[0]);
    return json;
  }
};