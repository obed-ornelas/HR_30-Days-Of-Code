/*
  OO 05-12-2020

  Task
  ----------------------------------------------------------------------------------------------------------
  A Node class is provided for you in the editor. A Node object has an integer data field, 'data' , and a Node
  instance pointer, 'next', pointing to another node (i.e.: the next node in a list).

  A 'removeDuplicates' function is declared in your editor, which takes a pointer to the 'head' node of a
  linked list as a parameter. Complete 'removeDuplicates' so that it deletes any duplicate nodes from the
  list and returns the head of the updated list.

  Note: The 'head' pointer may be null, indicating that the list is empty. Be sure to reset your 'next' pointer
  when performing deletions to avoid breaking the list.

  Input Format
  ----------------------------------------------------------------------------------------------------------
  You do not need to read any input from stdin. The following input is handled by the locked stub code and
  passed to the 'removeDuplicates' function:

  The first line contains an integer, 'N', the number of nodes to be inserted.
  The 'N' subsequent lines each contain an integer describing the 'data' value of a node being inserted at
  the list's tail.

  Sample Input
  ----------------------------------------------------------------------------------------------------------
  6
  1
  2
  2
  3
  3
  4

  Sample Output
  ----------------------------------------------------------------------------------------------------------
  1 2 3 4

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
  input_stdin_array = input_stdin.split("\n").filter((input) => input);
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

function Node(data) {
  this.data = data;
  this.next = null;
}

function Solution() {
  this.removeDuplicates = function (head) {
    const distinct = [];

    let previousNode = null;
    let currentNode = head;

    while (currentNode) {
      if (distinct.indexOf(currentNode.data) === -1) {
        distinct.push(currentNode.data);

        previousNode = currentNode;
      } else {
        previousNode.next = currentNode.next;
      }

      currentNode = currentNode.next;
    }

    return head;
  };

  this.insert = function (head, data) {
    const node = new Node(data);

    if (head == null) {
      head = node;
    } else if (head.next == null) {
      head.next = node;
    } else {
      let start = head;

      while (start.next != null) {
        start = start.next;
      }

      start.next = node;
    }

    return head;
  };

  this.display = function (head) {
    let start = head;
    const toDisplay = [];

    while (start) {
      toDisplay.push(start.data);
      start = start.next;
    }

    console.log(toDisplay.map((int) => int.toString()).join(" "));
  };
}

function main() {
  const T = parseInt(readLine());
  let head = null;
  const mylist = new Solution();

  for (let i = 0; i < T; i++) {
    let data = parseInt(readLine());
    head = mylist.insert(head, data);
  }

  head = mylist.removeDuplicates(head);
  mylist.display(head);
}
