const fontSizeInput = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

text.style.fontSize = `${fontSizeInput.value}px`;

const changeFontSize = (event) => {
text.style.fontSize = `${event.currentTarget.value}px`;
};

fontSizeInput.addEventListener("input", changeFontSize);