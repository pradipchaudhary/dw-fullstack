/**
 * 
 * 
 * console.log("a");

setTimeout(() => {
  console.log("setTimeout2");
}, 0);

/* 
synchronous code that takes 5s
at last it will print done

console.log("b");

a
b
c



*/

/* 
How code runs at node

? callstack
    it runs code inside it
    flirts it runs synchronous code
    then it runs asynchronous code

? synchronous code

? asynchronous code
    code at background is called asynchronous


? memory queue
    it is queue for asynchronous function
    it works on first in first out

? event loop
    it observe callstack and memory queues
    if callstack is free it push code from memory queue to callstack


*/
