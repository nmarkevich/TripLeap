const fetch = require('node-fetch')
const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  getWeather : async function (lat, lng, leavingDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tripDate = new Date(leavingDate);
    // Calculate the time difference of two dates
    const differenceTime = tripDate.getTime() - today.getTime();
    // Calculate the no. of days between two dates, divide the time difference of both the dates by no. of milliseconds in a day
    const differenceDays = Math.round(differenceTime/(1000 * 3600 * 24));
    //  If the trip is within a week, you will get the current weather forecast. If the trip is in the future, you will get a predicted forecast.
    if(differenceDays > 7) {
      const url = "https://api.weatherbit.io/v2.0/forecast/daily?lat=" + lat + "&lon=" + lng + '&days=' + differenceDays + '&key=' + process.env.WEATHERBIT_API_KEY;
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      const fetch_response = await fetch (url, requestOptions);
      const json = await fetch_response.json();
      return json.data[differenceDays-1].temp;
    }
    else {
      const url = "https://api.weatherbit.io/v2.0/current?lat=" + lat + "&lon=" + lng + '&key=' + process.env.WEATHERBIT_API_KEY;
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      const fetch_response = await fetch (url, requestOptions);
      const json = await fetch_response.json();
      return json.data[0].temp;
    }
  }
};
