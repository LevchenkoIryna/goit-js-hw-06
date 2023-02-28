const formInputEl = document.querySelector("#validation-input");

const dataLength = Number(formInputEl.getAttribute("data-length"));


const handleInputValidation = (event) => {
  if (event.target.value.length === dataLength) {
    formInputEl.classList.add("valid");
    formInputEl.classList.remove("invalid");
  } else if (event.target.value.length === 0) {
    formInputEl.classList.remove("valid");
    formInputEl.classList.remove("invalid");
  } else {
    formInputEl.classList.add("invalid");
    formInputEl.classList.remove("valid");
  }
};

formInputEl.addEventListener("blur", handleInputValidation);
