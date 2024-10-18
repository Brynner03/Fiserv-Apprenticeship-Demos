// Writing a Simple Function
function sayHello() {
    console.log("Hello World!")
}

// Invoking a Function
sayHello()

// Parameters and Arguments

function sayWord(word) {
    console.log(word)
}

sayWord("Code")
sayWord("Bootcamp")
sayWord("Software Engineer")

// Return vs Console.log

function printMv() {
    console.log("Multiverse")
}

function returnMV() {
    return "Multiverse"
}

returnMV()

function sample() {
    return "This a return value"
}
console.log(sample())

let sampleString = sample() + " and it's different from console.log()"
console.log(sampleString)

// Debugging


// Syntax Errors

// le name = "multiverse"
// let bootcamp -> "Multiverse" // Wrong Assignment Operator

/// Reference Errors

let num = 9;
// console.log(nums) // Typo, should be "num"

// Type Errors:

const number = 9
// number = 12 
// console.log(number.length)

let name1 = "Mario"

function changeName(name1) {
    // debugger
    name1 = "Luigi"
    return name1
}

changeName(name1)