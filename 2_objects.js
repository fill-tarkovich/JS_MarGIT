const car = {
  mark: "Tesla",
  year: 2022,
  owner: "Filipp",
  city: "Los Angeles",
  calcAge: function () {
    this.age = 2022 - this.year;
    return this.age;
  },
};
// car.calcAge();
console.log(car);
console.log(car.mark, car.owner);

car.color = "black";
delete car.city;
console.log(car);

// const car = new Object();
