// S2
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', line => {
    input.push(line);
}).on('close', () => {
    // 후보 이름(숫자), 추천 수(카운트), 업데이트 시간(인덱스)를 저장하는 사진틀
    // 1. 학생들이 추천을 시작하기 전에 모든 사진틀은 비어있다.
    const pictureFrames = Array(parseInt(input[0])).fill({
        name: undefined,
        count: undefined,
        index: undefined,
    });

    // 2. 어떤 학생이 특정 학생을 추천하면, 추천받은 학생의 사진이 반드시 사진틀에 게시되어야 한다.
    simulation(input[2], pictureFrames);

    // 최종 후보 오름차순 출력
    const studentNumbers = pictureFrames.map(pf => pf.name);
    studentNumbers.sort((a, b) => a - b);
    console.log(studentNumbers.join(' '));
});

function simulation(students, pictureFrames) {
    const numberedStudents = students.split(' ').map(v => parseInt(v));

    numberedStudents.forEach((v, idx) => {
        // 후보 학생을 추천하는 함수, 어떤 후보를 추천하는지에 대한 후보 숫자와 그 후보 숫자가 속한 인덱스(추천한 시간)를 준다.
        recommendStudent(v, idx, pictureFrames);
    });
}

function recommendStudent(studentNumber, index, pictureFrames) {
    // 추천된 학생이 사진틀에 게시되는 과정은 다음과 같다.
    // 1. 사진틀이 비어있는지 확인한다.
    const [pictureFrameIndex, isPictureFrameEmpty] = getEmptyPictureFrameIndex(pictureFrames);
    if(isPictureFrameEmpty) {
        // 2. 비어 있다면 비어 있는 사진틀에 게시한다.
        // 비어 있지만 1개 혹은 2개의 사진이 게시될 가능성이 있으므로 해당 학생이 게시되어 있는지 확인
        const [studentIndex, isAlreadyPosted] = isStudentPosted(studentNumber, pictureFrames);
        if(isAlreadyPosted) {
            pictureFrames[studentIndex].count++;
        } else {
            pictureFrames[pictureFrameIndex] = {
                name: studentNumber,
                count: 1,
                index,
            };
        }
    } else {
        // 2-1-1. 비어 있지 않다면, 사진틀에 해당 학생이 있는지 확인한다.
        const [studentIndex, isAlreadyPosted] = isStudentPosted(studentNumber, pictureFrames);
        if(isAlreadyPosted) {
            // 2-1-2. 해당 학생이 있으면 해당 학생의 추천 수를 1 더해준다.
            pictureFrames[studentIndex].count++;
        } else {
            // 2-2-1. 해당 학생이 없다면 추천횟수가 가장 적은 학생의 사진틀을 밀어버린다. 
            // 2-2-2. 가장 적은 학생이 두 명 이상이면 그들중 인덱스가 작은(게시된지 가장 오래된) 학생을 밀어버리고, 현재 학생을 사진틀에 게시한다.
            const students = findSmallestCountByStudents(pictureFrames);
            const smallestIndex = findSmallestIndexByStudents(students);
            const oldestIndex =  getOldestIndexBySmallestIndex(smallestIndex, pictureFrames);
            pictureFrames[oldestIndex] = {
                name: studentNumber,
                count: 1,
                index,
            }
        }
    }
}

function getEmptyPictureFrameIndex(pictureFrames) {
    // 비어있는 사진틀의 위치와 비어있는지를 return
    const pictureFrameIndex = pictureFrames.findIndex(pf => !pf.name);
    const isPictureFrameEmpty = pictureFrameIndex > -1 ? true : false;
    return [pictureFrameIndex, isPictureFrameEmpty];
}

function isStudentPosted(studentNumber, pictureFrames) {
    const pictureFrameIndex = pictureFrames.findIndex(pf => pf.name === studentNumber);
    const isAlreadyPosted = pictureFrameIndex > -1 ? true : false;
    return [pictureFrameIndex, isAlreadyPosted];
}

function findSmallestCountByStudents(pictureFrames) {
    let smallestCount = 1000;
    const students = [];

    // 가장 적은 추천 수를 확인하고,
    for(let i = 0; i < pictureFrames.length; i++) {
        const currentCount = pictureFrames[i].count;

        if(currentCount <= smallestCount) {
            smallestCount = currentCount;
        }
    }

    // 가장 적은 추천 수를 갖고 있는 학생들을 push한다.
    for(let i = 0; i < pictureFrames.length; i++) {
        if(pictureFrames[i].count === smallestCount) {
            students.push(pictureFrames[i]);
        }
    }

    return students;
}

function findSmallestIndexByStudents(students) {
    // 가장 작은 index 찾기
    let smallestIndex = 1000;

    for(let i = 0; i < students.length; i++) {
        if(students[i].index <= smallestIndex) {
            smallestIndex = students[i].index;
        }
    };

    return smallestIndex;
}

function getOldestIndexBySmallestIndex(smallestIndex, pictureFrames) {
    return pictureFrames.findIndex(pf => pf.index === smallestIndex);
}

/**
 * 2022/03/30
 * 구현할 것이 많은 구현문제
 * 후보가 삭제됐다가 다시 게시될 때, 
 * 해당 후보의 추천 수를 누적된 추천 수 + 1이 되게끔 만들라는 지시사항이 있었다면 
 * 아마 골드5쯤 되지 않았을까?
 */