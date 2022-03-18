const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
})
.on('close', function () {
    const meetings = input.slice(1, input.length).map(v => v.split(' '));

    const times = meetings.map(v => {
      return {
          begin: parseInt(v[0]),
          end: parseInt(v[1]),
      };
    });
    
    times.sort((a, b) => {
        return a.end - b.end || a.begin - b.begin;
    })
    let count = 0;
    let recentFinish = 0;

    times.forEach(time => {
        if (time.begin < recentFinish) return;

        count++;
        recentFinish = time.end;
    })

    console.log(count);

    process.exit();
});

// 1순위 끝나는 시간으로 정렬, 2순위 시작 시간 순으로 정렬