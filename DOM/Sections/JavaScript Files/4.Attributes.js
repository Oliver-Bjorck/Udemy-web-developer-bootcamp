const firstLink = document.querySelector('a');

console.log(firstLink.getAttribute('title')); //getAttribute retrieves the attribute assigned to the element
console.log(firstLink.setAttribute('href', 'http://www.google.com')); //setAttribute rewrites the attribute, and requires you to pass through two arguments

const input = document.querySelector('input[type="text"]');

input.type = 'password'; //you can also change input types
input.setAttribute('type', 'text'); //multiple ways