/*
  OO 05-18-2020

  Task
  ----------------------------------------------------------------------------------------------------------
  Consider a database table, Emails, which has the attributes First Name and Email ID. Given 'N' rows of
  data simulating the Emails table, print an alphabetically-ordered list of people whose email address ends
  in '@gmail.com'

  Input Format
  ----------------------------------------------------------------------------------------------------------
  The first line contains an integer, 'N', total number of rows in the table.
  Each of the 'N' subsequent lines contains 2 space-separated strings denoting a person's first name and
  email ID, respectively.

  Sample Input
  ----------------------------------------------------------------------------------------------------------
  6
  riya riya@gmail.com
  julia julia@julia.me
  julia sjulia@gmail.com
  julia julia@gmail.com
  samantha samantha@gmail.com
  tanya tanya@gmail.com

  Sample Output
  ----------------------------------------------------------------------------------------------------------
  julia
  julia
  riya
  samantha
  tanya

*/

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", stdin => {
  inputString += stdin;
});

process.stdin.on("end", () => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function isGmailAccount(email) {
  const [_, domain] = email.split("@");

  if (domain === "gmail.com") {
    return true;
  }

  return false;
}

function printUsers(users) {
  for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
  }
}

function main() {
  const rows = parseInt(readLine(), 10);
  const users = [];

  for (let i = 0; i < rows; i++) {
    const [firstName, emaiID] = readLine().split(" ");

    if (isGmailAccount(emaiID)) {
      users.push(firstName);
    }
  }

  printUsers(users.sort());
}
