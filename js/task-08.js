const form = document.querySelector(".login-form");

const validateForm = (event) => {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("Будь-ласка, заповніть всі поля форми!")
  } else {
    const formData = {
      email: `${email.value.trim()}`,
      password: `${password.value.trim()}`
    };
    console.log(formData);
    form.reset();
  }
}

form.addEventListener("submit", validateForm);


