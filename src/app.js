/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { mapToStyles } from "@popperjs/core/lib/modifiers/computeStyles";

window.onload = function() {
  generateCard();
  setInterval(generateCard, 10000);
  let button = document.querySelector("#newCard");
  button.addEventListener("click", generateCard);
};

let suits = ["♦", "♥", "♠", "♣"];
let numbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

function randomSuit() {
  let suit = suits[Math.floor(Math.random() * suits.length)];
  return suit;
}

function randomNumber() {
  let number = numbers[Math.floor(Math.random() * numbers.length)];
  return number;
}

function changeColor(suit) {
  if (suit == "♦" || suit == "♥") {
    return "red";
  } else {
    return "black";
  }
}

function generateCard() {
  let card = document.querySelector(".card");
  let sameSuit = randomSuit();
  card.innerHTML = `<p class="top-suit text-start">${sameSuit}</p>
    <p class="number text-center">${randomNumber()}</p>
    <p class="bottom-suit text-start">${sameSuit}</p>`;
  card.style.color = changeColor(sameSuit);
  let container = document.querySelector(".container");
  container.appendChild(card);
}
