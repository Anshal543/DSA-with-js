const grid = [
    ["L", "W", "W", "L", "L", "W"],
    ["L", "W", "W", "L", "L", "W"],
    ["W", "L", "W", "W", "W", "W"],
    ["W", "W", "W", "W", "L", "L"],
    ["W", "W", "W", "W", "L", "L"],
    ["W", "W", "W", "W", "W", "W"],
]
function islandCount(grid) {
    const rows = grid.length
    const cols = grid[0].length
    let count = 0
    const visited = new Set()

    function dfs(r, c) {
        const position = r + "," + c
        if (
            r < 0 || r >= rows ||
            c < 0 || c >= cols ||
            visited.has(position) ||
            grid[r][c] == "W"

        ) {
            return
        }
        visited.add(position)
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)
    }
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] == "L" && !visited.has(r + "," + c)) {
                count++
                dfs(r, c)
            }
        }
    }
    return count
}

console.log(islandCount(grid)) 
