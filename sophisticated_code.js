/* sophisticated_code.js */

// This code is a demonstration of a complex and sophisticated JavaScript program.
// It simulates a library management system with multiple functionalities.

// Class representing a book
class Book {
  constructor(title, author, genre, totalPages) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.totalPages = totalPages;
  }

  // Method to check if book is available
  isAvailable() {
    // Logic to check availability
    return true;
  }
}

// Class representing a library
class Library {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.books = [];
    this.users = [];
  }

  // Method to add books to the library
  addBook(book) {
    // Logic to add book
    this.books.push(book);
  }

  // Method to remove books from the library
  removeBook(book) {
    // Logic to remove book
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

  // Method to register new library users
  registerUser(user) {
    // Logic to register user
    this.users.push(user);
  }

  // Method to unregister library users
  unregisterUser(user) {
    // Logic to unregister user
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  // Method to search books by title
  searchBooksByTitle(title) {
    // Logic to search books
    const result = [];
    for (const book of this.books) {
      if (book.title.toLowerCase().includes(title.toLowerCase())) {
        result.push(book);
      }
    }
    return result;
  }

  // Method to search books by author
  searchBooksByAuthor(author) {
    // Logic to search books
    const result = [];
    for (const book of this.books) {
      if (book.author.toLowerCase().includes(author.toLowerCase())) {
        result.push(book);
      }
    }
    return result;
  }

  // Method to display all books in the library
  displayAllBooks() {
    // Logic to display books
    for (const book of this.books) {
      console.log(`${book.title} by ${book.author}`);
    }
  }
}

// Class representing a library user
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  // Method to borrow a book from the library
  borrowBook(library, book) {
    // Logic to borrow book
    if (book.isAvailable()) {
      // Borrow the book
      console.log(`User ${this.name} has borrowed ${book.title}`);
    } else {
      console.log(`Book ${book.title} is not available for borrowing`);
    }
  }

  // Method to return a borrowed book
  returnBook(library, book) {
    // Logic to return book
    console.log(`User ${this.name} has returned ${book.title}`);
  }
}

// Usage example

// Create library
const library = new Library("My Library", "City XYZ");

// Create books
const book1 = new Book("The Catcher in the Rye", "J.D. Salinger", "Novel", 234);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "Fiction", 312);
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Fiction", 275);

// Add books to the library
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Create users
const user1 = new User("John Doe", "john.doe@example.com");
const user2 = new User("Jane Smith", "jane.smith@example.com");

// Register users to the library
library.registerUser(user1);
library.registerUser(user2);

// Display all books in the library
library.displayAllBooks();

// Search books by author
const booksByAuthor = library.searchBooksByAuthor("Harper Lee");
console.log("Books by Harper Lee:");
for (const book of booksByAuthor) {
  console.log(`${book.title}`);
}

// User borrows a book
user1.borrowBook(library, book2);

// User returns a book
user1.returnBook(library, book2);

// Remove a book from the library
library.removeBook(book1);

// Display updated list of books
library.displayAllBooks();