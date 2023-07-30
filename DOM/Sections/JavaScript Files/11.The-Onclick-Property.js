const btn = document.querySelector('#v2');

btn.onclick = function() { //you can use JavaScript instead to set these events using a function
    console.log('You clicked me');
    console.log('I hope it worked!');
}

function scream() {
    console.log('AAAAHHHHH');
    console.log('Stop touching me!');
}

btn.onmouseenter = scream; //you're not calling the function, rather setting it to trigger when an event occurs

document.querySelector('h1').onclick = function() { //you also aren't limited to buttons if that wasn't clear, it works on all elements of an html doc
    alert('you clicked the h1');
}
