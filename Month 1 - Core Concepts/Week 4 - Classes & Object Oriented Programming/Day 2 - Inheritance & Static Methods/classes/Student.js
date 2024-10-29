// Import Parent class
const Person = require('./Person')

// Make a subclass (inheritance)
class Student extends Person {

    // Static property
    static totalStudents = 0

    constructor(name, location, school) {
        // Use super() to tell Parent Class what to do
        super(name, location)
        this.school = school
        Student.totalStudents++
    }

    introduce() {
        return `Hello, my name is ${this.name}. I am from ${this.location}, and I go to ${this.school}.`
    }
}

// export 
module.exports = Student