const firstLi = document.querySelector('li');

const ul = firstLi.parentElement;

ul.removeChild(firstLi); //you can remove a child element from a parent element using removeChild

const img = document.querySelector('img');

img.remove(); //remove is a lot easier to use as you just call the element itself