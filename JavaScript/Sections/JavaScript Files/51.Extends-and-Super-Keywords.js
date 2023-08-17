class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`;
    }
}

class Cat extends Pet{ //the extend keyword allows you to use the methods and properties from another class
    constructor(name, age, livesLeft = 9) {
        super(name, age) //the super keyword can be used to call existing properties into a new class
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'MEOW';
    }
}

class Dog extends Pet { //this can be used to reduce repetitive code
    bark() {
        return 'WOOF';
    }
    eat() {
        return `${this.name} scarfs his food!` //it will use the initial class first before using the extended class
    }
}