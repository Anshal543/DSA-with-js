function sumPossible(amount, number, memo = {}) {
    if (amount in memo) return memo[amount]
    if (amount == 0) return true
    if (amount < 0) return false
    for (const num of number) {
        if (sumPossible(amount - num, number, memo)) {
            memo[amount] = true
            return true
        }
    }
    memo[amount] = false
    return false
}

console.log(sumPossible(7, [5, 3, 4, 7])) // true
