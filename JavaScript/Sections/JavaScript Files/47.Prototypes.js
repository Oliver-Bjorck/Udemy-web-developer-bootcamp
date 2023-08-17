String.prototype.yell = function() { //prototypes can be used to make functions that are attached to objects
    return `OMG!!! ${this.toUpperCase()}!!! AGHHHHGHHHHGGH!!!`; //meaning they can be called and used repeatedly on separate objetcs of the same type
};

Array.prototype.pop = function() { //they can even be used to replace existing functions
    return 'Sorry I want that Element, I will never pop it off!';
};