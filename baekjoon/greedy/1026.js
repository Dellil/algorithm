// S4
const fs = require('fs');

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(v => v.replace('\r', ''));

const a = input[1].split(' ').map(v => parseInt(v));
const b = input[2].split(' ').map(v => parseInt(v));

function findMaximumNumber() {
    let temp = 0;
    let idx = 0;
    a.forEach((n, i) => {
        if(n > temp) {
            temp = n;
            idx = i;
        }
    });

    return [temp, idx];
}

function deleteMaximumNumber(idx) {
    a.splice(idx, 1);
}

function findMinimumNumber() {
    let temp = 100;
    let idx = 0;
    b.forEach((n, i) => {
        if(n < temp) {
            temp = n;
            idx = i;
        }
    })

    return [temp, idx];
}

function deleteMinimumNumber(idx) {
    b.splice(idx, 1);
}

const maximumArray = [];

while(a.length > 0) {
    const maximumValueAndIndex = findMaximumNumber();
    maximumArray.push(maximumValueAndIndex[0]);
    deleteMaximumNumber(maximumValueAndIndex[1]);
}

const minimumArray = [];

while(b.length > 0) {
    const minimumValueAndIndex = findMinimumNumber();
    minimumArray.push(minimumValueAndIndex[0]);
    deleteMinimumNumber(minimumValueAndIndex[1]);
}

const length = parseInt(input[0]);
let sum = 0;

for(let i = 0; i < length; i++) {
    sum += maximumArray[i] * minimumArray[i];
}

console.log(sum);