class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
}

LinkedList.prototype.insertAtBeginnig = function (data) {
    const newNode = new Node(data);
    this.head = newNode;
}

LinkedList.prototype.insertAtEnd = function (data) {
    const newNode = new Node(data);
    if (!this.head) {
        this.head = newNode;
        return;
    }

    let last = this.head;
    while (last.next) {
        last = last.next;
    }
    last.next = newNode;
}

LinkedList.prototype.insertAfter = function (data, prevNode) {
    if (!prevNode) {
        console.log('Previous node is not defined');
        return;
    }
    const newNode = new Node(data, prevNode.next);
    prevNode.next = newNode;
}

LinkedList.prototype.deleteFirstNode = function () {
    if (!this.head) {
        return;
    }
    this.head = this.head.next;
}

LinkedList.prototype.deleteLastNode = function () {
    if (!this.head) {
        return;
    }
    if (!this.head.next) {
        this.head = null;
        return;
    }
    let secondLast = this.head;
    while (secondLast.next.next) {
        secondLast = secondLast.next;
    }
    secondLast.next = null;
}

LinkedList.prototype.deleteByKey = function (key) {
    if (!this.head) {
        return;
    }
    if (this.head.data === key) {
        this.head = this.head.next;
        return;
    }

    let current = this.head;
    while (current.next != null) {
        if (current.next.data === key) {
            current.next = current.next.next;
            return;
        }
        current = current.next;
    }
    console.log('Key not found');
}

LinkedList.prototype.search = function (key) {
    let current = this.head;
    while (current) {
        if (current.data === key) {
            return true;
        }
        current = current.next;
    }
    return false;
}

LinkedList.prototype.printList = function () {
    let current = this.head;
    let listValue = []
    while (current) {
        listValue.push(current.data);
        current = current.next;
    }
    console.log(listValue.join('->'));
}

LinkedList.prototype.reverse = function () {
    let current = this.head;
    let prev = null;
    let next = null;
    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    this.head = prev;
}

const ll = new LinkedList();
ll.insertAtBeginnig(5);
ll.insertAtEnd(10);
ll.insertAtEnd(20);
ll.insertAtEnd(30);
ll.insertAtEnd(40);
ll.insertAtEnd(50);
ll.insertAfter(15, ll.head.next);
// ll.deleteFirstNode();
// ll.deleteLastNode();
// ll.deleteByKey(20);
console.log(ll.search(20));
ll.reverse();
ll.printList();