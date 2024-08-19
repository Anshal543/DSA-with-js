function fibMemo(n, memo = {}) {
    if (n in memo) return memo[n]
    if (n <= 1) return n

    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo)
    return memo[n]
}

console.log(fibMemo(7));

function fibMemo(n){
    let memo = {}
    function fib(n){
        if(n in memo) return memo[n]
        if(n <= 1) return n
        memo[n] = fib(n-1) + fib(n-2)
        return memo[n]
    }
    return fib(n)

}
console.log(fibMemo(7));