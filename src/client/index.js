import './styles/base.scss'
import './styles/footer.scss'
import './styles/header.scss'
export { handleSaveTrip }

const saveButton = document.getElementById("add");
const inputForm = document.getElementById("inputForm");
const outputForm = document.getElementById("results");

saveButton.addEventListener("click", () => {
  inputForm.style.visibility="visible";
})

function handleSaveTrip(event) {
  let location = document.getElementById("location").value;
  let leavingDate = document.getElementById("leavingDate").value;
  console.log("Save Trip form submitted :::");
  console.log(location);
  console.log(leavingDate);
  getInfoForTrip(location, leavingDate)
    .then(results => updateUI(results));
  event.preventDefault();
  results.style.visibility="visible";
  document.getElementById("location").value = '';
  getElementById("leavingDate").value = '';
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
    document.getElementById("city").innerHTML = tripsInfo[0].city;
    document.getElementById("startDate").innerHTML = tripsInfo[0].leavingDate;
    document.getElementById("temp").innerHTML = tripsInfo[0].temp;
    document.getElementById("pic").innerHTML = tripsInfo[0].pic;
  } catch (error) {
    console.log("error", error);
  }
}