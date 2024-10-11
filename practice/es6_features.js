
//Arrow Functions

// ES5 Function
function add(x, y) {
    return x + y;
}

// ES6 Function
const addE = (x, y) => x + y;

console.log(addE(7, 6));

// Destructuring Assignment

const person = { name: "Girmay", age: 25 };

const { name, age } = person;

console.log(`Name: ${name}, Age: ${age}`);

//Spread Operator

const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers, 6, 7, 8];
console.log(newNumbers);

//Rest Parameter
/*
    The rest parameter allows functions to accept               
    an indefinite number of arguments as an array,
    The rest parameter allows functions to accept
    simplifying parameter handling.
*/

function sum(...nums) {
    return nums.reduce((acc, num) => acc + num, 0);
}

console.log(sum(4, 5, 6));

//Async / Await

const Api = 'https://jsonplaceholder.typicode.com/';

const fetchData = async () => {
    try {
        await fetch(`${Api}/posts`)
            .then((response) => response.json())
        //  .then((json) => console.log(json));

    } catch (error) {
        console.log(error);

    }
}
fetchData();

//Map and Set

const numberMap = new Map().set('one', 1).set('two', 2);

console.log(numberMap);

const numberSet = new Set([1, 2, 1, 3, 5, 2]);

numberSet.forEach((item) => console.log(item));

// Map Method

const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);

//Filter Method

const evenNumbers = newNumbers.filter(item => item % 2 === 0);
console.log(evenNumbers);

// Call Function => call()

const personToCall = {
    fullName: function (location, rollNumber) { 
        return `${this.firstName} ${this.lastName} from ${location} RollNumber ${rollNumber}`
    }
};

const person1 = {
    firstName: 'Girmay',
    lastName: 'Addisu'
}

const person2 = {
    firstName: 'Abebe',
    lastName: 'Alem'
}
//call
console.log(personToCall.fullName.call(person1, "Woldia", 'Wour/0660/11'));
console.log(personToCall.fullName.call(person2, "Bahirdar", "Wour/0535/11"));

//Apply
console.log(personToCall.fullName.apply(person1, ["Woldia", 'Wour/0660/11']));
console.log(personToCall.fullName.apply(person2, ["Bahirdar", "Wour/0535/11"]));




