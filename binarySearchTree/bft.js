const breadthFirstTraversal = (root) => {
    if (root == null) {
        return []
    }
    const queue = [root]
    const values = []
    while (queue.length > 0) {
        const node = queue.shift()
        values.push(node.key)
        if (node.left != null) {
            queue.push(node.left)
        }
        if (node.right != null) {
            queue.push(node.right)
        }
    }
    return values

}

const node = {
    key: 10,
    left: {
        key: 5,
        left: {
            key: 2,
            left: null,
            right: null
        },
        right: {
            key: 7,
            left: null,
            right: null
        }
    },
    right: {
        key: 15,
        left: {
            key: 12,
            left: null,
            right: null
        },
        right: {
            key: 20,
            left: null,
            right: null
        }
    }
}

console.log(breadthFirstTraversal(node)) // [10, 5, 15, 2, 7, 12, 20]