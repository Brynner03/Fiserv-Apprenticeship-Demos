console.log('-----------Recursive evenOrOdd-----------')

// Direct Recursion
// Goal: write evenOrOdd without modulo, using recursion
function evenOrOdd (num) {
    // Base Case: 0 is even, 1 is odd
    // Idea: subtract 2 a bunch of times
    // recursive case: return evenOrOdd(num - 2)

    // Base Case 1
    if (num === 0) {
        return "Your number is even"
    }

    // Base Case 2
    if (num === 1) {
        return "Your number is odd"
    }

    // Recursive Case
    return evenOrOdd(num - 2)

}

console.log(evenOrOdd(5))

// Indirect Recursion


function isEven(num){
    
    // Base Case
    if (num == 0) {
        return true
    }

    // Recursive Case
    return isOdd(num - 1)

}

function isOdd (num) {

    // Base Case
    if (num == 0) {
        return false
    }

    // Recursive Case
    return isEven(num - 1)

}

console.log(isEven(34)) // true
console.log(isOdd(1)) // true
console.log(isEven(0)) // true

// 5!
// 5 * 4 * 3 * 2 * 1

function factorial(num) {

    // Base Case
    if (num == 0) return 1

    // Recursive Case: Must call itself
    return num * factorial(num - 1)

}

console.log(factorial(5))