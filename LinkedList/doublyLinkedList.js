class Node {
    constructor(data, prev = null, next = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
}

DoublyLinkedList.prototype.insertAtBeginning = function (data) {
    const newNode = new Node(data, null, this.head);
    if (this.head !== null) {
        this.head.prev = newNode;
    }
    this.head = newNode;
    if (this.tail === null) {
        this.tail = newNode;
    }
};

DoublyLinkedList.prototype.insertAtEnd = function (data) {
    const newNode = new Node(data, this.tail, null);

    if (this.tail !== null) {
        this.tail.next = newNode;
    }
    this.tail = newNode;

    if (this.head === null) {
        this.head = newNode;
    }
};

DoublyLinkedList.prototype.insertAfter = function (data, prevNode) {
    if (!prevNode) {
        console.log("Invalid previous node");
        return;
    }

    const newNode = new Node(data, prevNode, prevNode.next);
    if (prevNode.next !== null) {
        prevNode.next.prev = newNode;
    }
    prevNode.next = newNode;

    if (newNode.next == null) {
        this.tail = newNode;
    }
};

DoublyLinkedList.prototype.deleteFirst = function () {
    if (!this.head) {
        return;
    }
    if (this.head == this.tail) {
        this.head = null;
        this.tail = null;
    } else {
        this.head = this.head.next;
        this.head.prev = null;
    }
};

DoublyLinkedList.prototype.deleteLast = function () {
    if (!this.tail) {
        return;
    }
    if (this.head == this.tail) {
        this.head = null;
        this.tail = null;
    } else {
        this.tail = this.tail.prev
        this.tail.next = null
    }
}

DoublyLinkedList.prototype.reverse = function () {
    let current = this.head;
    let temp = null;
    while (current !== null) {
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;
        current = current.prev;
    }
    if (temp !== null) {
        this.tail = this.head;
        // console.log(temp,temp.prev,temp.next);
        this.head = temp.prev;
    }
}

DoublyLinkedList.prototype.print = function () {
    let current = this.head;
    let result = []
    while (current !== null) {
        result.push(current.data);
        current = current.next;
    }
    console.log(result.join(' <-> '));
}

const dll = new DoublyLinkedList();
dll.insertAtBeginning(1);
dll.insertAtEnd(2);
dll.insertAtEnd(3);
dll.insertAtEnd(4);
dll.insertAtEnd(5);
dll.insertAtEnd(6);
dll.print(); 
dll.reverse();
dll.print();