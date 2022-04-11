let row = document.getElementsByClassName("row");
let start = document.querySelector("#start");
let pause = document.querySelector("#pause");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");
let btnAdd = document.querySelector("#btn-add");
let btnMin = document.querySelector("btn-minus");
let timerContainer = document.querySelector("#timer-column");
let colorArr = ["#1e90ff", "#2ed573", "#ffa502", "#ff6348", "#ff4757"];

let initialMinuteVal = parseInt(minute.innerHTML);
let initialTotalTime =
  parseInt(minute.innerHTML) * 60000 + parseInt(second.innerHTML) * 1000;
let totalTime = initialTotalTime;
let colorDelay = initialTotalTime / 5;

function minus() {
  minute.innerHTML--;
  initialTotalTime =
    parseInt(minute.innerHTML) * 60000 + parseInt(second.innerHTML) * 1000;
  totalTime = initialTotalTime;
  colorDelay = initialTotalTime / 5;

  console.log("In Function, initialTotalTime: " + initialTotalTime);
  console.log("In Function, totalTime: " + totalTime);
  console.log("In Function, colorDelay: " + colorDelay);
}

function add() {
  minute.innerHTML++;
  initialTotalTime =
    parseInt(minute.innerHTML) * 60000 + parseInt(second.innerHTML) * 1000;
  totalTime = initialTotalTime;
  colorDelay = initialTotalTime / 5;
}

console.log("initialTotalTime: " + initialTotalTime);

const minutesDelay = 60000;
const secondsDelay = 1000;
const secondsCycle = 60;

// ********* Color column countdown *********
let i = 0;
let startTimerTimeOut = null;
function startTimer() {
  start.setAttribute(
    "style",
    "box-shadow: inset 0 -4px 6px 4px #3f4ffffa, inset 0 1px 5px 17px #3f42fffa;"
  );

  if (!isActive) {
    return;
  }

  console.log("in StartTimer, i = : " + i);
  try {
    let backgroundColor = "background-color:" + colorArr[i] + ";";
    row[i].setAttribute("style", backgroundColor);
    startTimerTimeOut = setTimeout(startTimer, colorDelay);
  } catch (Exception) {
    console.log(Exception);
  }
  i++;
}

let isActive = false;
let activateTimerTimeOut = null;
function activateTimer() {
  console.log(totalTime);
  if (isActive) {
    isActive = false;
    isMinutesActive = false;
    isSecondsActive = false;
    start.innerHTML = "Start";
    clearTimeout(startTimerTimeOut);
    clearTimeout(activateTimerTimeOut);
  } else {
    isActive = true;
    isMinutesActive = true;
    isSecondsActive = true;
    start.innerHTML = "Pause";
    if (totalTime === initialTotalTime) {
      startTimer();
    } else {
      activateTimerTimeOut = setTimeout(startTimer, totalTime % colorDelay);
    }
    startSeconds();
  }
}

// ********* Seconds countdown *********
let isSecondsActive = true;

function startSeconds() {
  if (parseInt(minute.innerHTML) === 0 && parseInt(second.innerHTML) === 0) {
    console.log("in startSeconds - 1st if");
    // console.log(count);
    timerContainer.setAttribute(
      "style",
      "animation: shake 0.5s; animation-iteration-count: 2;"
    );

    return;
  }
  if (!isSecondsActive) {
    return;
  }

  if (parseInt(second.innerHTML) === 0) {
    second.innerHTML = secondsCycle;
  }
  if (second.innerHTML > 10) {
    second.innerHTML = parseInt(second.innerHTML) - 1;
  } else {
    second.innerHTML = "0" + (parseInt(second.innerHTML) - 1);
  }

  if (parseInt(second.innerHTML) === 59) {
    minute.innerHTML -= 1;
  }

  totalTime -= 1000;

  console.log("totalTime: " + totalTime);
  // console.log("initialTotalTime: " + initialTotalTime);

  setTimeout(startSeconds, secondsDelay);
}

function resetTimer() {
  isActive = false;
  isMinutesActive = false;
  isSecondsActive = false;
  start.innerHTML = "Start";
  i = 0;

  for (let j = 0; j < row.length; j++) {
    row[j].setAttribute("style", "background-color:#f1f2f6;");
  }

  second.innerHTML = "00";
  minute.innerHTML = initialMinuteVal;
  totalTime = initialMinuteVal * 60000 + parseInt(second.innerHTML) * 1000;
  clearTimeout(startTimerTimeOut);
  clearTimeout(activateTimerTimeOut);
}
