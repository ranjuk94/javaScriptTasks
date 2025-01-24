
//Write a JavaScript function to check if a given date is in the future.

function isDateInFuture(date) {
    const givenDate = new Date(date); // Convert input to a Date object
    if (isNaN(givenDate)) {
        throw new Error("Invalid date format"); // Handle invalid dates
    }
    return givenDate > new Date(); // Compare with the current date
}

// Example usage:
console.log(isDateInFuture("2030-01-01")); // true
console.log(isDateInFuture("2020-01-01")); // false



//Create a function to calculate the number of days between two given dates.

function daysBetweenDates(date1, date2) {
    // Convert input dates to Date objects
    const startDate = new Date(date1);
    const endDate = new Date(date2);

    // Validate dates
    if (isNaN(startDate) || isNaN(endDate)) {
        throw new Error("Invalid date format");
    }

    // Calculate the difference in time (milliseconds)
    const timeDifference = Math.abs(endDate - startDate);

    // Convert milliseconds to days
    return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
}

// Example usage:
console.log(daysBetweenDates("2025-01-01", "2025-01-15")); // Output: 9
console.log(daysBetweenDates("2025-01-10", "2025-01-03")); // Output: 9
