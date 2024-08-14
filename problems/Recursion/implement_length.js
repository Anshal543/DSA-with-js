function getLength(str) {
    let count = 0
    while (str[count] !== undefined) {
        count++
    }
    return count
}

console.log(getLength("anshal"));

function recursiveLength(string) {
    if (string === "") {
        return 0
    }
    return 1 + recursiveLength(string.substring(1))
}

console.log(recursiveLength("anshal"));