import {LinkedList, Node, createLinkedList} from "./module.js"

/*let myList = createLinkedList(["first node", "second node", "third note"]);
console.log(`myList: `); myList.log();
myList.add("forth node");
console.log(`myList: `); myList.log();
myList.remove("second node");
console.log(`myList: `); myList.log();
console.log(`size: ${myList.count()}`);
for (var el of myList) {
    console.log(`ITERATOR: ${el}`);
}
for (var el of myList) {
    console.log(`ITERATOR2: ${el}`);
}
myList.clear();
for (var el of myList) {
    console.log(`ITERATOR3: ${el}`);
}
console.log(`myList: `); myList.log();*/

const ll = createLinkedList([100, 1, 2, 3, 100, 4, 5, 100]);
ll.log();
// "100, 1, 2, 3, 100, 4, 5, 100"
while(ll.remove(100));
ll.log();
// "1, 2, 3, 4, 5"
ll.add(10);
ll.log();
// "1, 2, 3, 4, 5, 10"
console.log(ll.contains(10));
// "true"
let sum = 0;
for (const n of ll) {
sum += n;
}
console.log(sum);
// "25"
ll.clear();
ll.log();
// ""


/*
Properties of the list elements:
• data
• next - reference for the next element or null
Methods of the LinkedList class:
• add(value) - insert the value to the end of the list
• remove(value) - delete the first element equal to the value
• contains(value) - returns true if the list contains that value
• [Symbol.iterator] - values of elements
• clear() - clear the list
• count() - return the length of the list
• log() - print into the console the values of elements separated by a ","
*/
