// S2
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
    const [quests, maximumArcanes] = input[0].split(' ').map(v => parseInt(v));
    const gainingExperiences = input[1].split(' ').map(v => parseInt(v));
    gainingExperiences.sort((a, b) => a - b);

    let sum = 0;
    let count = 0;

    gainingExperiences.forEach((exp, i) => {
        if(i > maximumArcanes) {
            sum += exp * maximumArcanes;
        }
        else if(i - maximumArcanes <= 0) {
            sum += exp * (maximumArcanes - Math.abs((i - maximumArcanes)));
        }
    });
    
    console.log(sum);
});
/**
 * nodejs로는 무슨 짓을 해도 채점 시작하자마자 바로 틀렸다고 떠서 파이썬으로 푼 문제.
 */