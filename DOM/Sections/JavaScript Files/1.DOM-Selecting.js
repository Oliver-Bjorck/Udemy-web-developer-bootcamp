const allImages = document.getElementsByTagName('img'); //getElementByTagName targets all HTML elements based on their tag and returns an HTMLCollection

for (let img of allImages) {
    console.log(img.src)
}

const squareImages = document.getElementsByClassName('square'); //getElementByClassName targets all HTML elements based on their their class and returns an HTMLCollection

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}