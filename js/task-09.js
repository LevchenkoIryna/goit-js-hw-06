function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEL = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const colorText = document.querySelector('.color');

btnEL.addEventListener('click', () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorText.textContent = getRandomHexColor();

});