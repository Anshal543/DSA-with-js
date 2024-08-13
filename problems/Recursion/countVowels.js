function isVowel(char) {
    let character = char.toLowerCase()
    let vowels = "aeiou"
    if (vowels.indexOf(character) !== -1) {
        return true
    }
    return false
}

// console.log(isVowel("A"));

function countVowels(string) {
    let count = 0
    for (let i = 0; i < string.length; i++) {
        if (isVowel(string[i])) {
            count += 1
        }
    }
    return count
}

// console.log(countVowels("anshal"));

function recursiveCountVowels(string, stringLength) {
    if (stringLength == 1) {
        return Number(isVowel(string[0]))
    }
    return recursiveCountVowels(string, stringLength - 1) + isVowel(string[stringLength - 1])
}

let myString = "hello"
console.log(recursiveCountVowels(myString, myString.length));