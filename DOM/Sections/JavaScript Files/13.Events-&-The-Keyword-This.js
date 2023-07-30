const makeRandColour = () => {
    const r =Math.floor(Math.random() * 255);
    const g =Math.floor(Math.random() * 255);
    const b =Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button');

for(let button of buttons) {
    button.addEventListener('click', colourise)
}

const h1s = document.querySelectorAll('h1');

for(let h1 of h1s) {
    h1.addEventListener('click', colourise)
}

function colourise() {
    this.style.backgroundColor = makeRandColour(); //the keyword this can be used in this scenario to avoid repeating code
    this.style.color = makeRandColour(); //this refers to the the variable being acted upon in the function it is called in
}