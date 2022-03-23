// S5
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line)
})
.on('close', function () {
    input = input.slice(1, input.length);

    let groupCheckCount = 0;

    input.forEach(word => {
        let letterPointer = word[0];

        let letterTable = {};

        function insertLetterToTable(letter) {
            if(letterTable[letter] === undefined) letterTable[letter] = true;

            else if(letterTable[letter] === true) letterTable[letter] = false;
        }

        for(let i  = 0; i < word.length; i++) {
            if(letterPointer !== word[i]) {
                insertLetterToTable(letterPointer);
                letterPointer = word[i];
            }

            if(i === word.length - 1) insertLetterToTable(letterPointer)
        }

        const isPassedGroupCheck = Object.values(letterTable).every(b => b === true);

        if(isPassedGroupCheck) groupCheckCount++;
    });

    console.log(groupCheckCount);
    process.exit();
});