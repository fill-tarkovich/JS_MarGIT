let form = document.querySelector("form");
let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let radio = document.querySelectorAll('input[name="direction"]');
let code = document.querySelector(".code");
let dir;

const setGradient = () => {
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      dir = radio[i].value;
    }
  }
  console.log(color1.value);
  console.log(color2.value);
  console.log(radio);
  document.body.style.backgroundImage = `linear-gradient( ${dir},${color1.value}, ${color2.value})`;
  code.textContent = `linear-gradient(${dir}, ${color1.value}, ${color2.value})`;
};

form.addEventListener("change", setGradient);
