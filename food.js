import { onSnake, expandSnake } from "./snake.js";
import { update as scoreUpdate } from "./scoreCard.js";
let food = getRandomFoodPosition();

const audio1 = new Audio("audio1.wav");

const expansionRate = 1;
export function update() {
  if (onSnake(food)) {
    expandSnake(expansionRate);
    food = getRandomFoodPosition();
    scoreUpdate();
    audio1.play();
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = getGridPos();
  }
  return newFoodPosition;
}

function getGridPos() {
  return {
    x: Math.floor(Math.random() * 21) + 1,
    y: Math.floor(Math.random() * 21) + 1,
  };
}
