


let counterValue = 0;
let step = 1;

const counterEl = document.querySelector('#counter');
const valueEl = document.querySelector('#value');

counterEl.firstElementChild.addEventListener('click', handleBtnRemoveClick);
counterEl.lastElementChild.addEventListener('click', handleBtnClick);



function handleBtnClick() {
    counterValue += step;
    valueEl.textContent = counterValue;
};


function handleBtnRemoveClick() {
    counterValue -= step;
    valueEl.textContent = counterValue;
};





