const edges = [
    ['b', 'a'],
    ['c', 'a'],
    ['b', 'c'],
    ['q', 'r'],
    ['q', 's'],
    ['q', 'u'],
    ['q', 't'],
]

function shortestPath(edges, start, dest) {
    const graph = undirectedGraphMaker(edges)
    const queue = [[start,0]]
    const visited = new Set([start])
   while(queue.length>0){
    const [node,distance] = queue.shift()
    if(node==dest){
        return distance
    }
    for (const neighbour of graph[node]) {
        if(!visited.has(neighbour)){
            visited.add(neighbour)
            queue.push([neighbour,distance+1])
        }
    }
   }
   return visited

}

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

console.log(shortestPath(edges,"a","c"));