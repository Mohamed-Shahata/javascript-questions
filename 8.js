class Car {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = "green" } = {}) {
    this.newColor = newColor;
  }
}
const car1 = new Car({ newColor: "purple" });
console.log(car1.colorChange("orange"));
