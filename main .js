// Class to represent a Product
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// Class to represent a Shopping Cart Item
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Method to calculate the total price of the item
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

// Class to represent the Shopping Cart
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    // Method to add an item to the cart
    addItem(product, quantity) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new ShoppingCartItem(product, quantity));
        }
    }

    // Method to remove an item from the cart
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Method to get the total price of items inside the cart
    getTotalPrice() {
        return this.items.reduce((total, item) => total += item.getTotalPrice(), 0);
    }}

    // Method to display cart items
    displayCart() 
        console.log("Shopping Cart:");
        this.items.forEach(item => {
            console.log(`${item.product.name} - $${item.product.price} x ${item.quantity} = $${item.getTotalPrice()}`);
      });

// Test the ability of our objects
// Create products
const product1 = new Product(1, "Laptop", 1500);
const product2 = new Product(2, "Smartphone", 800);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 1);
cart.addItem(product2, 2);

// Display the cart
cart.displayCart();

// Remove an item from the cart
cart.removeItem(1);