"use strict";

const message = document.querySelector(".message");
const check = document.querySelector(".check");
const number = document.querySelector(".number");
const heighScore = document.querySelector(".highscore");

let score = document.querySelector(".score");
let randNumber = Math.floor(Math.random() * 20 + 1);

document.querySelector(".again").addEventListener("click", restartGame);

function startGame() {
  check.addEventListener("click", () => {
    const guess = document.querySelector(".guess").value;

    if (guess > 20 || guess < 1) {
      message.innerHTML = "Invalid Number!";
    } else {
      score.innerHTML = score.innerHTML - 1;
      if (guess == randNumber) {
        message.innerHTML = "Correct number!";
        document.querySelector("body").style.background = "green";
        number.innerHTML = randNumber;
        if (heighScore.innerHTML < score.innerHTML) {
          heighScore.innerHTML = score.innerHTML;
        }
      } else if (guess > randNumber) {
        message.innerHTML = "Too Heigh!";
      } else {
        message.innerHTML = "Too Low!";
      }
    }
  });
}

function restartGame() {
  score.innerHTML = 20;
  randNumber = Math.floor(Math.random() * 20 + 1);
  message.innerHTML = "Start guessing...";
  number.innerHTML = "?";
  document.querySelector("body").style.background = "#222";
  document.querySelector(".guess").value = "";
}

startGame();
