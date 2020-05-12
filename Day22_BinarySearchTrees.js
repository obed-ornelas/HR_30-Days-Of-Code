/*
  OO 05-11-2020

  Task
  ----------------------------------------------------------------------------------------------------------
  The height of a binary search tree is the number of edges between the tree's root and its furthest leaf.
  You are given a pointer, 'root', pointing to the root of a binary search tree. Complete the 'getHeight'
  function provided in your editor so that it returns the height of the binary search tree.

  Input Format
  ----------------------------------------------------------------------------------------------------------
  The locked stub code in your editor reads the following inputs and assembles them into a binary search tree:
  The first line contains an integer, 'n', denoting the number of nodes in the tree.
  Each of the 'n' subsequent lines contains an integer, 'data', denoting the value of an element that must
  be added to the BST.

  Sample Input
  ----------------------------------------------------------------------------------------------------------
  7
  3
  5
  2
  1
  4
  6
  7

  Sample Output
  ----------------------------------------------------------------------------------------------------------
  3

*/

"use strict";

function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.insert = function (root, data) {
    if (root === null) {
      this.root = new Node(data);

      return this.root;
    }

    if (data <= root.data) {
      if (root.left) {
        this.insert(root.left, data);
      } else {
        root.left = new Node(data);
      }
    } else {
      if (root.right) {
        this.insert(root.right, data);
      } else {
        root.right = new Node(data);
      }
    }

    return this.root;
  };

  this.getHeight = function (root) {
    if (!root) {
      return -1;
    }

    const height =
      1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));
    return height;
  };
}

process.stdin.resume();
process.stdin.setEncoding("ascii");

let _input = "";

process.stdin.on("data", function (data) {
  _input += data;
});

process.stdin.on("end", function () {
  main();
});

function main() {
  const tree = new BinarySearchTree();
  let root = null;

  const values = _input
    .split("\n")
    .filter((input) => input)
    .map(Number);

  for (let i = 1; i < values.length; i++) {
    root = tree.insert(root, values[i]);
  }

  console.log(tree.getHeight(root));
}
