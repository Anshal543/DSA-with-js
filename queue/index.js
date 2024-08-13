class Queue{
    constructor(){
        this.queue = [];
    }

    enqueue(item){
        this.queue.push(item);
    }

    dequeue(){
        if(this.isEmpty()){
            return "Queue is empty";
        }
        return this.queue.shift();
    }

    peek(){
        return this.queue[0];
    }

    isEmpty(){
        return this.queue.length === 0;
    }

    print(){
        let str = "";
        for (let i = 0; i < this.queue.length; i++) {
            str += this.queue[i] + " ";
        }
        return str;
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
console.log(queue.print());