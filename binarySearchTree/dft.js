const depthFirstTraversal = (node) => {
    if (node == null) {
        return
    }
    const values = []
    const stack = [node]
    while (stack.length > 0) {
        const node = stack.pop()
        values.push(node.key)

        if (node.right != null) {   // for pre-order traversal, push right node first
            stack.push(node.right)
        }
        if (node.left != null) {
            stack.push(node.left)
        }
    }
    return values
}

const recursiveDepthFirstTraversal = (node) => {
    if (node == null) {
        return []
    }
    const leftValues = recursiveDepthFirstTraversal(node.left)
    const rightValues = recursiveDepthFirstTraversal(node.right)
    return [node.key, ...leftValues, ...rightValues]
}

class Node  {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}

const node = new Node(10)
node.left = new Node(5)
node.right = new Node(15)
node.left.left = new Node(2)
node.left.right = new Node(7)
node.right.left = new Node(12)
node.right.right = new Node(20)



// const node = {
//     key: 10,
//     left: {
//         key: 5,
//         left: {
//             key: 2,
//             left: null,
//             right: null
//         },
//         right: {
//             key: 7,
//             left: null,
//             right: null
//         }
//     },
//     right: {
//         key: 15,
//         left: {
//             key: 12,
//             left: null,
//             right: null
//         },
//         right: {
//             key: 20,
//             left: null,
//             right: null
//         }
//     }
// }

console.log(depthFirstTraversal(node)) // [10, 5, 2, 7, 15, 12, 20]
console.log(recursiveDepthFirstTraversal(node)) // [10, 5, 2, 7, 15, 12, 20]