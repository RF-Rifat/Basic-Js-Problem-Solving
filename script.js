// problem - 1

const shoppingList = [];

shoppingList.push("Apples");
shoppingList.push("Bananas");
shoppingList.push("Milk");
shoppingList.push("Bread");

shoppingList.splice(1, 1);

shoppingList[2] = "Eggs";

const listLength = shoppingList.length;

const message = `I have ${listLength} items in my shopping list: ${shoppingList}.`;

console.log(message);

// Problem - 2

const word = "Developer";

const wordLength = word.length;

function countVowels(word) {
  let vowels = 0;
  for (let i = 0; i < word.length; i++) {
    const letters = word[i].toLowerCase();
    if (
      letters === "a" ||
      letters === "e" ||
      letters === "i" ||
      letters === "o" ||
      letters === "u"
    ) {
      // console.log(word[i]);

      ++vowels;
      // console.log(vowels);
    }
  }
  return vowels;
}

countVowels(word);

const vowelCount = countVowels(word);

const consonants = [];

const vowels = ["a", "e", "i", "o", "u"];

for (let x = 0; x < word.length; x++) {
  let a = word[x].toLocaleLowerCase();
  if (!vowels.includes(a)) {
    consonants.push(word[x]);
  }
}

let message2 = `The word '${word}' has ${
  word.length - 1
} characters. It contains ${
  consonants.length - 1
} consonants and ${vowelCount} vowels`;

console.log(message2);

// Problem - 3 (Random Number Operator)

const randomFraction = Math.random() * 10;

const randomWhole = Math.floor(randomFraction);

function generateRandomInRange(min, max) {
  const range = Math.floor(Math.random() * (max - min + 1) + min);
  return range;
}
generateRandomInRange(5, 15);

let randomInRange = generateRandomInRange(5, 20);

function convertToInteger(e) {
  return parseInt(e);
}

let parsedInteger = convertToInteger("42");

console.log("Random Fraction: " + randomFraction);
console.log("Random Whole Number: " + randomWhole);
console.log("Random Number in Range [5, 15]: " + randomInRange);
console.log("Parsed Integer: " + parsedInteger);

// Problem - 4

let option = "R";

switch (option) {
  case "R":
    "Option R selected";
    break;
  case "A":
    "Option A selected";
    break;
  case "B":
    "Option B selected";
    break;
  default:
    "Invalid option selected";
    break;
}

function isOptionValid(option) {
  switch (option) {
    case "R":
    case "A":
    case "B":
      return true;
    default:
      return false;
  }
}

let isValidOption = isOptionValid(option);
console.log("Is option valid? " + isValidOption);

// Problem - 5

let course = {
  name: "Mathematics",
  instructor: "John Doe",
  students: ["Alice", "Bob", "Charlie"],
};

course.students.push("David");

course.students.pop();

course.instructor = "Jane Smith";

course.duration = 10;

delete course.name;

console.log(course);

// Problem - 6

let recordCollection = {
  2468: {
    title: "Song Title 1",
    artist: "Artist 1",
    year: 2020,
  },
  1357: {
    title: "Song Title 2",
    artist: "Artist 2",
    year: 2018,
  },
  9876: {
    title: "Song Title 3",
    artist: "Artist 3",
    year: 2022,
  },
};

let song1 = recordCollection[2468];

let hasSong4321 = recordCollection.hasOwnProperty(4321);

recordCollection[4321] = {
  title: "Song Title 4",
  artist: "Artist 4",
  year: 2019,
};

let songTitle = recordCollection[9876].title;

var songYear = recordCollection[1357].year;

console.log(song1);
console.log(hasSong4321);
console.log(recordCollection);
console.log(songTitle);
console.log(songYear);

// Problem - 7

let i = 1;
while(i < 6){
    console.log(i);
    ++i;
}

for (let x = 0; x < 10; x++){
    if ((x % 2) === 0 ){
        console.log(x);
    } 
}

for (let y = 10; y > 0; y--){
        console.log(y); 
};

let seats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var l = 0; l < seats.length; l++) {
  console.log(seats[l]);
}

let pattern = ""
for(let m = 0; m < 5; m++){
    for(let n = 0; n < m; n++){
        pattern += "*";
    }
    pattern += " ";
}
console.log(pattern)

// Problem - 8

let countdown = function (e){
  if(e > 0){
    console.log(e)
    countdown(e - 1)
  }else{
    console.log("Countdown complete!")
  }
  
}

countdown(5);

// Problem - 9

let score = 45;

let result = score < 80 ? "Fail" : "Pass";

console.log(result)

let grade = 
  score >= 90 ? "A" : 
  score >= 80 ? "B" :
  score >= 70 ? "C" :
  "D";

console.log(grade);

// Problem - 10



// ES-6 
// Problem - 1

function multiply (a=1,b){
  return a * b;
}

function sumAll(...numbers) {
  let sum = 0;
  for (let e of numbers) {
    sum += e;
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5];

const totalSum = sumAll(...numbers);

const max = Math.max(...numbers);
const min = Math.min(...numbers);

// Problem - 2

var age = 25;

function updateAge(newAge){
  let age = newAge;
  console.log(age);
}

let numbers2 = [1,2,3]

function addElement(element){
  numbers2.push(element)
}

addElement(4);

console.log(numbers2);

const person = {
  name: "John",
  age: 25
};

function updatePersonAge (newAge){
  Object.freeze(person);
  person.age = newAge;
}

updatePersonAge(30);

console.log(person);

const multiply2 = (a,b) => a * b;

const greet = (name) => {`hi ${name}!`};

// Problem - 3

const person2 ={
  name: "Rifat",
  age: 20
}

const {name: personName,age: personAge} = person2;

const address = {
  city: "New York",
  country: "USA"
};

const {city: cityName, country: countryName} = address;

const numbers3 = [1,3,5,7,9];

const [firstNumber, secondNumber,...restNumber] = numbers3;

function printPersonInfo(personInfo) {
  const { name, age } = personInfo;

  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
}

printPersonInfo(person);

// Problem - 4

const name = "Rifat";
const age2 = 20;

const string = `I am ${name} and i am ${age2} years old`;

const user = {
  name,
  age2
}

console.log(user);

const greetUser = (user) => `Hi, ${user.name}`;

console.log(greetUser(user));

class Product {
  constructor(name, price, quantity){
    this.name = name
    this.price = price
    this._quantity = quantity
  }
  get quantity(){
    return this._quantity;
  }
  set quantity(newQuantity) {
    if (newQuantity >= 0) {
      this._quantity = newQuantity;
    } else {
      console.log("Quantity cannot be negative.");
    }
  }
}

const product = new Product("Keyboard", 49.9, 10);
console.log(product.quantity); 
product.quantity = 5;
console.log(product.quantity); 
product.quantity = -5;

// Problem - 5

const myPromise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve();
  },2000)
});

myPromise.then(()=>{
  console.log("done")
})

myPromise.catch(()=>{
  console.log("cancel")
})

// export default myPromise;

// import myPromise from './promises.js';

// myPromise.then(() => {
//   console.log("Promise fulfilled");
// }).catch(() => {
//   console.log("Promise rejected");
// });