let a = 3; // Primitive
let b = new Number(3); // Wrapper objects | objects types
let c = 3; // Primitive

console.log(a == b); // true
console.log(a === b); // false
console.log(b === c); // false
/*
mutable  => objects   => it change
immutable => primitve   => it does not change
=>{x:7}<=
x =>6
=============================
|   Stack    |    Heap      |
=============================
Primitive    |  Objects Types
  - number   |   - Object
  - string   |   - Array
  - boolean  |   - Function
  - null     |   - Date
  - undefined|   - ReGex
  - symbol   |   - Map, Set
  - bigint   |   - Error
*/
