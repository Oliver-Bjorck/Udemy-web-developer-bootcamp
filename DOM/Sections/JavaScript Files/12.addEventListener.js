const btn3 = document.querySelector('#v3');

btn3.addEventListener("click", function () { //addEventListener is an easier way to specify an event
    alert("clicked!");
});

function twist() {
    console.log('twist');
}

function shout() {
    console.log('shout');
}

const tasButton = document.querySelector('#tas');

tasButton.addEventListener('click', twist); //addEventListener allows you to assign more than one function to an event
tasButton.addEventListener('click', shout, {once: true}); //you can also set it to only run once, and then it'll remove the event listener