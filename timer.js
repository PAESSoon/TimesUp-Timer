let row = document.getElementsByClassName("row");
console.log(row);
let start = document.querySelector("#start");
let pause = document.querySelector("#pause");

let colorArr = ["#1e90ff", "#2ed573", "#ffa502", "#ff6348", "#ff4757"];

function startTimer() {
  start.setAttribute(
    "style",
    "box-shadow: inset 0 -4px 6px 4px #3f4ffffa, inset 0 1px 5px 17px #3f42fffa;"
  );

  for (let i = 0; i < row.length; i++) {
    setTimeout(function () {
      let backgroundColor = "background-color:" + colorArr[i] + ";";
      row[i].setAttribute("style", backgroundColor);
    }, i * 3000);
  }
}

function pauseTimer() {}
