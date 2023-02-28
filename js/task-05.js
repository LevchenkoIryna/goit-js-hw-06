
const formInputEl = document.querySelector("#name-input");

const userName = document.querySelector("#name-output");

formInputEl.addEventListener("input", (event) => {
    if (formInputEl.value !== '') {
        userName.textContent = event.target.value;
        return;
    }
    userName.textContent = 'Anonymous';
});


