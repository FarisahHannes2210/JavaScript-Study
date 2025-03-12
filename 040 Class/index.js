//class = (ES6 feature) provides a more structured and 
//          cleaner way to work with objects compared to 
//          traditional constructor functions 

// eg. static keyword, encapsulation, inheritence


class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}`);
    }

    calculateTotal(){
        return this.price + (this.price * salesTax);
    }


}

const salesTax = 0.05;

const prod1 = new Product("Shirt", 12.99);
const prod2 = new Product("Pants", 10.88);
const prod3 = new Product("Underwear", 100.87);

prod1.displayProduct();
prod2.displayProduct();
prod3.displayProduct();

const total = prod3.calculateTotal(salesTax);

console.log(`Total price (with tax): $${total.toFixed(2)}`);