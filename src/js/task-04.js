const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector("#value");
let counterValue = 0;

const btnIncrementClick = () => {
  counterValue += 1;
  counter.textContent = counterValue;
};

const btnDecrementClick = () => {
  counterValue -= 1;
  counter.textContent = counterValue;
};

btnIncrement.addEventListener("click", btnIncrementClick);
btnDecrement.addEventListener("click", btnDecrementClick);