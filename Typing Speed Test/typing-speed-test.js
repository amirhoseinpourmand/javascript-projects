const theTimer = document.querySelector(".timer");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p");
const testWrapper = document.querySelector(".test-wrapper");
const resetButton = document.querySelector("#reset");

var timer = [0, 0, 0, 0];
var timerRunning = false;
var interval;

var testTexts = [
  "Whatever you are, be a good one.",
  "Be the change you wish to see in the world.",
  "Try and fail, but never fail to try.",
  "Do one thing every day that scares you.",
  "Believe you can and you're halfway there.",
  "Let your memory be your travel bag.",
  "To travel is to take a journey into yourself.",
  "I haven't been everywhere, but it's on my list.",
  "If you come to a fork in the road, take it.",
  "April has put a spirit of youth in everything.",
];


const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const randomNumber = getRandomNumber(0, testTexts.length);
let targetText = originText.innerHTML = testTexts[randomNumber];


function leadingZero(time) {
  if (time <= 9) {
    time = "0" + time;
  }
  return time;
};

function runTimer() {
  timer[0] = Math.floor(timer[3] / 100 / 60);
  timer[1] = Math.floor(timer[3] / 100) - timer[0] * 60;
  timer[2] = Math.floor(timer[3] - timer[1] * 100 - timer[0] * 6000);

  let currentTime =
    leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);

  theTimer.innerHTML = currentTime;

  timer[3]++;
}

function spellCheck() {
  let textEntered = testArea.value;
  let originTextMatch = targetText.substring(0, textEntered.length);

  if (textEntered == targetText) {
    testWrapper.style.borderColor = "green";
    clearInterval(interval);
  } else {
    if (textEntered == originTextMatch) {
      testWrapper.style.borderColor = "yellow";
    } else {
      testWrapper.style.borderColor = "red";
    }
  }
}

function reset() {
  clearInterval(interval);
  interval = null;
  timer = [0, 0, 0, 0];
  timerRunning = false;

  testArea.value = "";
  theTimer.innerHTML = "00:00:00";
  testWrapper.style.borderColor = "gray";

  const secondRandomNumber = getRandomNumber(0, testTexts.length);
  targetText = testTexts[secondRandomNumber];
  originText.innerHTML = targetText;
}

function start() {
  let textEnteredLength = testArea.value.length;
  if (textEnteredLength == 0 && !timerRunning) {
    timerRunning = true;
    interval = setInterval(runTimer, 10);
  }
}

testArea.addEventListener("keypress", start);
testArea.addEventListener("keyup", spellCheck);
resetButton.addEventListener("click", reset);