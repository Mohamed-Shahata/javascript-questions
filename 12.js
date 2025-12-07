function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const ramadan = new Person("Ramadan", "Karim");
const eid = Person("Eid", "Saeed");

// console.log(window.firstName + window.lastName);

console.log(ramadan);
console.log(eid);
