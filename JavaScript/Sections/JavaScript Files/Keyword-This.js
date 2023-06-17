const cat = {
    name: 'Blue Steele',
    colour: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log(`${this.name} says MEOW`); //the this keyword can be used to refer to other properties inside and object
    }
}

//however it will only work when the method is called correctly

const meow2 = cat.meow; //this will not work as the value of 'this' depends on the invocation context of the function