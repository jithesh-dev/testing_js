// Global Variables
let optionTags = [];

// Selectors
const optionDivs = document.querySelectorAll('.options');
const selectBox = document.getElementById('select-display');
const optionsContainer = document.getElementsByClassName('options-container')[0];
const optionTagSpan = document
  .getElementById('select-display')
  .getElementsByTagName('span')[0];

// Event Listeners
for (const optionDiv of optionDivs) {
  optionDiv.addEventListener('click', checkOption);
}

selectBox.addEventListener('click',showHideDropdown);

// Functions
function checkOption(e) {
  checkbox = this.getElementsByTagName('input')[0];
  checkbox.checked = !checkbox.checked;
  optionStr = this.getElementsByTagName('label')[0].innerHTML;
  if (checkbox.checked) {
    optionTags.push(optionStr);
  } else {
    optionTags = optionTags.filter((e) => e !== optionStr);
  }
  optionStr = optionTags.join();
//   console.log(optionStr.replace(',', ', '));
  optionStr = optionStr.replace(/,/g, " , ");
  optionTagSpan.textContent = optionStr;
}

function showHideDropdown(e){
    optionsContainer.classList.toggle("active");
}