let row = document.getElementsByClassName("row");
let start = document.querySelector("#start");
let pause = document.querySelector("#pause");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");
let timerContainer = document.querySelector("#timer-column");

let colorArr = ["#1e90ff", "#2ed573", "#ffa502", "#ff6348", "#ff4757"];

let timeOutSetUp;
let myInterval;
const colorDelay = 60000;
const minutesDelay = 60000;
const secondsDelay = 1000;
const secondsCycle = 60;

let i = 0,
  isActive = true;
function startTimer() {
  // console.log(i);
  start.setAttribute(
    "style",
    "box-shadow: inset 0 -4px 6px 4px #3f4ffffa, inset 0 1px 5px 17px #3f42fffa;"
  );

  if (!isActive) {
    i = 0;
    return;
  }
  try {
    let backgroundColor = "background-color:" + colorArr[i] + ";";
    row[i].setAttribute("style", backgroundColor);
    setTimeout(startTimer, colorDelay);
  } catch (Exception) {
    console.log(Exception);
  }
  i++;
}

function pauseTimer() {
  isActive = false;
  isMinutesActive = false;
  isSecondsActive = false;
}

function resetTimer() {
  isActive = true;
  isMinutesActive = true;
  isSecondsActive = true;

  i = 0;
  for (let j = 0; j < row.length; j++) {
    row[j].setAttribute("style", "background-color:#f1f2f6;");
  }

  second.innerHTML = "00";
  minute.innerHTML = 5;
}

let isMinutesActive = true;
function startMinutes() {
  if (!isMinutesActive || parseInt(minute.innerHTML) === 0) {
    return;
  }

  minute.innerHTML = parseInt(minute.innerHTML) - 1;
  setTimeout(startMinutes, minutesDelay);
}

let isSecondsActive = true;
function startSeconds() {
  if (!isSecondsActive) {
    return;
  }
  if (parseInt(minute.innerHTML) === 0 && parseInt(second.innerHTML) === 0) {
    timerContainer.setAttribute(
      "style",
      "animation: shake 0.5s; animation-iteration-count: 2;"
    );
  }
  if (parseInt(second.innerHTML) === 0) {
    second.innerHTML = secondsCycle;
  }
  if (second.innerHTML > 10) {
    second.innerHTML = parseInt(second.innerHTML) - 1;
  } else {
    second.innerHTML = "0" + (parseInt(second.innerHTML) - 1);
  }
  setTimeout(startSeconds, secondsDelay);
}
