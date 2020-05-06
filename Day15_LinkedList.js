/*
  OO 05-05-2020

  Task
  ----------------------------------------------------------------------------------------------------------
  Complete the insert function in your editor so that it creates a new Node (pass  as the Node constructor argument)
  and inserts it at the tail of the linked list referenced by the  parameter.
  Once the new node is added, return the reference to the 'head' node.


  Note: If the  argument passed to the insert function is null, then the initial list is empty

  Sample Input
  ----------------------------------------------------------------------------------------------------------
  The following input is handled for you by the locked code in the editor:
  The first line contains T, the number of test cases.
  The 'T' subsequent lines of test cases each contain an integer to be inserted at the list's tail.

    4
    2
    3
    4
    1

  Sample Output
  ----------------------------------------------------------------------------------------------------------
  The locked code in your editor prints the ordered data values for each element in your list as a
  single line of space-separated integers:

    2 3 4 1

*/

process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

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

function Node(data) {
  this.data = data;
  this.next = null;
}

function Solution() {
  this.insert = function (head, data) {
    //complete this method
    const node = new Node(data);

    if (!head) {
      head = node;
    } else {
      let current = head;

      while (current.next !== null) {
        current = current.next;
      }

      current.next = node;
    }

    return head;
  };

  this.display = function (head) {
    let start = head;
    while (start) {
      process.stdout.write(start.data + " ");
      start = start.next;
    }
  };
}

function main() {
  let T = parseInt(readLine());
  let head = null;
  let mylist = new Solution();

  for (i = 0; i < T; i++) {
    let data = parseInt(readLine());
    head = mylist.insert(head, data);
  }

  mylist.display(head);
}
