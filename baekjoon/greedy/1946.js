// S1
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let lineCount = 0;
let scores = [];

rl.on('line', function (line) {
    if(lineCount === 0 && line.split(' ').length === 1) {
        lineCount++;
    } else {
        if(line.split(' ').length === 1) {
            input.push(scores);
            scores = [];
        } else {
            const [applicationScore, interviewScore] = line.split(' ')
            scores.push({
                applicationScore: parseInt(applicationScore),
                interviewScore: parseInt(interviewScore),
            });
        }
    }
})
.on('close', function () {
    input.push(scores);
    input = input.slice(1, input.length);

    let successfulCandidates = 0;
    let interviewScoreOfSuccessfulCandidate = 0;
    const responses = [];

    input.forEach(testCase => {
        testCase.sort((a, b) => a.applicationScore > b.applicationScore ? 1 : -1);
        
        testCase.forEach(({ applicationScore, interviewScore }, idx) => {
            if(idx === 0) {
                successfulCandidates++;
                interviewScoreOfSuccessfulCandidate = interviewScore;
            } else {
                if(interviewScoreOfSuccessfulCandidate > interviewScore) {
                    interviewScoreOfSuccessfulCandidate = interviewScore;
                    successfulCandidates++;
                }
            }
        });

        responses.push(successfulCandidates);
        successfulCandidates = 0;
        interviewScoreOfSuccessfulCandidate = 0;
    });

    responses.forEach(v => {
        console.log(v);
    });

    process.exit();
});

/**
 * 2022/03/21
 * 이해하는데 많은 시간을 쏟은 문제
 */