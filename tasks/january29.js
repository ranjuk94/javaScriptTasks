//Write a function that takes a string and reverses it. Use try/catch to handle any errors if the input is not a string, and return "Input must be a string" when an error is caught.

function reverseString(str) {
    try {
        if (typeof str !== "string") {
            throw new Error("Input must be a string");
        }
        return str.split("").reverse().join("");
    } catch (error) {
        return "Input must be a string";
    }
}

// Example usage
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString(12345));   // Output: "Input must be a string"
console.log(reverseString(true));    // Output: "Input must be a string"

//Write a function to remove duplicate values from an array.
let arr = [1, 2, 2, 3, 4, 4, 5];
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));

//Write a function to return the factorial of a given number.



