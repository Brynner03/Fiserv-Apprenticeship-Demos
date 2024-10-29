// Define the Product class to represent a product with a name and price
class Product {
    // Constructor to initialize Product properties: name and price
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    // Method to display the product's details (name and price)
    // Note: No need for the "function" keyword when defining methods inside a class
    displayProduct() {
        console.log(`Product: ${this.name}`)
        console.log(`Price: ${this.price}`)
    }

    // Method to calculate the total price, including sales tax
    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax)
    }
}

// Create instances of the Product class with specific properties
const product1 = new Product("Shirt", 19.99)
const product2 = new Product("Pants", 29.99)

// Call the displayProduct() method to show product1's details
product1.displayProduct()

// Calculate the total price of product1 with 5% sales tax and print it, formatted to two decimal places
const total = product1.calculateTotal(0.05)
console.log(`Total price (with tax): $${total.toFixed(2)}`)

// Demonstrate what happens when invoking a class without passing properties
// This will result in undefined values for name and price
const product3 = new Product
product3.displayProduct()
