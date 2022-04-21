import './styles/base.scss'
import './styles/footer.scss'
import './styles/header.scss'
export { handleSaveTrip }

const addButton = document.getElementById("add");
const inputForm = document.getElementById("inputForm");
const outputForm = document.getElementById("outputForm");

addButton.addEventListener("click", () => {
  inputForm.style.visibility="visible";
  inputForm.style.display="flex";
})

function handleSaveTrip(event) {
  let location = document.getElementById("location").value;
  let leavingDate = document.getElementById("leavingDate").value;
  const returningDate = document.getElementById("returningDate").value;
  const validationMsg = document.getElementById("msg");
  const timeDiff = new Date(returningDate).getTime() - new Date(leavingDate).getTime();
  const length = timeDiff/(1000*60*60*24);
  console.log("Save Trip form submitted :::");
  console.log(location);
  console.log(leavingDate);
  console.log(returningDate);
  if(location == "" || leavingDate == "" || returningDate == "") {
    validationMsg.innerHTML = "All fields are required";
    validationMsg.style.color = "red";
    event.preventDefault();
  } else if(length < 0) {
    validationMsg.innerHTML = "Leaving date should be earlier than returning date";
    validationMsg.style.color = "red";
    event.preventDefault();
  } else {
    event.preventDefault();
    console.log("The trip duration: " + length);
    getInfoForTrip(location, leavingDate, length)
      .then(results => updateUI(results));
    outputForm.style.visibility="visible";
    document.getElementById("location").value = '';
    document.getElementById("leavingDate").value = '';
    inputForm.style.display="none";
  }
}

//Get request to receive API calls result from the server
const getInfoForTrip = async(loc, ld, days) => {
  const res = await fetch(`http://localhost:8082/tripInfo/${loc}/${ld}/${days}`);
  const allTrips = res.json();
  return allTrips;
}

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
        weather.innerHTML = "Typical Weather for then is: " + tripsInfo[i].temp + " F" + " (This is a forecast of the 16th day)";
        tripInfo.appendChild(weather);
      } else {
        weather.innerHTML = "Typical Weather for then is: " + tripsInfo[i].temp + " F";
        tripInfo.appendChild(weather);
      }
      trip.appendChild(tripInfo);
      outputForm.appendChild(trip);
    }
  } catch (error) {
    console.log("error", error);
  }
}