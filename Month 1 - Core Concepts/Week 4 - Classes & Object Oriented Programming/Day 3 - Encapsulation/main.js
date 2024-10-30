// Importing Person and Student classes from Person.js using destructuring
const { Person, Student } = require('./Person')

// Alternatively, importing each class separately
// const Person = require('./Person').Person;
// const Student = require('./Person').Student;

// Create an instance of Person with name and location
const person = new Person("Alice", "Bronx")

// Using getter to retrieve the private name property
console.log("Person's initial name:", person.name) // Output: Alice

// Using setter to update the name property
person.name = "Brynner"
console.log("Person's updated name:", person.name) // Output: Brynner

// Trying to add a new public property (lastName) to the person instance
person.lastName = "Brynner"  // Adding a new public property
console.log("Person's last name:", person.lastName) // Output: Brynner

// Using getter to retrieve the private location property
console.log("Person's initial location:", person.location) // Output: Bronx

// Using setter to update the location property
person.location = "Florida"
console.log("Person's updated location:", person.location) // Output: Florida

// Create an instance of Student with a public name property
const student = new Student("Brianna")

// Display Student instance to see its properties
console.log("Student details:", student) // Output: Student { name: 'Brianna' }
