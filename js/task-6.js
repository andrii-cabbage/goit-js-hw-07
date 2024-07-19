function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const form = document.querySelector("#controls");
const input = form.firstElementChild;
const createBtn = input.nextElementSibling;
const destroyBtn = form.lastElementChild;
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  const dives = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    const size = 30 + i * 10;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    dives.push(div);
  }
  boxes.append(...dives);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

createBtn.addEventListener("click", handlerClick);

function handlerClick() {
  const amount = input.value;
  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    createBoxes(amount);
    input.value = "";
  }
}

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});