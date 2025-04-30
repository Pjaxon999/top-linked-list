import Node from "./node.js";
export default class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            this.tail.nextNode = newNode;
        }
        this.tail = newNode;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.nextNode = this.head;
        this.head = newNode;
        if (this.tail === null) {
            this.tail = newNode;
        }
    }

    size() {
        // starting from the head, follow the pointers to the tail and increment the count each time
        let count = 0;
        if (this.head === null) return "This list is empty! Disgraceful!";
        else {
            let currentNode = this.head;
            while (currentNode !== null) {
                count++;
                currentNode = currentNode.nextNode;
            }
        }
        return count;
    }

    static listName = "I am a linked list abstraction";
}