const edges = [
    ['b', 'a'],
    ['c', 'a'],
    ['b', 'c'],
    ['q', 'r'],
    ['q', 's'],
    ['q', 'u'],
    ['q', 't'],
]

function undirectedGraphMaker(edges) {
    const graph = {}
    for (const edge of edges) {
        const [a, b] = edge
        if (!(a in graph)) {
            graph[a] = []
        }
        if (!(b in graph)) {
            graph[b] = []
        }
        graph[a].push(b)
        graph[b].push(a)
    }
    return graph
}


console.log(undirectedGraphMaker(edges));

function hasPathDFS(graph, start, dest) {
    const stack = [start]
    const visited = new Set()
    while (stack.length > 0) {
        const node = stack.pop()
        if (node === dest) {
            return true
        }
        if (!visited.has(node)) {
            visited.add(node)
            for (const neighbour of graph[node]) {
                stack.push(neighbour)
            }
        }
    }
    return false
}

console.log(hasPathDFS(undirectedGraphMaker(edges), "a", "c"));

function finalFunction(edge,start,dest){
    const graph = undirectedGraphMaker(edges)
    return hasPathDFS(graph,start,dest)
}

console.log(finalFunction(edges,"a","c"));