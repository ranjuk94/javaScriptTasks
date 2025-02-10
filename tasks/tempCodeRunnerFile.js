
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