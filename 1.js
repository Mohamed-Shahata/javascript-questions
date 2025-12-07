/*
=============== Memory ================
| address   |    name     |     value |
=======================================
| 0x1234    |   sayHi     |     {...} |
| 0x254d    |   name      | undefined |
| 0x7af8    |   age       | undefined | =>  Go TDZ
=======================================
*/

function sayHi() {
  console.log(name); // undefined
  console.log(age); // cannot access age
  var name = "Omer";
  let age = 21;
}

sayHi();
