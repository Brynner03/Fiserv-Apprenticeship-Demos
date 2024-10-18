// Iterative Approach
function sumArray1(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}


// Recursive Approach
// Implement a recursive function sumArray2, that takes an array of integers and returns the sum of all its elements.
// Return a single integer representing the sum of all elements in the array.

function sumArray2(arr) {
    
    // Base Case
    if (arr.length == 0) return 0
    
    // Recursive Case
    return arr[0] + sumArray2(arr.slice(1))
}


// Test cases
console.log(sumArray2([1, 2, 3, 4, 5])); // Returns 15
console.log(sumArray2([10, -2, 3]));     // Returns 11
console.log(sumArray2([]));               // Returns 0


// Write a recursive function reverseString that takes a string and returns the string reversed.



function reverseString(str) {
    
}

// Test cases
console.log(reverseString("hello")); // Returns "olleh"
console.log(reverseString("OpenAI")); // Returns "IAnepO"
console.log(reverseString("A")); // Returns "A"
console.log(reverseString("")); // Returns ""
