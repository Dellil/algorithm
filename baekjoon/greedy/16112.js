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
    const [_, maximumArcanes] = input[0].split(' ').map(v => BigInt(v));
    const gainingExperiences = input[1].split(' ').map(v => BigInt(v));
    gainingExperiences.sort((a, b) => a > b ? 1 : -1);

    let sum = BigInt(0);

    function abs(x) {
        return x < 0n ? -x : x;
    }

    gainingExperiences.forEach((exp, i) => {
        const j = BigInt(i);
        if(j > maximumArcanes) {
            sum += exp * maximumArcanes;
        }
        else if(j - maximumArcanes <= 0) {
            sum += exp * (maximumArcanes - abs((j - maximumArcanes)));
        }
    });
    
    console.log(sum.toString()); 
});
/**
 * nodejs로는 무슨 짓을 해도 채점 시작하자마자 바로 틀렸다고 떠서 파이썬으로 푼 문제. 이었으나 BigInt로 해결했다.
 */