let row = document.getElementsByClassName("row");
let start = document.querySelector("#start");
let pause = document.querySelector("#pause");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");

let colorArr = ["#1e90ff", "#2ed573", "#ffa502", "#ff6348", "#ff4757"];

let timeOutSetUp;
let myInterval;

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
    setTimeout(startTimer, 3000);
  } catch (Exception) {
    console.log(Exception);
  }
  i++;
}

function pauseTimer() {
  isActive = false;
  clearInterval(minuteInterval);
  clearInterval(secondInterval);
  // second.innerHTML = 15;
}

function resetTimer() {
  isActive = true;
  i = 0;
  for (let j = 0; j < row.length; j++) {
    row[j].setAttribute("style", "background-color:#f1f2f6;");
  }
  clearInterval(secondInterval);
  clearInterval(minuteInterval);
  second.innerHTML = "00";
  minute.innerHTML = 1;
}

function startTime() {
  console.log("clicked");
  if (parseInt(minute.innerHTML) === 0) {
    minuteInterval = setInterval(minuteIntervalSetUp, 0);
  } else {
    minuteInterval = setInterval(minuteIntervalSetUp, 60000);
  }
  while (minute.innerHTML > 0) {
    minute.innerHTML = parseInt(minute.innerHTML) - 1;
    console.log(second.innerHTML);
  }
  // setTimeout(startTime, 3000);

  // secondInterval = setInterval(secondIntervalSetUp, 1000);
}

function secondIntervalSetUp() {
  if (parseInt(second.innerHTML) === 0) {
    second.innerHTML = 60;
  }

  if (second.innerHTML > 10) {
    second.innerHTML = parseInt(second.innerHTML) - 1;
  } else {
    second.innerHTML = "0" + (parseInt(second.innerHTML) - 1);
  }

  // console.log(second.innerHTML.length);
}

function minuteIntervalSetUp() {
  while (minute.innerHTML > 0) {
    minute.innerHTML = parseInt(minute.innerHTML) - 1;
    console.log(second.innerHTML);
  }
  // minute.innerHTML = parseInt(minute.innerHTML) - 1;
  // console.log(second.innerHTML);
  // if (minute.innerHTML === 0) {
  //   clearInterval(minuteInterval);
  // }
}
