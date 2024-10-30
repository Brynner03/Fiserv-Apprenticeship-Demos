// Person.js

// Define the Person class with private properties
class Person {
    // Private properties
    #name
    #location

    constructor(name, location) {
        // Initialize private properties
        this.#name = name
        this.#location = location
    }

    // Getter for #name - allows us to read the private #name property
    get name() {
        return this.#name
    }

    // Setter for #name - allows us to modify the private #name property
    set name(newName) {
        this.#name = newName
    }

    // Getter for #location - allows us to read the private #location property
    get location() {
        return this.#location
    }

    // Setter for #location - allows us to modify the private #location property
    set location(newLocation) {
        this.#location = newLocation
    }
}

// Define a simple Student class with public properties
class Student {
    constructor(name) {
        this.name = name  // Public property for name
    }
}

// Uncomment the following line to export a single class (if only Person is needed)
// module.exports = Person;

// Exporting multiple classes to use in other files
module.exports = {
    Person,
    Student
}
