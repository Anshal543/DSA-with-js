function maxPathCost(grid, row = 0, col = 0, memo = {}) {
    const postion = row + "," + col
    if (
        row >= grid.length ||
        col >= grid[0].length ||
        grid[row][col] === "X"
    ) {
        return 0
    }
    if (row === grid.length - 1 && col === grid[0].length - 1) {
        return 1
    }
    if (postion in memo) {
        return memo[postion]
    }

    memo[postion] = maxPathCost(grid, row + 1, col, memo) + maxPathCost(grid, row, col + 1, memo)
    return memo[postion]
}

const grid = [
    [" ", "X", "X", "X"],
    [" ", "X", " ", "X"],
    [" ", " ", " ", " "],
    ["X", "X", " ", " "],
]

console.log(maxPathCost(grid)) 