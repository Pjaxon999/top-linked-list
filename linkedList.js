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

    getHead() {
        return (this.head);
    }

    getTail() {
        return (this.tail);
    }

    at(index) {
        let currentIndex = 0;
        if (this.head === null) return "Since this list is empty, there's nothing to find!";
        if (index < 0) return "Give me a positive index instead please, negative integers make my head hurt!";
        if (index > this.size()) return "Your requested index value is too large!";
        else {
            let currentNode = this.head;
            while (currentIndex !== index) {
                currentIndex++;
                currentNode = currentNode.nextNode;
            }
            return currentNode;
        }
    }

    pop() {
        if (this.head === null) return "I can't remove anything from an empty list!";
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return "Last node removed. List is now empty";
        } else {
            let removedNode = this.tail;
            let newTailIndex = this.size() - 2;
            let currentIndex = 0;
            let currentNode = this.head;
            while (currentIndex !== newTailIndex) {
                currentIndex++;
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = null;
            this.tail = currentNode;
            return `Last node ${removedNode.value} removed.`
        }
    }

    contains(value) {
        if(this.head === null) return "Obviously this is going to be false. The list is empty!";
        else {
            let currentNode = this.head;
            while (currentNode !== null) {
                if (currentNode.value === value) {
                    return true;
                }
                currentNode = currentNode.nextNode;
            }
            return false;
        }
    }

    static listName = "I am a linked list abstraction";
}