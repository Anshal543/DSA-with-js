function removeTabSpace(inputString) {
    let result = ""
    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i]
        if (char != " " && char != '\t') {
            result += char
        }

    }
    return result
}

console.log(removeTabSpace("ansh \tas"));


function recursiveTAS(inputString) {
    if(inputString.length==0){
        return ""
    }
    const firstChar = inputString[0]
    const restofString = inputString.slice(1)
    if(firstChar==" " || firstChar == '\t'){
        return recursiveTAS(restofString)
    }
    return firstChar + recursiveTAS(restofString)
}

console.log(recursiveTAS("ansh \tas"));