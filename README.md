# the solutions on here

문제해결 코드 모음집

백준에서 푸는 js 문제는 입출력이 귀찮음

**command**

```node --stack-size=65536 your-file.js```

``` javascript
// 문자 하나만 입력받을 경우
const input = fs.readFileSync("/dev/stdin").toString()

// 한칸 띄어쓰기로 구분
// input[0], input[1] 배열에서 꺼내쓰면 된다.
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")

// 줄바꿈으로 구분
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")

// 만약 인풋값이 숫자라면
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(function(a) {
    return +a
  })

const input = fs
    .readFileSync('/dev/stdin')
    .toString()
    .split('\n')
    .map(v => v.replace('\r', ''))
    .map(v => v.split(' ')
    .map(v => parseInt(v)));
```