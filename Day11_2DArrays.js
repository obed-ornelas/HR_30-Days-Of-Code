/*
  OO 05-01-2020

  Context
  ----------------------------------------------------------------------------------------------------------
  Given a 6x6 2D Array, A

  1 1 1 0 0 0
  0 1 0 0 0 0
  1 1 1 0 0 0
  0 0 0 0 0 0
  0 0 0 0 0 0
  0 0 0 0 0 0

  We define an hourglass in A to be a subset of values with indices falling in this pattern in A's graphical representation:

  a b c
    d
  e f g

  There are 16 hourglasses in A, and an hourglass sum is the sum of an hourglass' values.

  Task
  ----------------------------------------------------------------------------------------------------------
  Calculate the hourglass sum for every hourglass in A, then print the maximum hourglass sum.

  Input Format
  ----------------------------------------------------------------------------------------------------------
  There are 6 lines of input, where each line contains 6 space-separated integers describing 2D Array A;
  every value in A will be in the inclusive range of -9 to 9.
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

function getHourGlassesSums(twoDArray) {
  const maxRow = 4,
    maxColumn = 4;
  const hourGlasses = [];

  function mapHourGlass(x, y) {
    return [
      twoDArray[x][y],
      twoDArray[x][y + 1],
      twoDArray[x][y + 2],
      twoDArray[x + 1][y + 1],
      twoDArray[x + 2][y],
      twoDArray[x + 2][y + 1],
      twoDArray[x + 2][y + 2],
    ];
  }

  function getSum(values) {
    return values.reduce((acc, i) => acc + i, 0);
  }

  let counter = 0;

  for (let j = 0; j < maxRow; j++) {
    for (let k = 0; k < maxColumn; k++) {
      const sum = getSum(mapHourGlass(j, k));
      hourGlasses[counter] = sum;

      counter++;
    }
  }

  return hourGlasses;
}

function getMaxSum(sums) {
  const maxSum = sums.reduce((acc, sum) => {
    if (acc < sum) {
      acc = sum;
    }

    return acc;
  }, sums[0]);

  return maxSum;
}

function main() {
  let arr = Array(6);

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine()
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  const sums = getHourGlassesSums(arr);

  console.log(getMaxSum(sums));
}
