/*
  OO 05-18-2020

  Task
  ----------------------------------------------------------------------------------------------------------
  Given set S = {1,2,3, ..., N}. Find two integers, 'A' and 'B' (where A < B), from set S such that the
  value of 'A & B' is the maximum possible and also less than a given integer, 'K'. In this case, '&'
  represents the bitwise AND operator.

  Input Format
  ----------------------------------------------------------------------------------------------------------
  The first line contains an integer, 'T', the number of test cases.
  Each of the 'T' subsequent lines defines a test case as 2 space-separated integers, 'N' and 'K',
  respectively.

  Sample Input
  ----------------------------------------------------------------------------------------------------------
  3
  5 2
  8 5
  2 2

  Sample Output
  ----------------------------------------------------------------------------------------------------------
  1
  4
  0

*/

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (stdin) => {
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

function makeSet(max) {
  const set = [];

  for (let i = 1; i <= max; i++) {
    set.push(i);
  }

  return set;
}

function findLowestBitwiseAnd(setMax, limit) {
  const set = makeSet(setMax);
  let lowestAnd = 0;

  for (let i = 0; i < set.length - 1; i++) {
    for (let j = i + 1; j < set.length; j++) {
      const bitwiseAnd = set[i] & set[j];

      if (bitwiseAnd < limit && bitwiseAnd > lowestAnd) {
        lowestAnd = bitwiseAnd;
      }
    }
  }

  return lowestAnd;
}

function main() {
  const tests = parseInt(readLine(), 10);

  for (let i = 0; i < tests; i++) {
    const [n, k] = readLine().split(" ");

    console.log(findLowestBitwiseAnd(n, k));
  }
}
