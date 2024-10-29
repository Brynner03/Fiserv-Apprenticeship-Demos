// Classes
class Product {
    // Helps us assign a property to our class
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    // Don't need "function" keyword to create a function
    displayProduct() {
        console.log(`Product: ${this.name}`)
        console.log(`Price: ${this.price}`)
    }

    // 
    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax)
    }

}

// Invoking a class
const product1 = new Product("Shirt", 19.99)
const product2 = new Product("Pants", 29.99)

// Invoke a function in a class
// product1.displayProduct()
product1.displayProduct()

const total = product1.calculateTotal(0.05)
console.log(`Total price (with tax) $${total.toFixed(2)}`)

// Invoking a class without passing down properties
// results in undefined
const product3 = new Product
product3.displayProduct()