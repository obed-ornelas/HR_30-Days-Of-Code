'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', stdin => {
    inputString += stdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function isGmailAccount(email) {
    const [_, domain] = email.split('@');

    if (domain === 'gmail.com'){
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
        const [firstName, emaiID] = readLine().split(' ');

        if (isGmailAccount(emaiID)){
            users.push(firstName);
        }
    }

    printUsers(users.sort());
}
