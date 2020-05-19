/*
  OO 05-19-2020

  Task
  ----------------------------------------------------------------------------------------------------------
  Given an array, A, of N integers, print A's elements in reverse order as a single line of space-separated
  numbers.

  Input Format
  ----------------------------------------------------------------------------------------------------------
  The first line contains an integer, N (the size of our array).
  The second line contains N space-separated integers describing array A's elements.

  Sample Input
  ----------------------------------------------------------------------------------------------------------
  4
  1 4 3 2


  Sample Output
  ----------------------------------------------------------------------------------------------------------
  2 3 4 1

*/

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let inputSplit;
let currentLine = 0;

process.stdin.on("data", stdin => {
  inputString += stdin;
});

process.stdin.on("end", () => {
  inputSplit = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputSplit[currentLine++];
}

function reverseArray(array) {
  let reversed = [];

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] < 1 || array[i] > 10000) {
      console.log("A fails constraints, returning");
      return;
    }

    reversed.push(array[i]);
  }

  return reversed;
}

function main() {
  const arraySize = parseInt(readLine(), 10);

  if (arraySize < 1 || arraySize > 1000) {
    console.log("N fails constraints, returning");
    return;
  }

  const array = readLine()
    .split(" ")
    .map(arrTemp => parseInt(arrTemp, 10));

  console.log(reverseArray(array).join(" "));
}
