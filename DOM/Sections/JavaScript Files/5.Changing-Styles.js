const h1 = document.querySelector('h1');

h1.style.color = 'green'; //you can change the styles of html elements
h1.style.fontSize = '3em'; //however this will be inline style properties which aren't desirable

const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
}

console.log(window.getComputedStyle(h1).fontFamily) //getComputedStyle will return all the style properties of an element in  a css style declaration