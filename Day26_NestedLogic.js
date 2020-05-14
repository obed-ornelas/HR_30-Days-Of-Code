/*
  OO 05-14-2020

  Task
  ----------------------------------------------------------------------------------------------------------
  Your local library needs your help! Given the expected and actual return dates for a library book, create
  a program that calculates the fine (if any). The fee structure is as follows:

    1. If the book is returned on or before the expected return date, no fine will be charged (i.e.: fine = 0)
    2. If the book is returned after the expected return day but still within the same calendar month and
       year as the expected return date, fine = 15 Hackos * (the number of days late).
    3. If the book is returned after the expected return month but still within the same calendar year as the
       expected return date, the fine = 500 Hackos * (the number of months late)
    4. If the book is returned after the calendar year in which it was expected, there is a fixed fine of
       10000 Hackos

  Input Format
  ----------------------------------------------------------------------------------------------------------
  The first line contains 3 space-separated integers denoting the respective day, month, and year on which
  the book was actually returned.

  The second line contains 3 space-separated integers denoting the respective day, month, and year on which
  the book was expected to be returned (due date).

  Sample Input
  ----------------------------------------------------------------------------------------------------------
  9 6 2015
  6 6 2015

  Sample Output
  ----------------------------------------------------------------------------------------------------------
  45

*/

"use strict";

process.stdin.resume();
process.stdin.setEncoding("ascii");

let input = "";
let inputSplit = [];
let lineCounter = 0;

process.stdin.on("data", function (stdin) {
  input += stdin;
});

process.stdin.on("end", function () {
  inputSplit = input.split("\n").filter(string => string);

  main();
});

function readLine() {
  return inputSplit[lineCounter++];
}

function parseDate(date) {
  const [day, month, year] = date
    .split(" ")
    .map(string => parseInt(string, 10));
  return { day, month, year };
}

function calculateFine(returnDate, dueDate) {
  if (returnDate.year > dueDate.year) {
    return 10000;
  }

  let fine = 0;

  if (returnDate.year === dueDate.year) {
    if (returnDate.month > dueDate.month) {
      fine = 500 * (returnDate.month - dueDate.month);
    } else if (returnDate.month === dueDate.month) {
      if (returnDate.day > dueDate.day) {
        fine = 15 * (returnDate.day - dueDate.day);
      }
    }
  }

  return fine;
}

function main() {
  const returnDate = parseDate(readLine());
  const dueDate = parseDate(readLine());

  console.log(calculateFine(returnDate, dueDate));
}
