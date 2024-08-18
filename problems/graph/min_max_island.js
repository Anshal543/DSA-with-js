const grid = [
    ["L", "W", "W", "L", "L", "W"],
    ["L", "W", "W", "L", "L", "W"],
    ["W", "L", "W", "W", "W", "W"],
    ["W", "W", "W", "W", "L", "L"],
    ["W", "W", "W", "W", "L", "L"],
    ["W", "W", "W", "W", "W", "W"],
]

function minIsland(grid) {
    const rows = grid.length
    const cols = grid[0].length
    let smallestSize = Infinity
    const visited = new Set()

    function exploreSize(r, c) {
        const position = r + "," + c
        if (
            r < 0 || r >= rows ||
            c < 0 || c >= cols ||
            visited.has(position) ||
            grid[r][c] == "W"

        ) {
            return 0
        }
        visited.add(position)
        let size = 1
        size += exploreSize(r + 1, c)
        size += exploreSize(r - 1, c)
        size += exploreSize(r, c + 1)
        size += exploreSize(r, c - 1)
        return size
    }
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] == "L" && !visited.has(r + "," + c)) {
                const size = exploreSize(r, c)
                if (size < smallestSize) {
                    smallestSize = size
                }
            }
        }
    }
    return smallestSize

}
console.log(minIsland(grid));

function maxIsland(grid) {
    const rows = grid.length
    const cols = grid[0].length
    let largestSize = 0
    const visited = new Set()

    function exploreSize(r, c) {
        const position = r + "," + c
        if (
            r < 0 || r >= rows ||
            c < 0 || c >= cols ||
            visited.has(position) ||
            grid[r][c] == "W"

        ) {
            return 0
        }
        visited.add(position)
        let size = 1
        size += exploreSize(r + 1, c)
        size += exploreSize(r - 1, c)
        size += exploreSize(r, c + 1)
        size += exploreSize(r, c - 1)
        return size
    }
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] == "L" && !visited.has(r + "," + c)) {
                const size = exploreSize(r, c)
                if (size > largestSize) {
                    largestSize = size
                }
            }
        }
    }
    return largestSize
}

console.log(maxIsland(grid));