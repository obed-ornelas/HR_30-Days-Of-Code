/*
  OO 05-19-2020

  Task
  ----------------------------------------------------------------------------------------------------------
  Write a factorial function that takes a positive integer, 'N' as a parameter and prints the result of N!
  (N factorial).

  Input Format
  ----------------------------------------------------------------------------------------------------------
  A single integer, N (the argument to pass to factorial).

  Sample Input
  ----------------------------------------------------------------------------------------------------------
  3

  Sample Output
  ----------------------------------------------------------------------------------------------------------
  6

*/

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let input = "";
let currentLine = 0;

process.stdin.on("data", stdin => {
  input += stdin;
});

process.stdin.on("end", () => {
  input = input
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return input[currentLine++];
}

function factorial(n) {
  if (n === 1) {
    return n * 1;
  } else {
    return n * factorial(n - 1);
  }
}

function main() {
  const n = parseInt(readLine(), 10);

  let result = factorial(n);
  console.log(result);
}
