let price = document.querySelector("#price");
let money = document.querySelector("#money");
let answer = document.querySelector("#answer");

let destination = () => {
  let result = Math.floor(
    parseInt(money.value, 10) / parseInt(price.value, 10)
  );

  let text;
  result >= 10
    ? (text = `you can get ${result} liters. Good,now you can escape`)
    : (text = `Ups, you have to stay here. You can get only ${result} liters`);
  answer.textContent = text;
};
