/*
    OO 05-07-2020

    Task
    ----------------------------------------------------------------------------------------------------------
    Read a string, 'S', and print its integer value; if 'S' cannot be converted to an integer,
    print 'Bad String'

    Sample Input
    ----------------------------------------------------------------------------------------------------------
    za

    Sample Output
    ----------------------------------------------------------------------------------------------------------
    Bad String
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

/////////////// ignore above this line ////////////////////

/*
 * You can use the following pseudocode:
 *
 * `S` = read string from stdin.
 * try {
 *     `N` = numeric value of `S`.
 *
 *     If `N` is `NaN` or `undefined`, then some exception must be thrown,
 *     you can write the following withtout using conditional statement:
 *     <condition to return true when `N` is `NaN` or `undefined`> && an_undefined_function_call() // OO - Not a fan of this
 *
 *     print `N`
 * } catch (err) {
 *     print `Bad String`.
 * }
 */

function parseAndPrint(number) {
  try {
    const parsed = parseInt(number, 10);

    if (isNaN(parsed)) {
      throw TypeError("not a number");
    }

    console.log(parsed);
  } catch (e) {
    console.error("Bad String");
  }
}

function main() {
  const s = readLine();

  parseAndPrint(s);
}
