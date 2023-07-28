const newImg = document.createElement('img'); //this creates a new element, in this case an img element
newImg.src = 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80'
//this gives that element a source for the image
document.body.appendChild(newImg); //this places the element into the html document, in this case it places it last in the body

newImg.classList.add('square');

const newH3 = document.createElement('h3');
newH3.innerText = 'I am new!'; //it can also be done for text elements
document.body.appendChild(newH3);

const p = document.querySelector('p');
p.append('I am new text'); //you can use append to easily add text onto the end of text elements

const newB = document.createElement('b');
newB.append('Hi!');
p.prepend(newB); //you can also use prepend to add it to the front of a text element

const h2 = document.createElement('h2');
h2.append('Are adorable chickens');

const h1 = document.querySelector('h1');
h1.insertAdjacentElement('afterend', h2); //insertAdjacentElement inserts a given element node at a given position
//you can insert it before the element (beforebegin)
//inside the element, before its first child (afterbegin)
//inside the element, after its last child (bforeend)
//after the element (afterend)