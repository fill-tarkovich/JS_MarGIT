let weight = document.querySelector("#weight");
let height = document.querySelector("#height");
let button = document.querySelector(".btn");
let result = document.querySelector(".result");

const bmi = (x, y) => {
  let index = x / ((y / 100) * (y / 100));
  return index;
};

const calculation = (index) => {
  if (index < 18.5) return "Underweight";
  else if (index >= 18.5 && index <= 29.4) return "Normal Weight";
  else if (index >= 25 && index <= 29.9) return "Pre-obesity";
  else if (index >= 30) return "Obesity";
};

const smth = function () {
  result.textContent = `Your BMI is ${bmi(
    weight.value,
    height.value
  )} which is ${calculation(bmi(weight.value, height.value))}`;
};
