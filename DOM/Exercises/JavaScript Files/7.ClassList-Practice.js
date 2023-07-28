//Exercise completed in Udemy IDE and copied here

// WRITE YOUR CODE IN HERE:
const listItems = document.querySelectorAll('li');

for (let i = 0; i < listItems.length; i++) {
    listItems[i].classList.toggle('highlight');
}