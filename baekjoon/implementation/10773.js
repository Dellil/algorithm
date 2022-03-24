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

    const stack = [];

    input.forEach(v => {
        if(v === '0') {
            stack.pop();
        } else stack.push(v);
    });

    const result = stack.reduce((acc, cur) => acc + parseInt(cur), 0);

    console.log(result);
});