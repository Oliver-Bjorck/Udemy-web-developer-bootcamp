const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener('change', function(e) { //the change event will run code when you change and then leave something, in this case the text input
    console.log('hello');
})

input.addEventListener('input', function(e) { //the input event will run code everytime you enter something into the input
    h1.innerText = input.value;
})