let nums = [2, 4, 10, 16, 5, 4 , 2, 1, 6, 7]

// While loop
// let i = 0
// while (i < nums.length) {
//     console.log(nums[i])
//     i++
// }

// for loop 
// First Odd number
let firstOdd = 0
for (let i = 0; i < nums.length; i++) {
    // console.log(nums[i])
    if (nums[i] % 2 == 1) {
        firstOdd = nums[i]
        break
    }
}
// console.log(firstOdd)


// Getting the sum of all odds
let sumOdd = 0
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
        continue
    }
    sumOdd += nums[i]
}

// console.log(sumOdd)


// Looping through nested arrays
const nest = [
    [4, 1, 7],
    [2, 8],
    [4, 7, 9, 10]
]

for (let i = 0; i < nest.length; i++) {
    // console.log(nest[i])
    for (let j = 0; j < nest[i].length; j++) {
        // console.log(nest[i][j])
    }
}

// Looping through objects

let studentScores = {
    Alice: 86,
    Bob: 92,
    Alexa: 97
}

for (let name in studentScores) {
    // console.log(name + ":" + studentScores[name])
    console.log(`${name}: ${studentScores[name]}`)
}








// Today's Coding Challenge

let studentsGrade = {
    Alice: [85, 90, 78],
    Bob: [92, 88, 84],
    Charlie: [76, 85]
};

/**
 * Calculate and log the average grades for each student.
 * 
 * The log statements should look like this:
 * Alice's average is 84.
 * Bob's average is 88.
 * Charlie's average is 81.
 *
 * @param {Object} students - An object where each key is a student's name and each value is an array of grades.
 */

function calculateAverages(studentsGrade) {
    // Your code here
    for (let student in studentsGrade){
        const average =  Math.round(studentsGrade[student].reduce((total, score) => {
            total += score;
            return total;
        })/studentsGrade[student].length)
        console.log(`${student}'s average is ${average}.`);
    }
}

calculateAverages(studentsGrade);






















