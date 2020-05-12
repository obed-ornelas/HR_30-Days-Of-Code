"use strict";

function Queue() {
  this.queue = [];
}

Queue.prototype.enqueue = function (element) {
  this.queue.push(element);
};

Queue.prototype.dequeue = function () {
  return this.queue.shift();
};

Queue.prototype.isEmpty = function () {
  return this.queue.length === 0;
};

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

  this.levelOrder = function (root) {
    const queue = new Queue();
    const traversed = [];

    queue.enqueue(root);

    while (!queue.isEmpty()) {
      const node = queue.dequeue();

      traversed.push(node.data);

      if (node.left) {
        queue.enqueue(node.left);
      }

      if (node.right) {
        queue.enqueue(node.right);
      }
    }

    console.log(traversed.map(int => int.toString()).join(" "));
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
    .filter(input => input)
    .map(Number);

  for (let i = 1; i < values.length; i++) {
    root = tree.insert(root, values[i]);
  }

  tree.levelOrder(root);
}
