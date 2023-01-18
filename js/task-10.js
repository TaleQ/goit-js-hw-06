const boxes = document.querySelector("#boxes");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const numberInput = document.querySelector("#controls").firstElementChild;
let boxSize = 20;
let counter = 0;

const createBoxes = () => {
  let amount = Number(numberInput.value.trim());
  for (let i = 1; i <= amount; i++) {
    const newBox = document.createElement("div");
    boxes.append(newBox);
    newBox.style.backgroundColor = `${getRandomHexColor()}`;
    boxSize += 10;
    newBox.style.width = `${boxSize}px`;
    newBox.style.height = `${boxSize}px`;
    numberInput.value = "";
  }
};

const destroyBoxes = (event) => {
  boxes.innerHTML = "";
  boxSize = 20;
  numberInput.value = "";
};

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}