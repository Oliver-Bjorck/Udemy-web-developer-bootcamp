const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function() {
        return `${this.firstName} ${this.lastName}` //the keyword this behaves differently in an arrow function than it does in a regular function
    },
    shoutName: function() {
        setTimeout(() => { //they keyword this can sometimes refer to the window object rather than the object it is contained within
            console.log(this.fullName()) //in this context, an arrow function would be used
        }, 3000)
    }
}