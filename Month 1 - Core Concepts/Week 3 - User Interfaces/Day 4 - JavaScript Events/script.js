const input = document.querySelector("#name-input")
console.log(input, " has been selected")
const button = document.querySelector("#submit-button")
const greeting = document.querySelector("#greeting")
const pTag = document.querySelector("#current-key")

// When a user clicks button
// Say hello, (name)
button.addEventListener('click', () => {
    const name = input.value

    // Update our greeting
    greeting.innerHTML = `Hello ${name}`
    // Doesn't work
    // greeting.innerHTML(`Hello ${name}`)
})

document.addEventListener("keydown", function (event) {
    pTag.innerHTML = `Key: ${event.key}` 
})