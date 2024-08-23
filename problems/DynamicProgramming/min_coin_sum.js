function minCoin(coins, amount, memo = {}) {
    if (amount in memo) return memo[amount];
    if (amount === 0) return 0;
    if (amount < 0) return -1;
    let minCoinCount = Infinity;
    for (let coin of coins) {
        let result = minCoin(coins, amount - coin, memo);
        if (result !== -1) {
            // console.log(result);
            minCoinCount = Math.min(minCoinCount, result + 1);
        }
    }

    memo[amount] = minCoinCount === Infinity ? -1 : minCoinCount;
    return memo[amount];
}

console.log(minCoin([1, 2, 5], 11)); // 3