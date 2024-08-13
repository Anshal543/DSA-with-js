function sum(value) {

    if (value == 1) {
        return 1
    }
    return value + sum(value - 1)
}

console.log(sum(15));