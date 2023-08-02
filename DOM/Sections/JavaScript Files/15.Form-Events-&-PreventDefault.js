const form = document.querySelector('#shelterForm');
form.addEventListener('submit', function(e) {
    console.log('Submitted!');
    e.preventDefault(); //preventDefault stops an event from triggering its default action, in this case changing to a new page
})