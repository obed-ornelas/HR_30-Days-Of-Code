/*
    OO 05-05-2020

    Task
    ----------------------------------------------------------------------------------------------------------
    Given a Book class and a Solution class, write a MyBook class that does the following:

    - Inherits from Book
    - Has a parameterized constructor taking these  parameters:
        1. string 'title'
        2. string 'author'
        3. int 'price'
    - Implements the Book class' abstract display() method so it prints these 3 lines:
        1. 'Title:', a space, and then the current instance's title.
        2. 'Author:', a space, and then the current instance's author.
        3. 'Price', a space, and then the current instance's price.

    Sample Input
    ----------------------------------------------------------------------------------------------------------
    The Alchemist
    Paulo Coelho
    248

    Sample Output
    ----------------------------------------------------------------------------------------------------------
    Title: The Alchemist
    Author: Paulo Coelho
    Price: 248
*/

"use strict";

var _input = "";
var _index = 0;
process.stdin.on("data", (data) => {
  _input += data;
});
process.stdin.on("end", () => {
  _input = _input.split(new RegExp("\n"));
  main();
});
function readLine() {
  return _input[_index++];
}

/**** Ignore above this line. ****/

class Book {
  constructor(title, author) {
    if (this.constructor === Book) {
      throw new TypeError(
        "Do not attempt to directly instantiate an abstract class."
      );
    } else {
      this.title = title;
      this.author = author;
    }
  }

  display() {
    console.log("Implement the 'display' method!");
  }
}

// Declare your class here.
class MyBook extends Book {
  /**
   *   Class Constructor
   *
   *   @param title The book's title.
   *   @param author The book's author.
   *   @param price The book's price.
   **/
  // Write your constructor here
  constructor(title, author, price) {
    super(title, author);

    this.price = price;
  }

  /**
   *   Method Name: display
   *
   *   Print the title, author, and price in the specified format.
   **/
  // Write your method here
  display() {
    console.log("Title: %s", this.title);
    console.log("Author: %s", this.author);
    console.log("Price: %i", this.price);
  }

  // End class
}

function main() {
  let title = readLine();
  let author = readLine();
  let price = +readLine();

  let book = new MyBook(title, author, price);
  book.display();
}
