/*
  OO 05-19-2020

  Task
  ----------------------------------------------------------------------------------------------------------
  Write a Person class with an instance variable, 'age', and a constructor that takes an integer,
  'initialAge', as a parameter. The constructor must assign 'initialAge' to 'age' after confirming the
  argument passed as 'initialAge' is not negative; if a negative argument is passed as 'initialAge', the
  constructor should set 'age' to 0 and print 'Age is not valid, setting age to 0.'. In addition, you must
  write the following instance methods:

    1. yearPasses() should increase the  instance variable by .
    2. amIOld() should perform the following conditional actions:
        - If age < 13, print 'You are young.'.
        - If age >= 13 and age < 18, print 'You are a teenager.'.
        - Otherwise, print 'You are old.'.

  To help you learn by example and complete this challenge, much of the code is provided for you, but you'll
  be writing everything in the future. The code that creates each instance of your Person class is in the
  main method. Don't worry if you don't understand it all quite yet!

  Input Format
  ----------------------------------------------------------------------------------------------------------
  Input is handled for you by the stub code in the editor.

  The first line contains an integer, 'T' (the number of test cases), and the 'T' subsequent lines each
  contain an integer denoting the 'age' of a Person instance.

  Sample Input
  ----------------------------------------------------------------------------------------------------------
  4
  -1
  10
  16
  18

  Sample Output
  ----------------------------------------------------------------------------------------------------------
  Age is not valid, setting age to 0.
  You are young.
  You are young.

  You are young.
  You are a teenager.

  You are a teenager.
  You are old.

  You are old.
  You are old.

*/

"use strict";

process.stdin.resume();
process.stdin.setEncoding("ascii");

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

process.stdin.on("data", function (data) {
  input_stdin += data;
});

process.stdin.on("end", function () {
  input_stdin_array = input_stdin.split("\n").filter(input => input);

  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

function Person(initialAge) {
  if (initialAge < 0) {
    console.log("Age is not valid, setting age to 0.");
    this.age = 0;
  } else {
    this.age = initialAge;
  }

  this.amIOld = function () {
    if (this.age < 13) {
      console.log("You are young.");
    } else if (this.age >= 13 && this.age < 18) {
      console.log("You are a teenager.");
    } else {
      console.log("You are old.");
    }
  };

  this.yearPasses = function () {
    this.age = this.age + 1;
  };
}

function main() {
  const tests = parseInt(readLine());

  for (let i = 0; i < tests; i++) {
    const age = parseInt(readLine());
    const person = new Person(age);

    person.amIOld();

    for (let j = 0; j < 3; j++) {
      person.yearPasses();
    }

    person.amIOld();

    console.log("");
  }
}
