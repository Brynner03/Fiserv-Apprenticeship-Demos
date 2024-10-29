// Import the Student class from the specified file path
const Student = require('./classes/Student')

// Create two instances of the Student class with specific names, locations, and schools
const student1 = new Student("Samantha", "Boston", "MIT")
const student2 = new Student("Brian", "California", "Multiverse")

// Call the introduce() method on student1, which overrides the method from the Person class
console.log(student1.introduce())

// Output the total number of Student instances created, using the static property
console.log(Student.totalStudents)
