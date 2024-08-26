let grid = [[3, 2, 1], [1, 7, 6], [2, 7, 7]]

var equalPairs = function (grid) {
    const n = grid.length
    const rowMap = new Map()
    for (let i = 0; i < n; i++) {
        const row = grid[i].join(",")
        rowMap.set(row, (rowMap.get(row) || 0) + 1)
    }
    let count = 0
    for (let i = 0; i < n; i++) {
        const colArr = []
        for (let j = 0; j < n; j++) {
            colArr.push(grid[j][i])
        }
        const colStr = colArr.join(",")
        if (rowMap.has(colStr)) {
            count += rowMap.get(colStr)
        }
    }
    return count
};
console.log(equalPairs(grid));