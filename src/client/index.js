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
  const validationMsg = document.getElementById("msg");
  console.log("Save Trip form submitted :::");
  console.log(location);
  console.log(leavingDate);
  if(location == "" || leavingDate == "") {
    validationMsg.innerHTML = "Both fields are required";
    validationMsg.style.color = "red";
    event.preventDefault();
  } else {
    getInfoForTrip(location, leavingDate)
      .then(results => updateUI(results));
    event.preventDefault();
    outputForm.style.visibility="visible";
    document.getElementById("location").value = '';
    document.getElementById("leavingDate").value = '';
    inputForm.style.display="none";
  }
}

//Get request to receive API calls result from the server
const getInfoForTrip = async(loc, ld) => {
  const res = await fetch(`http://localhost:8082/tripInfo/${loc}/${ld}`);
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
    let weather = document.createElement("div");

    for (let i=0; i < tripsInfo.length; i++) {

      pic.src = tripsInfo[i].pic;
      city.innerHTML = "Trip to: " + tripsInfo[i].city + ', ' + tripsInfo[i].country;
      trip.appendChild(pic);
      tripInfo.appendChild(city);
      startDate.innerHTML = "Departing: " + tripsInfo[i].leavingDate;
      tripInfo.appendChild(startDate);
      weather.innerHTML = "Typical Weather for then is: " + tripsInfo[i].temp + "F";
      tripInfo.appendChild(weather);
      trip.appendChild(tripInfo);
      outputForm.appendChild(trip);
    }
  } catch (error) {
    console.log("error", error);
  }
}