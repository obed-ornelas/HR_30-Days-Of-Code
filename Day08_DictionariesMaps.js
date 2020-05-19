/*
  OO 05-19-2020

  Task
  ----------------------------------------------------------------------------------------------------------
  Given 'N' names and phone numbers, assemble a phone book that maps friends' names to their respective
  phone numbers. You will then be given an unknown number of names to query your phone book for. For each
  'name' queried, print the associated entry from your phone book on a new line in the form 'name=phoneNumber';
  if an entry for 'name' is not found, print 'Not found' instead.

  Input Format
  ----------------------------------------------------------------------------------------------------------
  The first line contains an integer, 'n', denoting the number of entries in the phone book.
  Each of the 'n' subsequent lines describes an entry in the form of 2 space-separated values on a single
  line. The first value is a friend's name, and the second value is an 8-digit phone number.

  After the 'n' lines of phone book entries, there are an unknown number of lines of queries. Each line
  (query) contains a 'name' to look up, and you must continue reading lines until there is no more input.

  Sample Input
  ----------------------------------------------------------------------------------------------------------
  3
  sam 99912222
  tom 11122222
  harry 12299933
  sam
  edward
  harry

  Sample Output
  ----------------------------------------------------------------------------------------------------------
  sam=99912222
  Not found
  harry=12299933

*/

"use strict";

process.stdin.resume();
process.stdin.setEncoding("ascii");

let input = "";
let inputSplit;
let currentLine = 0;

process.stdin.on("data", function (stdin) {
  input += stdin;
});

process.stdin.on("end", function () {
  inputSplit = input.split("\n").filter(input => input);

  main();
});

function readLine() {
  return inputSplit[currentLine++];
}

function PhoneBook() {
  this.contacts = {};
}

PhoneBook.prototype.addContact = function (name, phoneNumber) {
  this.contacts[name] = phoneNumber;
};

PhoneBook.prototype.findContact = function (name) {
  if (this.contacts[name]) {
    return `${name}=${this.contacts[name]}`;
  }

  return "Not found";
};

function main() {
  const entries = parseInt(readLine(), 10);
  const phoneBook = new PhoneBook();

  for (let i = 0; i < entries; i++) {
    const [name, phoneNumber] = readLine().split(" ");

    phoneBook.addContact(name, phoneNumber);
  }

  let contact = readLine();

  while (contact) {
    console.log(phoneBook.findContact(contact));

    contact = readLine();
  }
}
