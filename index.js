class Student {
    constructor(firstname, lastname, grade) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.grade = grade;
    }

    greet() {
        console.log(`Hi, my name is ${this.firstname} ${this.lastname}`);
    }

    tellGrade() {
        console.log(`My grade is ${this.grade}`);
    }
}

const student1 = new Student("Ilkin", "Ibadov", 12);

// student1.tellGrade();

// encapsulation (Private fields)
class BankAccount {
    #balance;  // Private field

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        console.log(this.#balance)
    }
}

const myAccount = new BankAccount(100);
myAccount.deposit(50);
// myAccount.getBalance()  // Output: 150
// console.log(myAccount.#balance); // Error: Private field '#balance' must be declared in an enclosing class


// inheritance
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }

    start() {
        console.log(`${this.brand} is starting.`);
    }
}

class Car extends Vehicle {
    constructor(brand, model) {
        super(brand);  // Calls the constructor of the parent class (Vehicle)
        this.model = model;
    }

    showDetails() {
        console.log(`Car: ${this.brand} ${this.model}`);
    }
}

const myCar = new Car("Toyota", "Camry");
// myCar.start();         // Output: Toyota is starting.
// myCar.showDetails();    // Output: Car: Toyota Camry


// polymorphism
class Payment {
    processPayment(amount) {
        console.log(`Processing payment of $${amount}`);
    }
}

class CreditCardPayment extends Payment {
    processPayment(amount) {
        console.log(`Processing credit card payment of $${amount}`);
    }
}

class PayPalPayment extends Payment {
    processPayment(amount) {
        console.log(`Processing PayPal payment of $${amount}`);
    }
}

class CashPayment extends Payment {
    processPayment(amount) {
        console.log(`Processing cash payment of $${amount}`);
    }
}

function processOrder(paymentMethod, amount) {
    paymentMethod.processPayment(amount);
}

const creditCard = new CreditCardPayment();
const paypal = new PayPalPayment();
const cash = new CashPayment();

// processOrder(creditCard, 100);  // Output: Processing credit card payment of $100
// processOrder(paypal, 50);       // Output: Processing PayPal payment of $50
// processOrder(cash, 20);         // Output: Processing cash payment of $20


// abstraction
class Shape {
    constructor(color) {
        if (new.target === Shape) {
            throw new Error("Cannot instantiate abstract class Shape directly.");
        }
        this.color = color;
    }

    draw() {
        throw new Error("Draw method must be implemented by a subclass");
    }
}

class Circle extends Shape {
    draw() {
        console.log(`Drawing a circle with color ${this.color}`);
    }
}

class Square extends Shape {
    // constructor(color) {
    //     super(color)
    // }

    draw() {
        console.log(`Drawing a square with color ${this.color}`);
    }
}

// const shape = new Shape("blue");  // Error: Cannot instantiate abstract class Shape directly.

const circle = new Circle("red");
// circle.draw();  // Output: Drawing a circle with color red

const square = new Square("blue");
// square.draw();  // Output: Drawing a square with color blue
