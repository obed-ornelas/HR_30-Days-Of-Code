/*
  OO 05-19-2020

  Task
  ----------------------------------------------------------------------------------------------------------
  Given a string, S, of length N that is indexed from 0 to N - 1, print its even-indexed and odd-indexed
  characters as 2 space-separated strings on a single line (see the Sample below for more detail).

  Input Format
  ----------------------------------------------------------------------------------------------------------
  The first line contains an integer, T (the number of test cases).
  Each line i of the T subsequent lines contain a String, S.

  Sample Input
  ----------------------------------------------------------------------------------------------------------
  2
  Hacker
  Rank

  Sample Output
  ----------------------------------------------------------------------------------------------------------
  Hce akr
  Rn ak

*/

"use strict";

process.stdin.resume();
process.stdin.setEncoding("ascii");

let input = "";
let inputSplit;
let lineCounter = 0;

process.stdin.on("data", function (stdin) {
  input += stdin;
});

process.stdin.on("end", function () {
  inputSplit = input.split("\n").filter(input => input);

  main();
});

function readLine() {
  return inputSplit[lineCounter++];
}

function parseEvenOddChars(string) {
  let evenChars = "", oddChars = "";

  for (let i = 0; i < string.length; i++) {
    if (i % 2 !== 0) {
      oddChars += string[i];
    } else {
      evenChars += string[i];
    }
  }

  return `${evenChars} ${oddChars}`;
}

function main() {
  const tests = parseInt(readLine(), 10);

  for (let i = 0; i < tests; i++) {
    console.log(parseEvenOddChars(readLine()));
  }
}
