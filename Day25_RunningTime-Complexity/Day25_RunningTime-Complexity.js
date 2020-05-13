/*
  OO 05-13-2020

  Task
  ----------------------------------------------------------------------------------------------------------
  A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.
  Given a number, 'n', determine and print whether it's Prime or Not prime.

  Note: If possible, try to come up with a O(n^(1/2)) primality algorithm, or see what sort of optimizations
  you come up with for an  algorithm. Be sure to check out the Editorial after submitting your code!

  Input Format
  ----------------------------------------------------------------------------------------------------------
  The first line contains an integer, 'T', the number of test cases.
  Each of the 'T' subsequent lines contains an integer, n , to be tested for primality.

  Sample Input
  ----------------------------------------------------------------------------------------------------------
  3
  12
  5
  7

  Sample Output
  ----------------------------------------------------------------------------------------------------------
  Not prime
  Prime
  Prime

*/

"use strict";

function isPrime(number) {
  if (number === 1) {
    console.log("Not prime");
    return;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      console.log("Not prime");
      return;
    }
  }

  console.log("Prime");
}

process.stdin.resume();
process.stdin.setEncoding("ascii");

let input = "";
let inputSplit;
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

function main() {
  const testCases = parseInt(readLine(), 10);

  for (let i = 0; i < testCases; i++) {
    const number = parseInt(readLine(), 10);
    isPrime(number);
  }
}
