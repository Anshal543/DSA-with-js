function countKeyArray(array, key) {
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] == key) {
            count++
        }
    }
    return count
}

console.log(countKeyArray([1, 2, 3, 2, 4, 2, 5, 2], 2));

function recursiveKeyArray(array, key, index) {
    if (index >= array.length) {
        return 0
    }
    // if (array[index] == key) {
    //     return 1 + recursiveKeyArray(array, key, index + 1)
    // } else {
    //     return recursiveKeyArray(array, key, index + 1)
    // }
    return array[index] == key ? 1 : 0 + recursiveKeyArray(array, key, index + 1)
}

console.log(recursiveKeyArray([1, 2, 3, 2, 4, 2, 5, 2], 2, 0));

function recursiveKeyArray(array, key) {
    if (array.length == 0) {
        return 0
    }

    let count = array[0] == key ? 1 : 0
    return count + recursiveKeyArray(array.slice(1), key)

}

console.log(recursiveKeyArray([1, 2, 3, 2, 4, 2, 5, 2], 2));

