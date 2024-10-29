// Import the Parent class, Person, which Student will extend
const Person = require('./Person')

// Define the Student class as a subclass of Person (inheritance)
class Student extends Person {

    // Static property to keep track of the total number of Student instances created
    static totalStudents = 0

    // Initialize a new Student with a name, location, and school
    constructor(name, location, school) {
        // Call the parent class constructor to set name and location
        super(name, location)
        this.school = school
        // Increment the total count of Student instances
        Student.totalStudents++
    }

    // Override the introduce() method from the Person class
    introduce() {
        return `Hello, my name is ${this.name}. I am from ${this.location}, and I go to ${this.school}.`
    }
}

// Export the Student class for use in other files
module.exports = Student
