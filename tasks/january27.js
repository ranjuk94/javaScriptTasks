
//Create an object representing a book with properties like title, author, and year. Write a method to update the year and another to return the book's description.

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    
    updateYear(newYear) {
      this.year = newYear;
    },
    
    getDescription() {
      return `${this.title} by ${this.author}, published in ${this.year}.`;
    }
  };
  
  // Example usage
  console.log(book.getDescription()); // Output: The Great Gatsby by F. Scott Fitzgerald, published in 1925.
  book.updateYear(2024);
  console.log(book.getDescription()); // Output: The Great Gatsby by F. Scott Fitzgerald, published in 2024.
  
//Write a JavaScript program to create an object representing a student with name and grade properties. Add a method to update the grade and another method to return if the student passed (grade >= 50).


class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }

    updateGrade(newGrade) {
        this.grade = newGrade;
    }

    hasPassed() {
        return this.grade >= 50 ? "Passed" : "Failed";
    }
}

// Example usage
const student1 = new Student("Alice", 45);
console.log(student1.hasPassed()); // Output: Failed

student1.updateGrade(75);
console.log(student1.hasPassed()); // Output: Passed
