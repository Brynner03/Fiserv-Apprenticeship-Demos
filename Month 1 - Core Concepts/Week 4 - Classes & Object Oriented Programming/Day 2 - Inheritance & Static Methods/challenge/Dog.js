// Implement a Dog class that extends a pre-defined Animal class.

// Instructions:
//
// Dog Class:
// Add a breed property to Dog.
// Override greet() to return: "Woof! I'm a [breed], and my name is [name]."

const {Animal} = require("./Animal")

class Dog extends Animal {
    constructor(name, breed) {
        super(name)
        this.breed = breed
    }
    greet() {
        return `Woof! I'm a ${this.breed}, and my name is ${this.name}`
    }
}

module.exports = Dog