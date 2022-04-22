
/**
  * @description Shows all saved trips on UI
 * @param {Array} tripsInfo
 */
function updateUI (tripsInfo) {
  try {
    console.log(tripsInfo);
    let trip = document.createElement("div");
    let tripInfo = document.createElement("div");
    trip.id = "result";
    tripInfo.id = "info";
    let pic = document.createElement("img");
    let city = document.createElement("div");
    let startDate = document.createElement("div");
    let daysDiff = document.createElement("div");
    let weather = document.createElement("div");
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i=0; i < tripsInfo.length; i++) {
      const tripDate = new Date(tripsInfo[i].leavingDate);
      // Calculate the time difference between the leaving date and today
      const differenceTime = tripDate.getTime() - today.getTime();
      // Calculate the number of days between two dates
      const differenceDays = Math.round(differenceTime/(1000 * 3600 * 24));
  
      pic.src = tripsInfo[i].pic;
      city.innerHTML = "Trip to: " + tripsInfo[i].city + ', ' + tripsInfo[i].country;
      trip.appendChild(pic);
      tripInfo.appendChild(city);
      startDate.innerHTML = "Departing: " + tripsInfo[i].leavingDate;
      tripInfo.appendChild(startDate);
      daysDiff.innerHTML = "Length of the trip: " + tripsInfo[i].daysDiff + " days";
      tripInfo.appendChild(daysDiff);
      if (differenceDays > 16) {
        weather.innerHTML = "Typical Weather for then is: " + tripsInfo[i].temp + " C" + " (This is a forecast of the 16th day)";
        tripInfo.appendChild(weather);
      } else {
        weather.innerHTML = "Typical Weather for then is: " + tripsInfo[i].temp + " C";
        tripInfo.appendChild(weather);
      }
      trip.appendChild(tripInfo);
      outputForm.appendChild(trip);
    }
  } catch (error) {
    console.log("error", error);
  }
}

export default { updateUI };
