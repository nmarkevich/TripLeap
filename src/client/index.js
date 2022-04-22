import './styles/base.scss'
import './styles/footer.scss'
import './styles/header.scss'
export { handleSaveTrip } from './js/saveTripInfo'

const addButton = document.getElementById("add");
const inputForm = document.getElementById("inputForm");

addButton.addEventListener("click", () => {
  inputForm.style.visibility="visible";
  inputForm.style.display="flex";
})