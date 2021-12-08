export { handleSaveTrip }

function handleSaveTrip(event) {
  let zipCode = document.getElementById("zipCode").value
  let leavingDate = document.getElementById("leavingDate").value
  console.log("Save Trip form submitted :::")
  console.log(zipCode)
  console.log(leavingDate)
  getInfoForTrip(zipCode, leavingDate);
  event.preventDefault();
}

//Get request to receive API calls result from the server
const getInfoForTrip = async(zc, ld) => {
  const res = await fetch(`http://localhost:8082/tripInfo/${zc}/${ld}`);
}