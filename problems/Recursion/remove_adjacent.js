function removeAdjacent(inputString) {
    let result = ""
    for (let i = 0; i < inputString.length; i++) {
        if (i == inputString.length - 1 || inputString[i] !== inputString[i + 1]) {
            result += inputString[i]
        }
    }
    return result
}

console.log(removeAdjacent("aabcc"));

function recursiveRemoveAdj(inputString){
    if(inputString.length<=1){
        return inputString
    }
    if(inputString[0]==inputString[1]){
        return recursiveRemoveAdj(inputString.substring(1))
    }

    return inputString[0]+ recursiveRemoveAdj(inputString.substring(1))
}

console.log(recursiveRemoveAdj("aabdcaacc"));

function recursiveRADup(inputString){
    if(inputString.length<=1){
        return inputString
    }

    if(inputString[0]==inputString[1]){
        let i=1
        while(i<inputString.length && inputString[i]==inputString[0]){
            i++
        }
        return recursiveRADup(inputString.substring(i))
    }

    return inputString[0]+ recursiveRADup(inputString.substring(1))
}

console.log(recursiveRADup("aaabbsscaca"));