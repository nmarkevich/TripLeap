export { handleSaveTrip }

function handleSaveTrip(event) {
  let location = document.getElementById("location").value;
  let leavingDate = document.getElementById("leavingDate").value;
  console.log("Save Trip form submitted :::");
  console.log(location);
  console.log(leavingDate);
  getInfoForTrip(location, leavingDate);
  event.preventDefault();
}

//Get request to receive API calls result from the server
const getInfoForTrip = async(loc, ld) => {
  const res = await fetch(`http://localhost:8082/tripInfo/${loc}/${ld}`);
}