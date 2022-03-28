// S2
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = '';

rl.on('line', line => {
    input = line;
})
.on('close', () => {
    // 이 if문 덕분에 이제 짝이 안 맞는 괄호만 유효성 검사를 해주면 된다.
    if(input.length % 2 !== 0 || (input[0] === ')' || input[0] === ']') || (input[input.length - 1] === '(' || input[input.length - 1] === '[')) {
        console.log(0);
        return;
    }

    const stack = [];
    let temp = 1;
    let result = 0;

    for(let i = 0; i < input.length; i++) {
        if(input[i] === '(') {
            stack.push('(');
            temp *= 2;
        }
        else if(input[i] === '[') {
            stack.push('[')
            temp *= 3;
        }
        else if(input[i] === ')') {
            if(input[i-1] === '(') {
                result += temp;
            }

            temp /= 2;

            if(stack.pop() !== '(') {
                console.log(0);
                return;
            }
        }
        else if(input[i] === ']') {
            if(input[i-1] === '[') {
                result += temp;
            }
            temp /= 3;

            if(stack.pop() !== '[') {
                console.log(0);
                return;
            }
        }
    }

    console.log(result);
});

/**
 *     // 이 if문 덕분에 이제 짝이 안 맞는 괄호만 유효성 검사를 해주면 된다.
    if(input.length % 2 !== 0 || (input[0] === ')' || input[0] === ']') || (input[input.length - 1] === '(' || input[input.length - 1] === '[')) {
        // console.log('어라라');
        console.log(0);
        return;
    }

    const openParenthesisStack = [];
    const formulaParserStack = [];
    const symbolStack = [];

    for(let i = 0; i < input.length; i++) {
        if(input[i] === '(') {
        }
        else if(input[i] === '[') {
            openParenthesisStack.push('[');
            formulaParserStack.push(3);

            const nextParenthesisIndex = i + 1;
            if(input[nextParenthesisIndex] === ']' && (input[nextParenthesisIndex + 1] === '(' || input[nextParenthesisIndex + 1] === '(')) {
                formulaParserStack.push('+');
                symbolStack.push('+');
            } 
            if(input[nextParenthesisIndex] === '[' || input[nextParenthesisIndex] === '(') {
                formulaParserStack.push('*');
                formulaParserStack.push('(');
                symbolStack.push('*');
            }
            else if(input[nextParenthesisIndex] === ')') {
                // console.log('[인데 )가 나와 0 출력함');
                console.log(0);
                return;
            }
        }
        else if(input[i] === ')') {
            const openParenthesis = openParenthesisStack.pop();
            if(openParenthesis === '[' || openParenthesis === undefined) {
                // console.log(')인데 openParenthesis값이 이렇게 뜸 : ', openParenthesis);
                console.log(0);
                return;
            } else {
                if(symbolStack.pop() === '*') formulaParserStack.push(')');
            }
        }
        else if(input[i] === ']') {
            const openParenthesis = openParenthesisStack.pop();
            if(openParenthesis === '(' || openParenthesis === undefined) {
                // console.log(']인데 openParenthesis값이 이렇게 뜸 : ', openParenthesis);
                console.log(0);
                return;
            } else {
                if(symbolStack.pop() === '*') formulaParserStack.push(')');
            }
        }
    }

    if(openParenthesisStack.length !== 0) {
        console.log(0);
        return;
    }

    console.log(formulaParserStack);
 */