function makeColor(r, g, b) { //this is called a factory function
    const color = {}; //it makes an object
    color.r = r; //it then adds properties to the object
    color.g = g;
    color.b = b;
    color.rgb = function() { //then we add some methods to the object
        const {r, g, b} = this;
        return `rgb(${r}, ${g}, ${b})`;
    };
    color.hex = function() {
        const {r, g, b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return color; //finally the object is returned
}

const firstColor = makeColor(35, 255, 150);