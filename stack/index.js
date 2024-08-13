class Stack {
    constructor() {
        this.stack = [];
    }

    push(item) {
        this.stack.push(item);
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    size() {
        return this.stack.length;
    }

    contains(item) {
        return this.stack.includes(item);
    }

    clear() {
        this.stack = [];
    }

    printStack() {
        let str = '';
        for (let i = 0; i < this.stack.length; i++) {
            str += this.stack[i] + ' ';
        }
        return str;
    }

    reverse() {
        return this.stack.reverse();
    }
}


const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
console.log(myStack.printStack());