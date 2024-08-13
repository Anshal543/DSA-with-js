function reverseString(string) {
    let length = string.length - 1
    let reverseString = ""
    while (length >= 0) {
        reverseString = reverseString + string[length]
        length = length - 1
    }
    return reverseString
}

const result = reverseString("hello")
console.log(result)


function recursiveReverseString(string) {
    if (string === "") {
        return string
    }
    return string[string.length - 1] + recursiveReverseString(string.substring(0, string.length - 1))
}

console.log(recursiveReverseString("hellow"));