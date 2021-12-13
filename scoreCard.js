let scoreD = 0;
let screen = document.getElementById("scoreDisplay");
const scoreAdd = 5;
export function update() {
  scoreD += scoreAdd;
}
export function draw() {
  screen.value = scoreD;
}
