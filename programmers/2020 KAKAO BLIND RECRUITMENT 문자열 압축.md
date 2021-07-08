[문제](https://programmers.co.kr/learn/courses/30/lessons/60057?language=javascript)

<i>level 2</i>

javascript

``` javascript
function solution(s) {
    let lengthOfString = 1001;
    
    for(let i = 1; i < Math.ceil(s.length)+1; i++){
        const currentLengthOfString = twoPointer(i);
        lengthOfString = Math.min(lengthOfString, currentLengthOfString);
    }
    
    function twoPointer(compressionUnit) {
        const indexOfString = s.length;
        let left = 0;
        let right = compressionUnit;
        let compressedString = "";
        let count = 1;
        
        while(left < indexOfString || right < indexOfString) {
            const leftString = s.slice(left, left+compressionUnit);
            const rightString = s.slice(right, right+compressionUnit);
            if(leftString === rightString) count++;
            else {
                if(count > 1) compressedString += count;
                compressedString += leftString;
                
                left = right;
                count = 1;
            }
            right += compressionUnit;
        }
        
        return compressedString.length;
    }
    
    return lengthOfString;
}
```