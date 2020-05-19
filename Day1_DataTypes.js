/*
  OO 05-18-2020

  Task
  ----------------------------------------------------------------------------------------------------------
  Complete the code in the editor below. The variables 'i', 'd', and 'e' are already declared and
  initialized for you. You must:

    1. Declare 3 variables: one of type int, one of type double, and one of type String.
    2. Read 3 lines of input from stdin (according to the sequence given in the Input Format section below)
       and initialize your 3 variables.
    3. Use the + operator to perform the following operations:
        1. Print the sum of 'i' plus your int variable on a new line.
        2. Print the sum of 'd' plus your double variable to a scale of one decimal place on a new line.
        3. Concatenate 's' with the string you read as input and print the result on a new line.

  Input Format
  ----------------------------------------------------------------------------------------------------------
  The first line contains an integer that you must sum with 'i'.
  The second line contains a double that you must sum with 'd'.
  The third line contains a string that you must concatenate with 's'.

  Sample Input
  ----------------------------------------------------------------------------------------------------------
  12
  4.0
  is the best place to learn and practice coding!

  Sample Output
  ----------------------------------------------------------------------------------------------------------
  16
  8.0
  HackerRank is the best place to learn and practice coding!

*/

"use strict";

process.stdin.resume();
process.stdin.setEncoding("ascii");

let input_stdin = "";
let input_stdin_array;
let input_currentline = 0;

process.stdin.on("data", function (data) {
  input_stdin += data;
});

process.stdin.on("end", function () {
  input_stdin_array = input_stdin.split("\n");

  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

function main() {
  const i = 4;
  const d = 4.0;
  const s = "HackerRank ";

  let int = readLine();
  let double = readLine();
  let string = readLine();

  console.log(i + parseInt(int, 10));

  console.log((d + parseFloat(double)).toFixed(1));

  console.log(s + string);
}
