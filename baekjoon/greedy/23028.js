// S5
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(v => v.replace('\r', '')).map(v => v.split(' ').map(v => parseInt(v)));
const scores = input.slice(1);

const restSeasons = 8 - input[0][0];
const majorScores = input[0][1];
let restMajorScores = 66 - majorScores;
let restScores = 130 - input[0][2];

for(let i = 0; i < restSeasons; i++) {
    let possibleNumberOfClasses = 6;
    if(restMajorScores > 0) {
        const majorScoresWillBeTaken = scores[i][0] * 3; 

        restMajorScores -= majorScoresWillBeTaken;
        restScores -= majorScoresWillBeTaken;

        possibleNumberOfClasses -= scores[i][0];
    }

    if(possibleNumberOfClasses > 0 && restScores > 0) {
        const availableClasses = 
            possibleNumberOfClasses >= scores[i][1] ? 
            scores[i][1] 
            : possibleNumberOfClasses; 
        const scoresWillBeTaken = availableClasses * 3;
        restScores -= scoresWillBeTaken;
    }
}

console.log((restMajorScores < 1 && restScores < 1) ? 'Nice' : 'Nae ga wae');

/**
 * 2022/02/24
 * 남은 학기를 구해 for문을 돌리고
 * 전공강의를 먼저 듣게 한다. (greedy)
 * 전공학점이 3학점만 남았어도 현재 있는 전공 수업만큼 듣는다.
 * 어차피 전공학점은 졸업학점에 포함되기 때문에!
 * 그 후 일반강의를 듣는다. 물론 내가 들을 수 있는 수 만큼만 듣는다.
 * 그 이후 남아 있는 전공 학점과 총 학점을 각각 비교해 Nice와 Nae ga wae를 출력해준다.
 */