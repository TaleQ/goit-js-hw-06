const input = document.querySelector("#validation-input");

const validation = (event) => {
  if (event.currentTarget.value.trim().length === Number(input.dataset.length)) {
    input.classList.contains("invalid") ? input.classList.replace("invalid", "valid") : input.classList.add("valid");
  } else {
    input.classList.contains("valid") ? input.classList.replace("valid", "invalid") : input.classList.add("invalid");
  }
}

input.addEventListener("blur", validation);