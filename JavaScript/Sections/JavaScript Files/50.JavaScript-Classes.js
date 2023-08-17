class Color {
    constructor(r, g, b, name) { //the constructor function will run immediately once a new object is created
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        this.calcHSL(); //the method is run immediately without us needing to call it and stores the values of h, s, and l
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
    hsl() { //returns the hsl value
        const {h, s, l} = this;
        return `hsl(${h}, ${s}%, ${l}%)`;
    }
    fullySaturated() { //returns the color fully saturated
        const {h, l} = this;
        return `hsl(${h}, 100%, ${l}%)`;
    }
    opposite() { //returns the opposite of the color
        const {h, s, l} = this;
        const newHue = (h + 180) % 360;
        return `hsl(${newHue}, ${s}%, ${l}%)`;
    }
    calcHSL() { //this method calculates a colors hsl value from its rgb value
        let {r, g, b} = this;

        r /= 255; //logic for this method taken from stack overflow, is irrelevant at the moment
        g /= 255;
        b /= 255;

        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;
        
        if (delta == 0) h = 0;
        else if (cmax == r)
            h = ((g - b) / delta) % 6;
        else if (cmax == g)
            h = (b - r) / delta + 2;
        else
            h = (r - g) / delta + 4;

        h = Math.round(h * 60);

        if (h < 0) h += 360;

        l = (cmax + cmin) / 2;

        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);

        this.h = h;
        this.s = s;
        this.l = l
    }
}

const red = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 255, 255, 'white');