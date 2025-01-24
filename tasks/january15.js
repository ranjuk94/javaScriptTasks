//Check if a number is positive, negative, or zero and log the result.
function checkNumber(num) {
    if (num > 0) {
        console.log("The number is positive.");
    } else if (num < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}

// Example usage:
checkNumber(10);  // Logs: "The number is positive."
checkNumber(-5);  // Logs: "The number is negative."
checkNumber(0);   // Logs: "The number is zero."

//Determine the season based on a month number (1 to 12) using a switch statement.

function getSeason(month) {
    let season;

    switch (month) {
        case 12:
        case 1:
        case 2:
            season = "Winter";
            break;
        case 3:
        case 4:
        case 5:
            season = "Spring";
            break;
        case 6:
        case 7:
        case 8:
            season = "Summer";
            break;
        case 9:
        case 10:
        case 11:
            season = "Autumn";
            break;
        default:
            season = "Invalid month number. Please enter a number between 1 and 12.";
    }

    return season;
}

// Example usage
const monthNumber = 4;
console.log(`Month ${monthNumber} is in ${getSeason(monthNumber)}.`);



//Write a JavaScript program that uses a for loop to print all even numbers between 1 and 20"
for (let i = 1; i <=20; i++) {
    if (i%2==0){
    console.log(i);
}  
}