let inputNum = document.querySelector(".inputNum");
// let applyBtn = document.querySelector(".applyBtn");
let progressBarFill = document.querySelector(".progress-bar-fill");

function fillBar() {
  let inputValue = inputNum.value;

  if (inputValue < 20) {
    progressBarFill.style.backgroundColor = "red";
  } else if (inputValue >= 20 && inputValue < 65) {
    progressBarFill.style.backgroundColor = "orange";
  } else {
    progressBarFill.style.backgroundColor = "green";
  }

  progressBarFill.style.width = `${inputValue}%`;
}
