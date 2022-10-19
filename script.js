// Arrays

// 1. Best
let arr1 = ["black", "red", "orange"];

// 2. Not use
let arr2 = new Array("yellow", "green");

// array with different data types
let arr3 = ["hi there", 9, true];
console.log(typeof arr3[1]); // number
console.log(typeof arr3[2]); // boolean
console.log(typeof arr3[0]); // string

// array const
const myArr = ["Hi there"];
myArr[0] = "How are you?";
console.log(myArr);
// myArr = ["How are you"]; // Error

// Why Arrays
let col1 = "red";
let col2 = "blue";
let col3 = "orange";
let col4 = "brown";

const colors = ["red", "blue", "orange", "brown"];

// access array elements (index) 0
const cars = ["A", "B", "C", "D"];
console.log(cars[0]);

cars[0] = "Tesla";
console.log(cars);

//
const colors1 = ["gray", "pink", "White"];
const boolean = [true, false, false, true];
let emptyArray = [];

// length = 1
console.log(colors1.length); // 3
console.log(boolean.length); // 4
console.log(emptyArray.length); // 0

// last element
let lastElement = colors1[colors1.length - 1]; // White

const numbers = [10, 24, 37];
numbers[3] = 50;
console.log(numbers);
numbers[7] = 100;
console.log(numbers);
console.log(numbers.length); // 8

// method
const arr5 = [2, 5, 7, 8];
let findIndex = arr5.indexOf(7); // 2
let findIndex1 = arr5.indexOf(5); // 1
let findIndex2 = arr5.indexOf(10); // -1
console.log(findIndex2);

//

let animals = ["f", "e", "l", "e"];
console.log(animals.lastIndexOf("e")); // 3

// push (end)
const fruits = ["Watermelon", "Lemon", "Grapes"];
// fruits[3] = "Apple";
// add to end of array
let myPush = fruits.push("Apple", "Orange");
console.log(myPush); // 5

// let myPush2 = fruits.push("Orange");
console.log(fruits);

// splice
let myNum = ["1", "2", "3", "4"];
myNum.splice(2, 2, 50, 90);
console.log(myNum); //

// concat :
let myArr4 = [10, 20, 30];
let myArr5 = [100, 200, 300];
let myArr6 = [1000, 2000, 3000];

let arrays = myArr4.concat(myArr5);
console.log(arrays);

let arrays2 = myArr6.concat(4000, 5000);
console.log(arrays2);

// pop: remove the last element
let jobs = ["Web dev", "Pilot", "Chef"];
console.log(jobs.pop()); // Chef
console.log(jobs); //

// unshift : add an elements (start)
let name3 = ["Ali", "Mila", "Saed"];

console.log(name3.unshift("Nelly")); // 4
console.log(name3);

// shift
let name5 = ["Tim", "Maximilian", "Belal"];
console.log(name5.shift()); // Tim
console.log(name5);

// Sorting
const letters = ["Zambia", "Canada"];
letters.sort();
console.log(letters);

// push
const books = ["JS", "CSS", "React"];
const newBook = books.push("Node.js");
console.log(newBook); // 4 (length)
console.log(books); //

// pop
const gaming = ["Playstation", "Nintendo", "Xbox"];
console.log(gaming.pop()); // Xbox
console.log(gaming);

// unshift
const cars1 = ["BMW", "Audi", "Ford"];
console.log(cars1.unshift("Mercedes")); // 4
console.log(cars1);

// shift
const sports = ["Football", "Basketball", "Baseball"];
console.log(sports.shift()); // Football
console.log(sports);

//
const laptops = ["Lenovo", "Dell", "Sony"];
console.log(laptops);

// Join: returns a new string does not change the original array
let myJ = laptops.join("");
console.log(myJ);

console.log(laptops);

const myArray1 = ["Playstation1", "Playstation 2", "Playstation5"];
let my = myArray1[1][2];
let my2 = myArray1["length"];
console.log(my2);

const chairs = [];
chairs[4] = ["Black"];
console.log(chairs.length); // 13
console.log(chairs);

// Map: (Built-in method) => it changes all values in an array
// it returns new array with new value
const math = [1, 2, 3, 4];
let mapped_arr = math.map((item) => item * 5);
console.log(mapped_arr);

// filter: (Built-in method)
let stuff = ["text", 10, "JS", new Date(), true];
// console.log(stuff);
function checkString(element, index) {
  return typeof element === "string";
}
let useFilter = stuff.filter(checkString);
console.log(useFilter);

const numberr = [1, 2, 3, 4];
const result = numberr.filter((item) => item % 2 === 0);
console.log(result); // [2, 4]

//
const series = [
  { name: "Walking Dead", price: 30 },
  { name: "Rick & Morthy", price: 70 },
  { name: "Elite", price: 90 },
  { name: "Squad Game", price: 100 },
];

const seriePrice = series.filter((price) => price.price >= 90);
console.log(seriePrice);

// reduce
const numbers2 = [1, 2, 3, 4];
const sum = numbers2.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum); // 10

//

const movies = [
  { name: "The lord of the rings", duration: 460 },
  { name: "Resident evil", duration: 160 },
  { name: "Spider-man", duration: 90 },
];
const movies_name = movies.map(function (movie) {
  return movie["name"];
});
console.log(movies_name);

//
const gameList = [1, 3, 5, 4, 2];
const priceList = [];
const gamesValue = 20;

for (let i = 0; i < gameList.length; i++) {
  priceList[i] = gameList[i] * gamesValue;
}
console.log(priceList);

const priceList2 = gameList.map((game) => game * gamesValue);
console.log(priceList2);
