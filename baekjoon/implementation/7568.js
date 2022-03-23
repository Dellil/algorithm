// S5
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
    const numberOfPeople = parseInt(input[0]);
    const people = Array(numberOfPeople).fill(1);

    const weightAndHeights = input.slice(1, input.length);

    weightAndHeights.map(wh => {
        const splitted = wh.split(' ');
        const weight = parseInt(splitted[0]);
        const height = parseInt(splitted[1]);

        return [weight, height];

    }).forEach((wh, idx, array) => {
        for(let i = 0; i < array.length; i++) {
            if(wh[0] < array[i][0] && wh[1] < array[i][1]) people[idx]++;
        }
    });

    console.log(people.join(' '));
});

/**
 * 2022/03/23
 * 보통 문제 두번은 읽고 해결책을 골똘히 생각하는 편인데 이거는 이상하게 다 읽기도 전에 생각났다.
 */