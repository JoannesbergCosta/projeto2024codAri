const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault()
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log('Email:', email);
    console.log('Senha:', password);
});
