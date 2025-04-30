import LinkedList from "./linkedList.js";
console.log(LinkedList.listName);
const list = new LinkedList();
console.log(list.find(4));
list.append(1);
list.prepend(2);
list.append(3);
list.append(4);
list.append(5);
// list here looks like 2, 1, 3, 4, 5
console.log(list.find(4)) // should return index 3
console.log(list.find(10)) // nope