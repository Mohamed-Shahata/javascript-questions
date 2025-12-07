const shape = {
  radius: 10,
  diameter() {
    return 10 * 2; // 10 * 2 = 20
  },
  perimeter: () => 2 * Math.PI * this.radius, // 2 * 3.14 * undefined = NaN
};

console.log(shape.diameter()); //20
console.log(shape.perimeter()); // NaN
