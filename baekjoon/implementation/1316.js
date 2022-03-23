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
        }

        // for문에서는 letterPointer 때문에 못 넣어준 마지막 글자 넣어주기
        insertLetterToTable(word[word.length - 1]);

        const isPassedGroupCheck = Object.values(letterTable).every(b => b === true);

        if(isPassedGroupCheck) groupCheckCount++;
    });

    console.log(groupCheckCount);
    process.exit();
});