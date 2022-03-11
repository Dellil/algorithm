// const fs = require('fs');

// const input = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .split("\n")
//   .map(v => v.replace('\r', ''))
//   .map(v => parseInt(v));

// const candidateScoreList = input.slice(2, input.length);

// if(input[0] === 1 ||input[1] > Math.max(...candidateScoreList)) {
//     console.log(0);
// } else {
//   let dasomScore = input[1];
//   let minimumCount = 0;
//   let maxCandidateScoreIndex = candidateScoreList.findIndex(v => v === Math.max(...candidateScoreList));

//   while(dasomScore <= candidateScoreList[maxCandidateScoreIndex]) {
//       dasomScore++;
//       minimumCount++;
//       candidateScoreList[maxCandidateScoreIndex]--;
//       maxCandidateScoreIndex = candidateScoreList.findIndex(v => v === Math.max(...candidateScoreList));
//   }

//   console.log(minimumCount);
// }

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
  input = input.map(v => parseInt(v));
  const candidateScoreList = input.slice(2, input.length);

  if(input[0] === 1 ||input[1] > Math.max(...candidateScoreList)) {
      console.log(0);
  } else {
    let dasomScore = input[1];
    let minimumCount = 0;
    let maxCandidateScoreIndex = candidateScoreList.findIndex(v => v === Math.max(...candidateScoreList));

    while(dasomScore <= candidateScoreList[maxCandidateScoreIndex]) {
        dasomScore++;
        minimumCount++;
        candidateScoreList[maxCandidateScoreIndex]--;
        maxCandidateScoreIndex = candidateScoreList.findIndex(v => v === Math.max(...candidateScoreList));
    }

    console.log(minimumCount);
  }
  process.exit();
});

/**
 * 2022/03/11
 * node js 채점 환경때문에 억까당했었던 문제
 * fs모듈이 아닌 readline을 활용해 입력을 받으면 채점이 오류 없이 잘된다.
 * 먼저 최다 표를 받은 후보의 유권자를 매수하기 때문에 greedy하다.
 */