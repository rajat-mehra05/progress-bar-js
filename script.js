let inputNum = document.querySelector(".inputNum");
let applyBtn = document.querySelector(".applyBtn");
let progressBarFill = document.querySelector(".progress-bar-fill");

let i = 0;

function fillBar() {
  let inputValue = inputNum.value;

  showBar(inputValue, i);
}

function showBar(inputValue, i) {
  setTimeout(() => {
    if (i < inputValue) {
      i++;
      progressBarFill.style.width = i + "%";

      if (i < 20) {
        progressBarFill.style.backgroundColor = "red";
      } else if (i >= 20 && i < 75) {
        progressBarFill.style.backgroundColor = "yellow";
      } else {
        progressBarFill.style.backgroundColor = "green";
      }
      showBar(inputValue, i);
    }
  }, 10);
}
