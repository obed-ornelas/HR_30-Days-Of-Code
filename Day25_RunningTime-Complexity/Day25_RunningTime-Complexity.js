"use strict";

function isPrime(number) {
    if (number === 1) {
        console.log("Not prime");
        return
    }

    for (let i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0){
            console.log("Not prime");
            return;
        }
    }

    console.log("Prime");
}

process.stdin.resume();
process.stdin.setEncoding("ascii");

let input = "";
let inputSplit;
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

function main(){
    const testCases = parseInt(readLine(), 10);
    
    for (let i = 0; i < testCases; i++){
        const number = parseInt(readLine(), 10);
        isPrime(number);
    }
}
