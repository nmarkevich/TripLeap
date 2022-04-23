import app from './displayInfo'

const outputForm = document.getElementById("outputForm");


/**
 * @description Get the data from the form, calls getInfoForTrip to get the info about a trip and calls updateUI to show info to a user
 * @param {*} event
 */
function handleSaveTrip(event) {
  let location = document.getElementById("location").value;
  location.replace(/\s/g, '+');
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
    document.getElementById("returningDate").value = '';
    inputForm.style.display="none";
  }
}

/**
 * @description Sends the data from user to the server and receives the list of all trips
 * @param {string} loc
 * @param {string} ld
 * @param {string} days
 * @return {array} The list of all trips saved on the server
 */
const getInfoForTrip = async(loc, ld, days) => {
  const res = await fetch(`http://localhost:8082/tripInfo/${loc}/${ld}/${days}`);
  const allTrips = res.json();
  return allTrips;
}
  
export { handleSaveTrip }