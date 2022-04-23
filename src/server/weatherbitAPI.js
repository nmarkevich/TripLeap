const fetch = require('node-fetch')
const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  /**
   * @description API call to get temperature for a given longitude, latitude and a date
   * @param {string} lat 
   * @param {string} lng 
   * @param {string} leavingDate 
   * @returns Temperature 
   */
  getWeather : async function (lat, lng, leavingDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tripDate = new Date(leavingDate);
    // Calculate the time difference of two dates
    const differenceTime = tripDate.getTime() - today.getTime();
    // Calculate the number of days between two dates, divide the time difference of both the dates by number of milliseconds in a day
    const differenceDays = Math.round(differenceTime/(1000 * 3600 * 24));
    
    if(differenceDays <= 7) {
      const url = "https://api.weatherbit.io/v2.0/current?lat=" + lat + "&lon=" + lng + '&key=' + process.env.WEATHERBIT_API_KEY;
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      const fetch_response = await fetch (url, requestOptions);
      const json = await fetch_response.json();
      return json.data[0].temp;
    }
    else {
      const url = "https://api.weatherbit.io/v2.0/forecast/daily?lat=" + lat + "&lon=" + lng + '&days=' + differenceDays + '&key=' + process.env.WEATHERBIT_API_KEY;
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      const fetch_response = await fetch (url, requestOptions);
      const json = await fetch_response.json();
      if(differenceDays > 7 & differenceDays <= 16) {
        return json.data[differenceDays-1].temp;
      }
      return json.data[15].temp;
    }
  },
}
