const fetch = require('node-fetch')
const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  /**
   * @description API call to get random picture based on a given search term
   * @param {string} searchTerm 
   * @returns {string} The link to a picture
   */
  getImage : async function (searchTerm) {
    const url = "https://pixabay.com/api/?key=" + process.env.PIXABAY_API_KEY + "&q=" + searchTerm + "&image_type=photo";
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    let fetch_response = await fetch (url, requestOptions);
    let json = await fetch_response.json();
    if (json.totalHits == 0) {
      const url = "https://pixabay.com/api/?key=" + process.env.PIXABAY_API_KEY + "&q=" + "trip" + "&image_type=photo";
      fetch_response = await fetch (url, requestOptions);
      json = await fetch_response.json();
    }
      const randomIndex = Math.floor(Math.random() * json.hits.length);
      console.log(randomIndex);
      console.log(json);
    return json.hits[randomIndex].webformatURL;
  }
};