/*
  OO 05-19-2020

  Task
  ----------------------------------------------------------------------------------------------------------
  Given an integer, , perform the following conditional actions:

  If 'n' is odd, print Weird
  If 'n' is even and in the inclusive range of 2 to 5, print Not Weird
  If 'n' is even and in the inclusive range of 6 to 20, print Weird
  If 'n' is even and greater than 20, print Not Weird

  Complete the stub code provided in your editor to print whether or not  is weird.

  Input Format
  ----------------------------------------------------------------------------------------------------------
  A single line containing a positive integer, 'n'.

  Sample Input
  ----------------------------------------------------------------------------------------------------------
  3

  Sample Output
  ----------------------------------------------------------------------------------------------------------
  Weird

*/

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", stdin => {
  inputString += stdin;
});

process.stdin.on("end", () => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function isWeird(number) {
  if (number > 100 || number < 1) {
    return;
  }

  if (number % 2 !== 0) {
    return "Weird";
  } else {
    if (number >= 2 && number <= 5) {
      return "Not Weird";
    } else if (number >= 6 && number <= 20) {
      return "Weird";
    } else if (number > 20) {
      return "Not Weird";
    }
  }
}

function main() {
  const number = parseInt(readLine(), 10);

  console.log(isWeird(number));
}
