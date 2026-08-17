//Task 1: Program for filtering dupliactes numbers
const numbers = [1, 2, 3, 2, 4, 1, 5, 3];
let count = {};
let duplicates = [];
for (let number of numbers) {
  count[number] = (count[number] || 0) + 1;
}
for (let number in count) {
  if (count[number] > 1) {
    duplicates.push(Number(number));
  }
}

console.log("Duplicates:", duplicates);


//Task 2:Program to calculate the score against a certain number X

const scores = [45, 78, 90, 62, 30, 85, 55];
let count = 0;
for (let score of scores) {
  if (score > 60) {
    count++;
  }
}

console.log("Scores above 60:", count);

//Task 3:    A program to filter products into categories

const products = [
  { name: "Apple", category: "Fruit" },
  { name: "Carrot", category: "Vegetable" },
  { name: "Banana", category: "Fruit" },
  { name: "Potato", category: "Vegetable" }
];
let grouped = {};
for (let product of products) {
  if (!grouped[product.category]) {
    grouped[product.category] = [];
  }
  grouped[product.category].push(product.name);
}
console.log(grouped);


//Task4: A program to find the highest score of numbers

const scores = [45, 78, 92, 65, 88, 55];
let highest = scores[0];

for (let score of scores) {
  if (score > highest) {
    highest = score;
  }
}
console.log("Highest score:", highest);
