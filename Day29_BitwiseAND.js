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
