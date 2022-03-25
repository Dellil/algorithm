// S3
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', line => {
    input.push(parseInt(line));
}).on('close', () => {
    input = input.slice(1, input.length);

    const sum = input.reduce((acc, cur) => {
        return acc + cur;
    }, 0);
    const average = parseInt(Math.round(sum/input.length));
    console.log(average);
 
    const copiedInput = input.slice();
    copiedInput.sort((a, b) => a - b);
    const midiumIndex = Math.floor(copiedInput.length / 2);
    const median = copiedInput[midiumIndex];
    console.log(median);

    const modeBoard = {};
    for(let i = 0; i < copiedInput.length; i++) {
        if(modeBoard[copiedInput[i]] !== undefined) continue;
        else {
            let count = 0;
            let currentNumber = copiedInput[i];
            for(let j = i; j < copiedInput.length; j++) {
                if(currentNumber === copiedInput[j]) count++;
                else break;
            }
            
            modeBoard[copiedInput[i]] = { 
                number: copiedInput[i],
                count: count,
            };
        }
    };
    const modeArray = Object.values(modeBoard);
    modeArray.sort((a, b) => {
        if(a.count === b.count) return a.number - b.number;
        return b.count - a.count;
    });
    if(modeArray.length > 1 && modeArray[0].count === modeArray[1].count) console.log(modeArray[1].number);
    else console.log(modeArray[0].number);

    const minimumNumber = copiedInput[0];
    const maximumNumber = copiedInput[copiedInput.length - 1];

    console.log(Math.abs(minimumNumber - maximumNumber));

    process.exit();
});