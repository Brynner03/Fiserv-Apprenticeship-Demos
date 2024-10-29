const Student = require('./classes/Student')

const student1 = new Student("Samantha", "Boston", "MIT")
const student2 = new Student("Brian", "California", "Multiverse")

console.log(student1.introduce())
console.log(Student.totalStudents)