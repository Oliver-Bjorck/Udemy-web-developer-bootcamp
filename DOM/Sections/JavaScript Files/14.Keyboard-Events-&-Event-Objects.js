document.querySelector('button').addEventListener('click', function(evt) {
    console.log(evt); //evt is in reference to the event object, which is always passed through the function, even when you don't explicitly do so
})

const input = document.querySelector('input');
input.addEventListener('keydown', function() { //keydown will trigger when the user presses a key on the keyboard
    console.log('KEYDOWN')
})
input.addEventListener('keyup', function() { //keydown will trigger when the user presses and releases a key on the keyboard
    console.log('KEYUP')
})

input.addEventListener('keydown', function(e) {
    console.log(e.key) //shows the key being pressed
    console.log(e.code) //shows the code for said key
})

window.addEventListener('keydown', function(e) {
    switch(e.code) { //this can be used to listen for certain key presses and ignore others
        case 'ArrowUp':
            console.log('Up');
            break;
        case 'ArrowDown':
            console.log('Down');
            break;
        case 'ArrowLeft':
            console.log('Left');
            break;
        case 'ArrowRight':
            console.log('Right');
            break;
        default:
            console.log('Ignored!')
    }
})