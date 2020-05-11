/*
  OO 05-10-2020

  Task
  ----------------------------------------------------------------------------------------------------------
  Given an array, 'a' , of size 'n' distinct elements, sort the array in ascending order using the Bubble Sort
  algorithm above. Once sorted, print the following 3 lines:

  1. Array is sorted in 'numSwaps' swaps.
    where 'numSwaps' is the number of swaps that took place.
  2. First Element: 'firstElement'
    where 'firstElement' is the first element in the sorted array.
  3. Last Element: 'lastElement'
    where 'lastElement' is the last element in the sorted array.

  Sample Input 0
  ----------------------------------------------------------------------------------------------------------
  3
  1 2 3

  Sample Output 0
  ----------------------------------------------------------------------------------------------------------
  Array is sorted in 0 swaps.
  First Element: 1
  Last Element: 3

  Sample Input 1
  ----------------------------------------------------------------------------------------------------------
  3
  3 2 1

  Sample Output 1
  ----------------------------------------------------------------------------------------------------------
  Array is sorted in 3 swaps.
  First Element: 1
  Last Element: 3

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
function printResults(array, count) {
  console.log("Array is sorted in %i swaps.", count);
  console.log("First Element:%i", array[0]);
  console.log("Last Element:%i", array[array.length - 1]);
}

function bubbleSort(array) {
  const copy = [...array];
  let numberOfSwaps = 0;

  for (let i = 0; i < copy.length; i++) {
    for (let j = 0; j < copy.length - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (copy[j] > copy[j + 1]) {
        const temp = copy[j];
        copy[j] = copy[j + 1];
        copy[j + 1] = temp;

        numberOfSwaps++;
      }
    }

    // If no elements were swapped during a traversal, array is sorted
    if (numberOfSwaps == 0) {
      break;
    }
  }

  return [copy, numberOfSwaps];
}

function main() {
  const n = parseInt(readLine());
  const a = readLine().split(" ");
  const ints = a.map(Number);

  const [sorted, swapCount] = bubbleSort(ints);
  printResults(sorted, swapCount);
}
