/*
    OO 05-01-2020
    Given a base-10 integer, N, convert it to binary (base-2).
    Then find and print the base-10 integer denoting the maximum number of consecutive 1's in N's binary representation.
*/

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function toBinary(initial) {
  let binary = "";

  let n = initial;

  while (n >= 0) {
    let remainder = n % 2;

    if (n === 0) {
      binary = remainder + binary;
      break;
    }

    n = Math.floor(n / 2);

    binary = remainder + binary;
  }

  return binary;
}

function countOnes(binary) {
  let max = 0;
  let count = 0;

  for (let i = 0; i < binary.length; i++) {
    if (parseInt(binary[i]) === 1) {
      count++;

      if (count > max) {
        max = count;
      }
    } else {
      count = 0;
    }
  }

  return max;
}

function main() {
  const n = parseInt(readLine(), 10);

  if (n >= 1 && n <= Math.pow(10, 6)) {
    const binary = toBinary(n);
    console.log(countOnes(binary));
  }
}
