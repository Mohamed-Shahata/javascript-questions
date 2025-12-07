/*
 Stack
|      |
|  d   | ---|123
|  c   | ---|123
|______|    |
            |
|======== Heap ========
| { greeting: "Hello" } |123
|                      |
|======================
*/
let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting); // Hello
