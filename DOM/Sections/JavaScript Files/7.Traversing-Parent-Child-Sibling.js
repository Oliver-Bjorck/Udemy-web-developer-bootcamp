const firstBold = document.querySelector('b');

firstBold.parentElement; //the parent element allows you to see the element that your searched element is contained within

const paragraph = firstBold.parentElement;

paragraph.children //children returns an HTML collection of the child elements of an element

const squareImg = document.querySelector('.square')

squareImg.nextSibling //returns the next node, the same works for previousSibling

squareImg.nextElementSibling //returns the next element, the same works for previous ElementSibling