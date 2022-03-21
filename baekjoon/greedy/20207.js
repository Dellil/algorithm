// S1
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
    input.push(line);
})
.on('close', () => {
    input = input.slice(1, input.length);
    const schedules = input.map(s => {
        const [startDate, endDate] = s.split(' ');
        return {
            startDate: parseInt(startDate),
            endDate: parseInt(endDate),
        };
    });

    schedules.sort((a, b) => {
        if(a.startDate !== b.startDate) {
            return a.startDate > b.startDate ? 1 : -1;
        }
        else {
            return b.endDate - a.endDate;
        }
    });

    let continuousSchedule = schedules[0];
    let lastContinuousSchedule = schedules[0];
    let sum = 0;
    let heightDepth = [[schedules[0]]];


    schedules.forEach((s, idx) => {
        if(lastContinuousSchedule.endDate - s.startDate >= -1) {
            if(lastContinuousSchedule.endDate < s.endDate) {
                lastContinuousSchedule = s;    
            }

            if(idx !== 0) {
                const heights =  heightDepth.find(heights => {
                    const lastSchedule = heights[heights.length-1];
                    const heightArray = (lastSchedule.startDate !== s.startDate && lastSchedule.endDate - s.startDate < 0) ? lastSchedule : undefined;
                    if(heightArray !== undefined) return true;
                    else return false;
                });

                if(heights !== undefined) heights.push(s);
                else heightDepth.push([s]);
            }
            
        } else {
            sum += (lastContinuousSchedule.endDate - continuousSchedule.startDate + 1) * heightDepth.length;
            continuousSchedule = s;
            lastContinuousSchedule = s;
            
            heightDepth = [[s]];
        }
    });

    sum += (lastContinuousSchedule.endDate - continuousSchedule.startDate + 1) * heightDepth.length;

    console.log(sum);
});

/**
 * 2022/03/22
 * 구현문제에 가까운 느낌을 받았다.
 * 나처럼 생쇼 안하고 푼 사람들 대단하다.
 * 365만큼의 크기를 가진 1차원 배열로 해당 일수에 일정이 있으면 +1을 해주고 0이 있는 칸을 기준으로 직사각형 계산을 해준 풀이였다.
 */