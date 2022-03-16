// S4
const fs = require('fs');

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(v => v.replace('\r', ''));

const documentText = input[0];
const searchText = input[1];
const lengthOfSearchText = searchText.length;

let pointer = 0;
let count = 0;

while(documentText.length-1 >= pointer+(lengthOfSearchText-1)) {
    const extractedText = documentText.slice(pointer, pointer + lengthOfSearchText);
    if(extractedText === searchText) {
        count++;
        pointer+=lengthOfSearchText;
    } else {
        pointer++;
    }
}

console.log(count);