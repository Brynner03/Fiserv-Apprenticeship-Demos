// Clears the console each time.
console.log('\x1B');

// Comparison Operator 1: Greater Than

let greaterThan1 = 9 > 2 // Result in True
let greaterThan2 = 23 > 43; // Result in False
console.log('greaterThan1: ', greaterThan1)

// Comparison Operator 2: Less Than

let lessThan1 = 12 < 4 // Results in False
let lessThan2 = 8 > 10

// Comparison Operators 3: Loose Equal

let looseEqual1 = 3 == '3' 
console.log('looseEqual1', looseEqual1)

// Comparison Operator 4: Strict Equal

let strictEqual1 = 33 === '33' // Return False
console.log('strictEqual1: ', strictEqual1)

// Logical Operators

let and1 = true && false // Returns False
console.log('and1: ', and1)

// Or Operator

let or1 = true || false; // Results in True
console.log("or1: ", or1)


// Control Flow

let age = 14;

if (age >= 21) {
    console.log("Great, let's go to the bar")
} else if (age > 1 && age < 13) {
    console.log('Lets go to the arcade')
} else {
    console.log('Nah, we cant go')
}

let grades = 30

if (grades == 50 || grades == 70) {
    console.log('You passed class this semester')
} else if (grades >= 71 && grades <= 80) {
    console.log('Hi')
} else {
    console.log('You failed')
}

// Conditional (Ternary Operator)

let isUser = true

let print = isUser ? "Yes, we are a user" : "No, we are not a user."

console.log('print: ', print)

// Conditional #2

let trafficLight = "Green"

let doWeGo = trafficLight == "Green" ? "Yes" : "No"

console.log("doWeGo: ", doWeGo)