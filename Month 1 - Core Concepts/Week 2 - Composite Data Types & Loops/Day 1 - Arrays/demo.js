let languages = ["Javascript", "python", "go", "rust", "php", "scala"]

// Access A value
let favLanguage = languages[0]
// console.log(favLanguage)

// Update Value
// languages[0] = "C++"
// console.log(languages)

// Add a new value at the end 
languages.push("C++")
// console.log(languages)

// Add a new value at the beginning
languages.unshift("Swift")
// console.log(languages)

// 2D - Arrays
let names = [
    ["Michael", "Brian"], // 0
    ["Cindy", "Jasmine"] // 1
]
// console.table(names)
// console.log(names[0][1])

// Splice Method
let newArray = [4, 5, "Hello", 9, 89, 4]
// console.log(newArray)
// newArray.splice(1, 2)
newArray.splice(2, 1, 7, 5, 45, 54, 54, 56)

// console.log(newArray)

// Slice Method
let document = ["H", "e", "l", "l", "o"]
let history = document.slice()

history[3] = "hi"
// console.log('document: ', document)
// console.log('history: ', history)

// Shallow Copy
let myNewArr = [
    [1, 2],
    [3, 4]
]

// let testSlice = myNewArr.slice()
// myNewArr[0][0] = 32
// console.log('myNewArr: ', myNewArr)
// console.log('testSlice: ', testSlice)

// Deep Copy
let test = myNewArr.map(array => array.slice())
myNewArr[0][0] = 32

// console.log('Original Array: ', myNewArr)
// console.log('Copy Array: ', test)

// map function
let numbers = [1, 2]

let doubled = numbers.map(number => number * 8)

console.log(doubled)

































