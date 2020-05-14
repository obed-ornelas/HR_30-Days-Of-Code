"use strict";

process.stdin.resume();
process.stdin.setEncoding("ascii");

let input = "";
let inputSplit = [];
let lineCounter = 0;

process.stdin.on("data", function (stdin) {
    input += stdin;
});

process.stdin.on("end", function () {
    inputSplit = input.split("\n").filter(string => string);
   main();
});

function readLine() {
    return inputSplit[lineCounter++];
}

function parseDate(date){
    const [day, month, year] = date.split(" ").map(string => parseInt(string, 10));
    return { day, month, year };
}

function calculateFine(returnDate, dueDate) {
    if (returnDate.year > dueDate.year) {
        return 10000;
    }

    let fine = 0;

    if (returnDate.year === dueDate.year) {
        if(returnDate.month > dueDate.month) {
            fine = 500 * (returnDate.month - dueDate.month);
        } else if (returnDate.month === dueDate.month) {
            if (returnDate.day > dueDate.day) {
                fine = 15 * (returnDate.day - dueDate.day);
            }
        }
    }

    return fine;
}

function main() {
    const returnDate = parseDate(readLine());
    const dueDate = parseDate(readLine());

    console.log(calculateFine(returnDate, dueDate));
}
