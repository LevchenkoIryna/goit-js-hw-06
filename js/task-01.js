const itemEl = document.querySelectorAll('.item').length;

console.log('Number of categories:', itemEl);




const textEl = document.querySelectorAll('h2');

const textElValue = textEl.forEach(function (element) {
    console.log('Category:', element.textContent);

    const valueEl = element.nextElementSibling;
    console.log('Elements:', valueEl.children.length);
})




