// Define the Person class, which serves as the parent class
class Person {
    // Constructor to initialize a Person with a name and location
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    // Method to introduce the person, displaying their name and location
    introduce() {
        return `Hello, my name is ${this.name}, I am from ${this.location}.`;
    }
}

// Export the Person class for use in other files
module.exports = Person
