const body = document.querySelector("body");
const btnChangeColor = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");

const changeColor = () => {
body.style.backgroundColor = `${getRandomHexColor()}`;
colorValue.textContent = getRandomHexColor();
};

btnChangeColor.addEventListener("click", changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}