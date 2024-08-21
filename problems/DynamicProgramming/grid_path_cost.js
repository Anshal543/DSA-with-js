function maxPathCost(grid, row = 0, col = 0, memo = {}) {
    const postion = row + "," + col
    if (
        row >= grid.length ||
        col >= grid[0].length ||
        grid[row][col] === "X"
    ) {
        return -Infinity
    }
    if (row === grid.length - 1 && col === grid[0].length - 1) {
        return grid[row][col]
    }
    if (postion in memo) {
        return memo[postion]
    }
    const rightPath = maxPathCost(grid, row, col + 1, memo)
    const downPath = maxPathCost(grid, row + 1, col, memo)
    memo[postion] = grid[row][col] + Math.max(rightPath, downPath)
    // memo[postion] = maxPathCost(grid, row + 1, col, memo) + maxPathCost(grid, row, col + 1, memo)
    return memo[postion]
}

const grid = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
]

console.log(maxPathCost(grid)) 