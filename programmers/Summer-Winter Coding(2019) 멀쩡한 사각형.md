[문제](https://programmers.co.kr/learn/courses/30/lessons/62048?language=javascript)

<i>level 2</i>

javascript

``` javascript
function solution(w, h) {
    // 유클리드, a를 b로 나눈 나머지를 r이라고 했을때,  (a, b) = (b, r)
    const getGCD = (a, b) => (b > 0 ? getGCD(b, a % b) : a);
    const gcd = getGCD(w, h);
    return (w * h) - (((w / gcd) + (h / gcd) - 1) * gcd);
}
```