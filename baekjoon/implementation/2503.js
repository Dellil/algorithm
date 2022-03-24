// S4
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', line => {
    input.push(line);
})
.on('close', () => {
    input = input.slice(1, input.length);

    const numberBoard = Array(988).fill(0);

    input.forEach(v => {
        const splittedInput = v.split(' ');
        const answer = splittedInput[0];
        const strikeOfAnswer = parseInt(splittedInput[1]);
        const ballOfAnswer = parseInt(splittedInput[2]);

        for(let i = 123; i < 988; i++) {
            const stringified = Number(i).toString();
            if(isNumberDuplicated(stringified) || isZeroIncluded(stringified)) continue;
            else {
                let strike = 0;
                let ball = 0;
                
                strike = getStrikeCount(stringified, answer);
                ball = getBallCount(stringified, answer);

                if(strikeOfAnswer === strike && ballOfAnswer === ball) {
                    if(numberBoard[i] === 0) numberBoard[i] = 1;
                }
                else numberBoard[i] = -1;
            }
        }
    });

    console.log(numberBoard.filter(v => v === 1).length);

    function isNumberDuplicated(stringifiedNumber) {
        return stringifiedNumber[0] === stringifiedNumber[1] || stringifiedNumber[0] === stringifiedNumber[2] || stringifiedNumber[1] === stringifiedNumber[2];
    }

    function isZeroIncluded(stringifiedNumber) {
        return stringifiedNumber[1] === '0' || stringifiedNumber[2] === '0';
    }

    function getBallCount(number, answer) {
        let ball = 0;

        if(number[0] === answer[1] || number[0] === answer[2]) ball++;
        if(number[1] === answer[0] || number[1] === answer[2]) ball++;
        if(number[2] === answer[0] || number[2] === answer[1]) ball++;

        return ball;
    }

    function getStrikeCount(number, answer) {
        let strike = 0;

        if(number[0] === answer[0]) strike++;
        if(number[1] === answer[1]) strike++;
        if(number[2] === answer[2]) strike++;

        return strike;
    }
});