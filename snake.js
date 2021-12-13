import { getInput } from "./input.js";
let snakeBody = [{ x: 3, y: 7 }];
const snakeHead = snakeBody[0];

export function update() {
  const inp = getInput();
  for (let i = snakeBody.length - 1; i >= 1; i--) {
    snakeBody[i] = { ...snakeBody[i - 1] };
  }
  snakeBody[0].x += inp.x;
  snakeBody[0].y += inp.y;
}

export function draw(gameBoard) {
  snakeBody.forEach((part) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = part.y;
    snakeElement.style.gridColumnStart = part.x;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  });
}

export function onSnake(food) {
  return snakeBody.some((x) => {
    return equalPositions(food, x);
  });
}

function equalPositions(m, n) {
  return m.x == n.x && m.y == n.y;
}
let addNumber = 0;
export function expandSnake(num) {
  addNumber += num;
  for (let j = 0; j < addNumber; j++) {
    addToSnake();
  }
  addNumber = 0;
}

function addToSnake() {
  snakeBody.push(snakeBody[snakeBody.length - 1]);
}
export let gameOver = false;
export function checkDeath() {
  if (snakeBiteItself() || outsideGrid()) {
    gameOver = true;
  }
}

function snakeBiteItself() {
  return checkSnakeBitten();
}

function checkSnakeBitten() {
  for (let i = 2; i < snakeBody.length; i++) {
    if (equalPositions(snakeHead, snakeBody[i])) {
      return true;
    }
  }
  return false;
}

function outsideGrid() {
  return (
    snakeHead.x < 1 || snakeHead.x > 21 || snakeHead.y < 1 || snakeHead.y > 21
  );
}
