[문제](https://programmers.co.kr/learn/courses/30/lessons/42888?language=javascript)

<i>level 2</i>

javascript

``` javascript
function solution(record) {
    const nicknameTable = {};
    
    const a = record.map(r => {
        const splittedRecord = r.split(" "); // ["Enter", "uid", "nickname"]

        if(!isTrueByStrategyKeyword(splittedRecord[0], "Leave")) updateNicknameByUid(splittedRecord[1], splittedRecord[2]);
        if(isTrueByStrategyKeyword(splittedRecord[0], "Change")) return undefined;
        if(isTrueByStrategyKeyword(splittedRecord[0], "Enter")) return `${splittedRecord[1]}님이 들어왔습니다.`;
        return `${splittedRecord[1]}님이 나갔습니다.`;
    });
    
    const b = a.filter(r => r !== undefined);
    const c = b.map(text => {
        const splittedText = text.split("님이 "); // ['uid', '들어왔습니다. || 나갔습니다.'];
        return `${nicknameTable[splittedText[0]]}님이 ${splittedText[1]}`;
    });
    return c;
    
    function isTrueByStrategyKeyword(strategyKeyword, wantTo) {
        return strategyKeyword === wantTo ? true : false;
    }
    
    function updateNicknameByUid(uid, nickname) {
        nicknameTable[uid] = nickname;
    }
}
```