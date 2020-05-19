/*
  OO 05-19-2020

  Task
  ----------------------------------------------------------------------------------------------------------
  Given an integer, 'n', print its first 10 multiples. Each multiple n x 1 (where i <= i <= 10) should be
  printed on a new line in the form: 'n x 1 = result'

  Input Format
  ----------------------------------------------------------------------------------------------------------
  A single integer, 'n'.

  Sample Input
  ----------------------------------------------------------------------------------------------------------
  2

  Sample Output
  ----------------------------------------------------------------------------------------------------------
  2 x 1 = 2
  2 x 2 = 4
  2 x 3 = 6
  2 x 4 = 8
  2 x 5 = 10
  2 x 6 = 12
  2 x 7 = 14
  2 x 8 = 16
  2 x 9 = 18
  2 x 10 = 20

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

function printMultiples(number) {
  if (number < 2 || number > 20) {
    return;
  }

  return function (multiples) {
    for (let i = 1; i <= multiples; i++) {
      const result = number * i;
      console.log(`${number} x ${i} = ${result}`);
    }
  };
}

function main() {
  const n = parseInt(readLine(), 10);

  printMultiples(n)(10);
}
