// Define a Node class for the tree
class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

// Define a Binary Tree class
class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Method to perform DFS (Pre-order traversal)
    dfsPreOrder(node) {
        if (node !== null) {
            console.log(node.key);      // Visit the root
            this.dfsPreOrder(node.left); // Traverse the left subtree
            this.dfsPreOrder(node.right); // Traverse the right subtree
        }
    }

    // Method to perform DFS (In-order traversal)
    dfsInOrder(node) {
        if (node !== null) {
            this.dfsInOrder(node.left); // Traverse the left subtree
            console.log(node.key);      // Visit the root
            this.dfsInOrder(node.right); // Traverse the right subtree
        }
    }

    // Method to perform DFS (Post-order traversal)
    dfsPostOrder(node) {
        if (node !== null) {
            this.dfsPostOrder(node.left); // Traverse the left subtree
            this.dfsPostOrder(node.right); // Traverse the right subtree
            console.log(node.key);        // Visit the root
        }
    }
}

// Create a binary tree
let tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(6);
tree.root.right.right = new Node(7);

// Perform DFS traversals
console.log("Pre-order traversal:");
tree.dfsPreOrder(tree.root); // Output: 1 2 4 5 3 6 7

console.log("In-order traversal:");
tree.dfsInOrder(tree.root);  // Output: 4 2 5 1 6 3 7

console.log("Post-order traversal:");
tree.dfsPostOrder(tree.root); // Output: 4 5 2 6 7 3 1
