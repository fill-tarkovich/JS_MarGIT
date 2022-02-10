let btnAdd = document.querySelector("#add");
const carArray = [];
class Car {
  constructor(licence, maker, model, owner, price, color) {
    this.licence = licence;
    this.maker = maker;
    this.model = model;
    this.owner = owner;
    this.price = price;
    this.color = color;
  }
}

btnAdd.addEventListener("click", () => {
  const car = {};
  let licence = document.querySelector("#licence");
  let maker = document.querySelector("#maker").value;
  let model = document.querySelector("#model").value;
  let owner = document.querySelector("#owner").value;
  let price = document.querySelector("#price").value;
  let color = document.querySelector("#color").value;

  let newCar = new Car(licence, maker, model, owner, price, color);
  carArray.push(newCar);
  console.table(carArray);
});
