/**
 * Task:
 * Implement the functionality for a button click counter.
 *
 * Requirements:
 * Build a button click counter.
 * Each time the button is clicked, the number displayed on the page should increase by 1.
 * The starting value should be 0.
 *
 */

// Your code goes here
const button = document.querySelector("button")
const counterDisplay = document.querySelector("#counter")

// Initialize counter
let counter = 0

button.addEventListener("click",function(){
    counter ++
     counterDisplay.innerHTML = `${counter}`
});
     