import LinkedList from "./linkedList.js";
console.log(LinkedList.listName);
const list = new LinkedList();
console.log(list.size()); // "This list is empty! Disgraceful!"
list.append(1);
console.log(list.size()); // Should return 1
list.prepend(2);
list.append(3);
console.log(list.getHead()); // should return node 2
console.log(list.getTail()); // should return node 3 (nextNode = null);
console.log(list.size()); // Should return 3