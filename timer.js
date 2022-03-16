let row = document.getElementsByClassName("row");
// console.log(row);
let start = document.querySelector("#start");
let pause = document.querySelector("#pause");

let colorArr = ["#1e90ff", "#2ed573", "#ffa502", "#ff6348", "#ff4757"];

let timeOutSetUp;

// function startTimer() {
//   start.setAttribute(
//     "style",
//     "box-shadow: inset 0 -4px 6px 4px #3f4ffffa, inset 0 1px 5px 17px #3f42fffa;"
//   );

//   for (let i = 0; i < row.length; i++) {
//     timeOutSetUp = setTimeout(function () {
//       console.log(i);
//       let backgroundColor = "background-color:" + colorArr[i] + ";";
//       row[i].setAttribute("style", backgroundColor);
//     }, i * 3000);
//   }
// }

let i = 0,
  isActive = true;
function startTimer() {
  console.log(i);
  if (!isActive) {
    i = 0;
    return;
  }
  try {
    let backgroundColor = "background-color:" + colorArr[i] + ";";
    row[i].setAttribute("style", backgroundColor);
    setTimeout(startTimer, 3000);
  } catch (Exception) {
    console.log(Exception);
  }
  i++;
}

function pauseTimer() {
  isActive = false;
}

function resetTimer() {
  isActive = true;
  i = 0;
  for (let j = 0; j < row.length; j++) {
    row[j].setAttribute("style", "background-color:#f1f2f6;");
  }
}
