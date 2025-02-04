import { LinkedList } from './linkedList.js';

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log('Initial list:');
console.log(list.toString());

console.log('\nTesting insertAt:');
list.insertAt("penguin", 2);
console.log(list.toString());

console.log('\nTesting removeAt:');
list.removeAt(3);
console.log(list.toString());

console.log('\nTesting edge cases:');
list.insertAt("eagle", 0);
console.log('After inserting at beginning:');
console.log(list.toString());

list.removeAt(0);
console.log('After removing from beginning:');
console.log(list.toString());