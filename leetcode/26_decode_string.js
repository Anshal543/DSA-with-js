// 3[a]2[bc]

var decodeString = function (s) {
    let stack = []
    let currentNum = 0
    let currentStr = ""
    for (const char of s) {
        if (char >= '0' && char <= '9') {
            currentNum = currentNum * 10 + (char - '0')
        } else if (char === '[') {
            stack.push(currentNum)
            stack.push(currentStr)
            currentNum = 0
            currentStr = ""
        } else if (char === ']') {
            let prevStr = stack.pop()
            let reapeatTimes = stack.pop()
            currentStr = prevStr + currentStr.repeat(reapeatTimes)
        } else {

            currentStr += char
        }
    }
    return currentStr
};












/*
let s = "399a"
let currentNum = 0
for (const char of s) {
    if(char>='0' && char<='9'){
        currentNum = currentNum *10 + (char-'0')
    }
}
console.log(currentNum);
 */