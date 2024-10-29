class Person {
    constructor(name, location){
        this.name = name
        this.location = location
    }

    introduce() {
        return `Hello, my name is ${this.name}, I am from ${this.location}.`
    }
}

// export it
module.exports = Person