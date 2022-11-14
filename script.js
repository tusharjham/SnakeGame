import {
  update as snakeUpdate,
  draw as snakeDraw,
  checkDeath,
  gameOver,
} from "./snake.js";
import { update as foodUpdate, draw as foodDraw } from "./food.js";
import { draw as scoreDraw } from "./scoreCard.js";

const audio2 = new Audio("audio2.wav");

let lastRender = 0;
const SnakeSPEED = 15;
const gameBoard = document.getElementById("gameboard");
function main(currentTime) {
  if (gameOver) {
    audio2.play();
    if (confirm("Game Over")) {
      window.location.reload();
    } else {
      window.close();
    }
    return;
  }
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRender) / 1000;
  if (secondsSinceLastRender < 1 / SnakeSPEED) return;
  lastRender = currentTime;
  //   console.log("render");
  update();
  draw();
}
window.requestAnimationFrame(main);

function update() {
  snakeUpdate();
  foodUpdate();
  checkDeath();
  gameBoard.innerHTML = "";
}
function draw() {
  snakeDraw(gameBoard);
  foodDraw(gameBoard);
  scoreDraw();
}
