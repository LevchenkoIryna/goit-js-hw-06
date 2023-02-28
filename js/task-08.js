const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.target;

    if (email.value === "" || password.value === "") {
        return alert("Всі поля повинні бути заповнені!");
    }

    
    const data = {
        [ email.name ]: email.value,
        [ password.name ]: password.value,
    };

    console.log(data);
    event.target.reset();
});
