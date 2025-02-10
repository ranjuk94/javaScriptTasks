//Create a class BankAccount with a private property balance, and implement deposit() and withdraw() methods to modify the balance, ensuring the balance cannot be accessed directly outside the class.
class BankAccount {
    #balance; // Private property

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: ${amount}. New balance: ${this.#balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrawn: ${amount}. Remaining balance: ${this.#balance}`);
        } else {
            console.log("Invalid withdrawal amount or insufficient funds.");
        }
    }

    getBalance() {
        return this.#balance; // Allows checking balance safely
    }
}

// Example usage:
const myAccount = new BankAccount(100);
myAccount.deposit(50);
myAccount.withdraw(30);
console.log(`Final Balance: ${myAccount.getBalance()}`); // Accessing balance through a method


//Write a JavaScript function greet(name) that throws an error if the name is an empty string and catches the error to log "Name cannot be empty".

function greet(name) {
    try {
        if (name.trim() === "") {
            throw new Error("Name cannot be empty");
        }
        console.log(`Hello, ${name}!`);
    } catch (error) {
        console.log(error.message);
    }
}

// Example usage:
greet("Alice");  // Output: Hello, Alice!
greet("");       // Output: Name cannot be empty
greet("   ");    // Output: Name cannot be empty
