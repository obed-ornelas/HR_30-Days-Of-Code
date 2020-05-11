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
