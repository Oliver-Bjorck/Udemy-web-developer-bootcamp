//this is a fairly outdated way of sending requests via JS
const req = new XMLHttpRequest(); //you start by making an XHR

req.onload = function() { //you have to create a callback function for if it works
    console.log('It loaded!');
    const data = JSON.parse(this.responseText); //don't forget it'll return a string, so you need to convert it into an object
    console.log(data);
}

req.onerror = function() { //and if it doesn't
    console.log('Error!!!');
    console.log(this);
}

req.open("GET", "https://swapi.dev/api/people/1/") //you then have to open the request by setting the HTTP verb and the url
req.send(); //and then you can send it