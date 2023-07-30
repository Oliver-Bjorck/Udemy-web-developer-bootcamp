const helloBtn = document.querySelector('#hello');
const goodbyeBtn = document.querySelector('#goodbye');

helloBtn.addEventListener('click', function() {
    console.log('hello')
});
goodbyeBtn.addEventListener('click', function() {
    console.log('goodbye')
});