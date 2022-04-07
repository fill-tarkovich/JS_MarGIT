const circles = document.querySelectorAll(".circle");
const start = document.querySelector("#start");
const finish = document.querySelector("#stop");
const overlay = document.querySelector("#overlay");
const closeBtn = document.querySelector("#close");
const scoreText = document.querySelector("#score");
const resultText = document.querySelector("#result");
let soundTrack = document.querySelector(".sound-track");

let score = 0;
let pace = 1000;
let timer;
let active = 0;

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const clickedCircle = (i) => {
  if (i !== active) {
    endGame();
  } else {
    score++;
    scoreText.textContent = score;
  }
};

const startGame = () => {
  circles.forEach((circle, i) => {
    circle.addEventListener("click", () => clickedCircle(i));
  });

  let nextActive = pickNew(active);
  circles[nextActive].classList.toggle("active");
  circles[active].classList.remove("active");
  active = nextActive;
  timer = setTimeout(startGame, pace);
  pace = pace - 10;
  function pickNew(active) {
    let nextActive = getRndInteger(0, 3);
    if (nextActive != active) {
      return nextActive;
    } else {
      return pickNew(active);
    }
  }
  start.style.display = "none";
  finish.style.display = "unset";
  soundTrack.play();
};

const endGame = () => {
  clearTimeout(timer);
  overlay.style.visibility = "visible";
  resultText.textContent = `Your score is ${score}`;
  let audio = new Audio("0008820.mp3");
  soundTrack.pause();
  audio.play();
  audio.volume = 0.3;
};

const reloadGame = () => {
  window.location.reload();
};

start.addEventListener("click", startGame);
finish.addEventListener("click", endGame);
closeBtn.addEventListener("click", reloadGame);
