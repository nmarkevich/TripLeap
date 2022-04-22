import app from './displayInfo'

const outputForm = document.getElementById("outputForm");

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
      .then(results => app.updateUI(results));
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
  
export { handleSaveTrip }