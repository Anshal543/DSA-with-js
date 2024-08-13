const treeSumBFS = (root)=>{
    if(root==null) return 0;
    let sum = 0;
    let queue  = [root]
    while(queue.length>0){
        let node = queue.shift();
        sum+=node.key;
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
    return sum;
}

const treeSumDFS = (root)=>{
    if(root==null) return 0;
    return root.key + treeSumDFS(root.left) + treeSumDFS(root.right);
}

const node = {
    key: 1,
    left: {
        key: 2,
        left: {
            key: 4,
            left: null,
            right: null
        },
        right: {
            key: 5,
            left: null,
            right: null
        }
    },
    right: {
        key: 3,
        left: {
            key: 6,
            left: null,
            right: null
        },
        right: {
            key: 7,
            left: null,
            right: null
        }
    }
}

console.log(treeSumBFS(node)); // 28
console.log(treeSumDFS(node)); // 28
