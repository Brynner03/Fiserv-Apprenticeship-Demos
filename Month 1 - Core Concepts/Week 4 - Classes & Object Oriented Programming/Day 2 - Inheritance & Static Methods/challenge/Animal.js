class Animal {
    constructor(name) {
      this.name = name;
    }
  
    greet() {
      return `Hello, I'm an animal and my name is ${this.name}.`;
    }
  }
  
  module.exports = {Animal};
  