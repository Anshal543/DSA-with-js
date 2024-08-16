// first we look for neighbour then check if the current node is visited or not
const graph = {
    a: ['b', 'c'],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['b', 'c'],
    e: ['f'],
    f: ['e']
}

function bfsIterative(graph, start) {
    const queue = [start]
    const visited = new Set()
    while (queue.length > 0) {
        const node = queue.shift()
        for (const neighbour of graph[node]) {
            if (!visited.has(neighbour)) {
                visited.add(neighbour)
                queue.push(neighbour)
            }
        }
    }
    return visited
}

console.log(bfsIterative(graph,"a"));