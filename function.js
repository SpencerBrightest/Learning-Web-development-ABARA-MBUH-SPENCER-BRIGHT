// function for even number
function isEven(number) {
  if (number % 2 == 0) {
    console.log(`The number ${number} is even`);
  } else {
    console.log(`The number ${number} is not even`);
  }
}
const userNumber = Number(prompt("Enter a number:"));
isEven(userNumber);

// function for comparing 3 numbers
function largestNum(a, b, c) {
  if (a > b && a > c) {
    console.log(`${a} is the bigger number`);
  } else if (b > a && b > c) {
    console.log(`${b} is the greater number`);
  } else {
    console.log(`${c} is the bigger number`);
  }
}
const a = Number(prompt("Enter first number:"));
const b = Number(prompt("Enter second number:"));
const c = Number(prompt("Enter third number:"));
largestNum(a, b, c);

// function for reversing a string
function reverseString(str) {
  return str.split('').reverse().join('');
}
const userString = prompt("Enter a string to reverse:");
console.log(reverseString(userString));
