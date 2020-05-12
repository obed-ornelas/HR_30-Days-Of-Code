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
    input_stdin_array = input_stdin.split("\n").filter(input => input);
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function Node(data){
    this.data = data;
    this.next = null;
}

function Solution(){

    this.removeDuplicates = function(head) {
        const distinct = [];

        let previousNode = null;
        let currentNode = head;

        while(currentNode){
            if(distinct.indexOf(currentNode.data) === -1){
                distinct.push(currentNode.data);

                previousNode = currentNode;
            } else {
                previousNode.next = currentNode.next;
            }

            currentNode = currentNode.next;
        }

        return head;
    }

	this.insert = function(head, data) {
        const node = new Node(data);

        if(head == null) {
            head = node;
        } else if(head.next == null) {
            head.next = node;
        } else {
            let start = head;

            while(start.next != null) {
                start = start.next;
            }

            start.next = node;
        }

        return head;
    };

	this.display = function(head){
        let start = head;
        const toDisplay = [];

        while(start){
            toDisplay.push(start.data);
            start = start.next;
        }

        console.log(toDisplay.map(int => int.toString()).join(" "));
    };
}

function main(){
    const T = parseInt(readLine());
    let head = null;
    const mylist = new Solution();

    for(let i = 0; i < T; i++){
        let data = parseInt(readLine());
        head = mylist.insert(head,data);
    }

    head = mylist.removeDuplicates(head);
    mylist.display(head);
}