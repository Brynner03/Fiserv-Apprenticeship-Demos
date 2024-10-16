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