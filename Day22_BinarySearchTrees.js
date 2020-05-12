"use strict";

// Start of function Node
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
    this.insert = function(root, data) {
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
    
    this.getHeight = function(root) {
        if (!root) {
            return -1;
        }

        const height = 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));
        return height;
    };
};

process.stdin.resume();
process.stdin.setEncoding('ascii');

let _input = "";

process.stdin.on('data', function (data) {
    _input += data;
});

process.stdin.on('end', function () {
    main();
});

function main() {
    const tree = new BinarySearchTree();
    let root = null;

    const values = _input.split('\n').filter(input => input).map(Number);

    for (let i = 1; i < values.length; i++) {
        root = tree.insert(root, values[i]);
    }
    
    console.log(tree.getHeight(root));
}
