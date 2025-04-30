import LinkedList from "./linkedList.js";
console.log(LinkedList.listName);
const list = new LinkedList();
console.log(list.contains(1)); // should complain about trying to find something in an empty list
list.append(1);
list.prepend(2);
list.append(3);
list.append(4);
list.append(5);
console.log(list.contains(10)); // nope
console.log(list.contains(4)); // yep