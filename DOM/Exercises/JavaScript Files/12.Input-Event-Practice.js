//Exercise completed in Udemy IDE and copied here

const username = document.querySelector('input');
const h1 = document.querySelector('h1');

username.addEventListener('input', function(e) {
    if (username.value === '') {
        h1.innerText = 'Enter Your Username'
    } else {
        h1.innerText = `Welcome, ${username.value}`;
    }
})