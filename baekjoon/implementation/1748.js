// S3
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = '';

rl.on('line', function (line) {
    input = parseInt(line);
})
.on('close', function () {
    let sum = 0;
    for(let i = 1; i <= input; i *= 10) {
        sum += input - i + 1;
    }

    console.log(sum);

    process.exit();
});