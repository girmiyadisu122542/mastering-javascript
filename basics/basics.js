console.log("Hello world");

// variables
let firstName = "John";
console.log(firstName);
const lastName = "Doe";
console.log(lastName);
let variable1 = "Hello";
console.log(variable1);
//constants
let interestRate = 0.3; //use const for constants instead of let
interestRate = 1;
console.log(interestRate);
//primitive types
let name = "John"; //string
let age = 30; //number
let isApproved = true; //boolean
let motherName = undefined; //undefined
let selectedColor = null; //null
console.log(typeof (name))

//Object
let person = {
    name: "Girmay",
    age: 25
};
console.log(person);
// dot notation
person.name = "John";
// bracket notation
person['name'] = 'Samri';
let selection = 'name';
person[selection] = "gech";
console.log(person.name);

//Array
let selectedColors = ['red', 'green'];
selectedColors[2] = 'blue';
console.log(selectedColors[0]);
console.log(selectedColors.length);

//functions
function greet(name, lastName) {
    console.log("Hello " + name + ' ' + lastName);
}
greet('Girmay', 'Addisu');

//operators
let x = 10;
let y = 3;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y); //x the power of y
//increment
console.log(x++);
console.log(x);
console.log(++x);
//decrement
console.log(x--);
console.log(x);
console.log(--x);
//comparision operators


let z = 1;

//relational
console.log(z > 0);
console.log(z >= 0);
console.log(z < 0);
console.log(z <= 0);
//equaltiy
console.log(z === 1);
console.log(2 === 2);

let points = 110;
let level = points > 100 ? 'gold' : 'silver';
console.log(level);
let a = 'red';
let b = 'blue';
let temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);
console.log(1 & 2);

// control flows  
// if-else
let hour = 16;
if (hour >= 6 && hour < 12)
    console.log("Good Morning");
else if (hour >= 12 && hour < 18)
    console.log("Good Afternoon");
else
    console.log("Good Evening")
// switch-case
let role = "guest"

switch (role) {
    case 'guest':
        console.log("Guest User");
        break;
    case 'Moderator':
        console.log("Moderator User");
        break;
    default:
        console.log("Unknown user");

}
//loops
//for loop
for (let i = 0; i < 4; i++) {
    if (i % 2 !== 0) console.log(i);
}
//while 
let i = 0;
while (i < 5) {
    if (i % 2 !== 0) console.log(i);
    i++;
}
//do while
let j = 0;
do {
    if (j % 2 !== 0) console.log(j);
    j++;
} while (j <= 5);

//for in => applicable for array and object

const personalInfo = {
    name: "Girmay",
    age: 27
}

for (let key in personalInfo)
    console.log(key, ': ' + personalInfo[key]);

const myColors = ['red', 'green', 'blue'];

for (let index in myColors)
    console.log(index, myColors[index]);

//for of => is applicable in array

for (let color of myColors)
    console.log(color);

//Break and continue

let k = 0;
while (k <= 10) {

    // if ( k === 5) break;
    if (k % 2 === 0) {
        k++;
        continue;
    }
    console.log(k);
    k++;
}

//Excercise on conditions
/* 1. Write a function that takes two numbers 
  and return the  the maximum of the two.
 */
function maxOfTwoNumbers(a, b) {
    return (a >= b) ? a : b;
}

console.log("Maximum number is: " + maxOfTwoNumbers(8, 4));

function checkSpeed(speed) {
    let roundedSpeed = Math.floor(speed);
    if (roundedSpeed <= 70) return "Ok";
    else {
        let points = 0;
        let extraspeed = roundedSpeed - 70;
        if (extraspeed < 5) {
            return "ok";
        }
        else {
            for (let i = 1; i <= extraspeed; i++) {
                if (i % 5 === 0)
                    points++;
                if (points > 12) return "License suspended";
            }
            return "points: " + points;
        }
    }
}

console.log(checkSpeed(180));

function showProperties(obj) {
    for (let item in obj) {
        console.log(item, obj[item])
    }
}

const movies = {
    title: 'a',
    releaseYear: 2012,
    rating: 4.5,
    director: 'b'
}

showProperties(movies);

function showStars(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += '*';
        }
        console.log(pattern);

    }
}

showStars(10);

//prime numbers 
function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor == 0)
            return false;

    return true;
}

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++)
        if (isPrime(number)) console.log(number);
}

showPrimes(20);