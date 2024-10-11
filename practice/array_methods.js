
//toString()

let bikes = ['Yamha', 'Bajaj', 'Tvs', 'Honda'];

console.log(bikes.toString());  // "Yamha,Bajaj,Tvs,Honda"

//join()  concatinating array.join(separator)

console.log(bikes.join());  // "Yamha,Bajaj,Tvs,Honda"
console.log(bikes.join(''));  // YamhaBajajTvsHonda
console.log(bikes.join('-')); // Yamha-Bajaj-Tvs-Honda

//push() add an item to the last element  and  pop() removes the last element 

bikes.push('hayundai', 'toyota');
console.log(bikes);  // [ 'Yamha', 'Bajaj', 'Tvs', 'Honda', 'hayundai', 'toyota' ]

bikes.pop();
console.log(bikes); //[ 'Yamha', 'Bajaj', 'Tvs', 'Honda', 'hayundai' ]

//shift() removes the first element of an array

console.log(bikes.shift()); //Yamha
console.log(bikes); //[ 'Bajaj', 'Tvs', 'Honda', 'hayundai' ]

//unshift() add element to the begining of an array and return array length

console.log(bikes.unshift('BMW', 'Buggati')); //6
console.log(bikes); //[ 'BMW', 'Buggati', 'Bajaj', 'Tvs', 'Honda', 'hayundai' ]

// delete it deletes an element is the array but it leaves undefined holes to the array

let fruits = ['banana', 'apple', 'grapes'];

delete fruits[1];
console.log(fruits);  //[ 'banana', <1 empty item>, 'grapes' ]

//concat() concatinate or joins arrays and creates new array with out touches the original arrays

let arr1 = [3, 5, 7];
let arr2 = [67, 89, 34];
let arr3 = [56, 23, 56];

const newArray = arr1.concat(arr2, arr3);
console.log(newArray);   //[ 3,  5,  7, 67, 89, 34, 56, 23, 56 ]

//sort() sorting array in asscending or alphabetical order

let ary = [45, 23, 67, 93, 12];
let place = ['Kobmolcha', 'Bahirdar', 'Addis Abeba', 'Hawassa']

console.log(ary.sort());  // [ 12, 23, 45, 67, 93 ]
console.log(place.sort()); // [ 'Addis Abeba', 'Bahirdar', 'Hawassa', 'Kobmolcha' ]

//splice() adding or removing elements of an array in the specified location. It overrites the original array
// array.splice(index, deleteHowMany, item1, item2, ...itemx)

let originalArray = [4, 8, 3, 12];
originalArray.splice(2, 1, 7, 34, 78);
console.log(originalArray);  // [ 4, 8, 7, 34, 78, 12 ]

//slice() as the name indicates it displays parts of an arrray
// slice(start, end)

let score = [4, 6, 7, 8, 2, 9, 10, 5, 2];
let slicedScore = score.slice(2, 6);
console.log(slicedScore);  // [ 7, 8, 9, 10 ]

// reverse()  reverses the order of the array

console.log(score.reverse()); //[ 2, 5, 10, 9,2, 8, 7,  6, 4 ]

// isArray() return true if an object is array otherwise returns false  Array.isArray(obj)

console.log(Array.isArray(score)); //true

// indexOf()  returns the first index of a specified value returns -1 if the value is not found
//indexOf(item.start)

console.log(score.indexOf(7)); // 5 since score is reversed
console.log(score.indexOf(10, 3)); // -1


//lastIndexOf() returns the last index of a specified value. If the value not found it returns -1

console.log(score.lastIndexOf(2)); // 4
console.log(score.lastIndexOf(2, 3)); // 0

//find() returns the first array element that meets the provided testing funciton

let tax = [4, 6, 7, 23, 67, 11, 24]

let found = tax.find(item => item > 10);
console.log(found); // 23

//findIndex()  returns the first element of the array that meets the specified function

const isLargeNumber  = (element) => element > 13;
console.log(tax.findIndex(isLargeNumber)); // 3 (index)

//includes returns if the specfied element is found in the array. case sensitive

let num  = [1, 2, 3]
let str = ['cat', 'dog', 'sheep']

console.log(num.includes(2));  // true
console.log(str.includes('Dog')); //false

//entries() returns an array iterator object with key/value pairs

let days = ['sun', 'mod', 'tue', 'thu', 'fri', 'sat'];

let day = days.entries(); //Object [Array Iterator] {}
console.log(day);

for(let key of day)
    console.log(key);
    
// every() it returns every element of the array meets a certain condition funciton, returns boolean value

const myNumbers = [1, 30, 23, 12, 23, 39];

const isBelow = (value) => value <= 30;

console.log(myNumbers.every(isBelow)); //false

//some() returns true if a specified function meets at least one in the array

const hasEven = (value) => value % 2 == 0;

console.log(myNumbers.some(hasEven)); // true




















