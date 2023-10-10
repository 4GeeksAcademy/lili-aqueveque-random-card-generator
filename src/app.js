/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let randomIcon = Math.floor(Math.random() * 4 + 1);
  let randomNumber = Math.floor(Math.random() * 12 + 1);
  let randomColor = Math.floor(Math.random() * 2 + 1);

  let card = document.querySelector(".card");
  let upperIcon = document.querySelector(".upper");
  let lowerIcon = document.querySelector(".lower");
  let centerIcon = document.querySelector(".center");
  if (randomIcon == 1) {
    upperIcon.innerHTML = "♦";
    lowerIcon.innerHTML = "♦";
  } else if (randomIcon == 2) {
    upperIcon.innerHTML = "♠";
    lowerIcon.innerHTML = "♠";
  } else if (randomIcon == 3) {
    upperIcon.innerHTML = "♣";
    lowerIcon.innerHTML = "♣";
  } else {
    upperIcon.innerHTML = "♥";
    lowerIcon.innerHTML = "♥";
  }

  if (randomNumber == 1) {
    centerIcon.innerHTML = "A";
  } else if (randomNumber == 10) {
    centerIcon.innerHTML = "J";
  } else if (randomNumber == 10) {
    centerIcon.innerHTML = "Q";
  } else if (randomNumber == 10) {
    centerIcon.innerHTML = "K";
  } else {
    centerIcon.innerHTML = randomNumber;
  }

  if (randomColor == 1) {
    upperIcon.style.color = "red";
    centerIcon.style.color = "red";
    lowerIcon.style.color = "red";
  } else {
    upperIcon.style.color = "black";
    centerIcon.style.color = "black";
    lowerIcon.style.color = "black";
  }
};
