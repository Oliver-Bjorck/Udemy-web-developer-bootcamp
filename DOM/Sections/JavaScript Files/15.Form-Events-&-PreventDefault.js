const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catName');
const list = document.querySelector('#cats')

form.addEventListener('submit', function(e) { //Event Listeners can be especially important in forms
    e.preventDefault(); //preventDefault stops an event from triggering its default action, in this case changing to a new page
    console.log(input.value);
    const catName = input.value; //they can be used to read an input and insert them where they're needed
    const newLi = document.createElement('Li'); //such as a list
    newLi.innerText = catName;
    list.append(newLi);
    input.value = '';
})