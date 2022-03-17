// S3
// const fs = require('fs');

// const input = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .split("\n")
//   .map(v => v.replace('\r', ''))
//   .map(v => parseInt(v));

// const ranks = input.slice(1, input.length);

// if(ranks.length === 1) {
//     console.log(Math.abs(ranks[0]-1));
// } else {
//     ranks.sort((a, b) => a - b);
//     let sum = 0;

//     for(let i  = 0; i < ranks.length; i++) {
//         sum += Math.abs(ranks[i] - (i + 1));
//     }

//     console.log(sum);
// }
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(parseInt(line));
})
  .on('close', function () {
    const ranks = input.slice(1, input.length);

    if(ranks.length === 1) {
        console.log(Math.abs(ranks[0]-1));
    } else {
        ranks.sort((a, b) => a - b);
        let sum = 0;

        for(let i  = 0; i < ranks.length; i++) {
            sum += Math.abs(ranks[i] - (i + 1));
        }
    
        console.log(sum);
    }
  process.exit();
});

/**
 * 1시간 넘게 헤맸는데 그 이유가...
 * 1. nodejs라 fs로 읽는거 억까당함. 그래서 readline씀
 * 2. [10, 1, 2, 5]를 sort()하면 [1, 2, 5, 10]인줄 알았는데 [1, 10, 2, 5]가 됨. 
 *    따라서 compareFunction을 통해 수정해줘야함
 *    (a, b) => a - b;로 compareFunction을 작성해주면 [1, 2, 5, 10]으로 정렬되어 잘 작동한다.
 */