console.log(document.querySelector('p').innerText); //innerText can be used to retrieve and manipulate the text within an HTML tag

console.log(document.querySelector('p').textContent); //textContent is similar to innerText but it'll show all the content, even if the display is set to none, or the text is hidden in some way

console.log(document.querySelector('p').innerHTML); //innerHTML retrieves the markup rather than just the text