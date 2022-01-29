// Loop Assignments (Don’t use arrays)

// 1. Make a program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…)

for (let i = 1; i <= 100; i++) {
  if (i % 2) {
    console.log(i);
  }
}

// 2. Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 …
let result = "";
let end = 98;

for (let i = 2; i < 100; i += 2) {
  result += " " + i + " ";
  result += " " + end + " ";
  end -= 2;
  console.log(result);
}
// 3. Make a program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. The program ends when user gives 0 for the distance. (After getting 0, the program does not ask anything from the user.)

while (distance != 0) {
  let distance = prompt("What was your distance?");
  let time = prompt("What time did it take?");
  let average = distance / time;
  console.log(average);
}

// 4. Make a program that asks 20 numbers from user. After that the program prints out how many of those numbers where even.

let count = 0;

for (let l = 0; l < 20; l++) {
  num = prompt("Enter a number:");
  if (num % 2 === 0) count++;
}
console.log("The count of even numbers: " + count);

// 5. Make a program that asks numbers from the user, until user gives 0 and then program ends. In the end program prints out average of the numbers.
let sum = 0;
let i = 0;
let number = prompt("Type number (0 stops program)");
while (number !== 0) {
  let value = parseInt(number, 10);
  sum += value;
  i++;
  console.log(`Average is ${sum / i}`);
}

// 6. Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers.

let number = 0;
for (let i = 0; i < 5; i++) {
  number = number + parseInt(prompt("Type number"), 10);
}
let average = number / 5;
console.log(Math.round(average));

// 7. Make a program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”. If user answers y, the program continues to ask another number. If user answers n, program ends. In the end program prints out average of the numbers.

// 8. Make a program that asks first how many numbers user wants to give to the program. After that program asks those numbers. In the end program prints out the smallest number that user gave.

// 9. Make a program that asks ten numbers and in the end prints out two biggest numbers.

// 10. Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number.
