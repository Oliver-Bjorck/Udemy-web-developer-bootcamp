const button = document.querySelector('#changeColour');
const container = document.querySelector('#container');

//Event Bubbling occurs when two elements (one contained within the other) each have an event
//This causes the contained element to run both events, often times we don't want this to happen

button.addEventListener('click', function(e) {
    container.style.backgroundColor = makeRandColor();
    e.stopPropagation(); //the stopPropogation method prevents this
})

container.addEventListener('click', function() {
    container.classList.toggle('hide');
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}