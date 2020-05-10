/*
  OO 05-09-2020

  Task
  ----------------------------------------------------------------------------------------------------------
  A palindrome is a word, phrase, number, or other sequence of characters which reads the same backwards and 
  forwards. Can you determine if a given string, 's', is a palindrome?

  To solve this challenge, we must first take each character in 's', enqueue it in a queue, and also push that 
  same character onto a stack. Once that's done, we must dequeue the first character from the queue and pop 
  the top character off the stack, then compare the two characters to see if they are the same; as long as the 
  characters match, we continue dequeueing, popping, and comparing each character until our containers are empty
  (a non-match means 's' isn't a palindrome).

  Write the following declarations and implementations:
    1. Two instance variables: one for your 'stack', and one for your 'queue'.
    2. A void pushCharacter(char ch) method that pushes a character onto a stack.
    3. A void enqueueCharacter(char ch) method that enqueues a character in the 'queue' instance variable.
    4. A char popCharacter() method that pops and returns the character at the top of the 'stack' instance variable.
    5. A char dequeueCharacter() method that dequeues and returns the first character in the 'queue' instance variable.

  Sample Input
  ----------------------------------------------------------------------------------------------------------
  racecar

  Sample Output
  ----------------------------------------------------------------------------------------------------------
  The word, racecar, is a palindrome.

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

function Solution() {
  (this.stack = []), (this.queue = []);
}

Solution.prototype.pushCharacter = function (char) {
  this.stack.push(char);
};

Solution.prototype.enqueueCharacter = function (char) {
  this.queue.push(char);
};

Solution.prototype.popCharacter = function () {
  return this.stack.pop();
};

Solution.prototype.dequeueCharacter = function () {
  return this.queue.shift();
};

function main() {
  // read the string s
  let s = readLine();
  let len = s.length;
  // create the Solution class object p
  const obj = new Solution();
  //push/enqueue all the characters of string s to stack
  for (let i = 0; i < len; i++) {
    obj.pushCharacter(s.charAt(i));
    obj.enqueueCharacter(s.charAt(i));
  }

  let isPalindrome = true;
  /*
    pop the top character from stack
    dequeue the first character from queue
    compare both the characters*/

  for (let i = 0; i < len / 2; i++) {
    if (obj.popCharacter() != obj.dequeueCharacter()) {
      isPalindrome = false;
      break;
    }
  }
  //finally print whether string s is palindrome or not

  if (isPalindrome) {
    console.log("The word, " + s + ", is a palindrome.");
  } else {
    console.log("The word, " + s + ", is not a palindrome.");
  }
}
