/*
    OO 05-08-2020

    Task
    ----------------------------------------------------------------------------------------------------------
    Write a Calculator class with a single method: int power(int,int). The power method takes two integers, 'n'
    and 'p', as parameters and returns the integer result of n^p. If either 'n' or 'p' is negative, then the
    method must throw an exception with the message: 'n and p should be non-negative'.

    Note: Do not use an access modifier (e.g.: public) in the declaration for y  //Does not apply, JS

    Input Format
    ----------------------------------------------------------------------------------------------------------
    Input from stdin is handled for you by the locked stub code in your editor. The first line contains an
    integer, 'T', the number of test cases. Each of the 'T' subsequent lines describes a test case in 2
    space-separated integers denoting 'n' and 'p', respectively

    Sample Input
    ----------------------------------------------------------------------------------------------------------
    4
    3 5
    2 4
    -1 -2
    -1 3

    Sample Output
    ----------------------------------------------------------------------------------------------------------
    243
    16
    n and p should be non-negative
    n and p should be non-negative
*/

"use strict";

process.stdin.resume();
process.stdin.setEncoding("ascii");

let input_stdin = "";
let input_stdin_array = "";
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

//Write your code here
class Calculator {
  power(x, y) {
    if (x < 0 || y < 0) {
      throw "n and p should be non-negative";
    }

    return Math.pow(x, y);
  }
}

function main() {
  const myCalculator = new Calculator();
  let T = parseInt(readLine());

  while (T-- > 0) {
    let num = readLine().split(" ");

    try {
      let n = parseInt(num[0]);
      let p = parseInt(num[1]);
      let ans = myCalculator.power(n, p);
      console.log(ans);
    } catch (e) {
      console.log(e);
    }
  }
}
