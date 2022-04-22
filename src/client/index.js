import './styles/base.scss'
import './styles/footer.scss'
import './styles/header.scss'
import logo from './images/logo.jpg'
import banner from './images/banner.jpg'
export { handleSaveTrip } from './js/saveTripInfo'

const addButton = document.getElementById("add");
const inputForm = document.getElementById("inputForm");

addButton.addEventListener("click", () => {
  inputForm.style.visibility="visible";
  inputForm.style.display="flex";
})