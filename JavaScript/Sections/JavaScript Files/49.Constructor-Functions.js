function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function() { //we assign methods to the prototype, outside of the constructor function
    const {r, g, b} = this;
    return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function() {
    const {r, g, b} = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function(a = 1.0) {
    const {r, g, b} = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

const color1 = new Color(40, 255, 60); //we use the new keyword to create a new object using the constructor
const color2 = new Color(0, 0, 0);

//Creates a blank, plain JavaScript object
//Links (sets the constructor of) this object to another object
//Passes the newly created object from Step 1 as the this context
//Returns this if the function doesn't return its own object
//it essentially works similarly to the factory functions but does a lot of the work behind the scenes
