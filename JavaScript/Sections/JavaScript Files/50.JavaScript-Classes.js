class Color {
    constructor(r, g, b, name) { //the constructor function will run immediately once a new object is created
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    innerRGB() {
        const {r, g, b} = this;
        return `${r}, ${g}, ${b}`;
    }
    rgb() { //this method won't run, instead it'll be on the prototype
        return `rgb(${this.innerRGB()})`; //it's a nicer syntax that makes the code a little cleaner and concise
    }
    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`; //we can also call separate methods from within another instance method using this
    }
    hex() {
        const {r, g, b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
}

const red = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 255, 255, 'white');