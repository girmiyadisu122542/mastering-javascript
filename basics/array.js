//Adding Elements to Array
const numbers = [3, 4];
//to the end 
numbers.push(5, 6);
// To the begenning
numbers.unshift(1, 2);
// to the middle splice(starting, delteddata,value...);
numbers.splice(2, 0, 'a', 'b');
console.log(numbers);

//Finding Elements(Primitives) in Array
const number2 = [1, 2, 3, 1, 4, 5];

console.log(number2.indexOf('a'));  //returns -1
console.log(number2.indexOf(1)); // returns 0
console.log(number2.lastIndexOf(1)); // returns 3 since the second 1 is on index 3
console.log(number2.indexOf(4) !== -1); //returns true. It can be expressed like the follwing
console.log(number2.includes(4)); // returns true
console.log(number2.indexOf(1, 2)) // returns 3 since the second argument describes the index of the array where searching is starting


// Finding Elements(Objects) Reference Types
const courses = [
    { id: 1, name: 'C++' },
    { id: 2, name: 'Javascript' }
];
/* the following function returns the actual data like { id: 2, name: 'Javascript' } 
 if the data available else returns undefined
 the find() method can be replaced findIndex() it returns the index of the object otherwise
 returns -1
*/
const course = courses.find(function (course) {
    return course.name === 'Javascript';
});
console.log(course);

//Arrow Functions
// from the above funciton
const course2 = courses.find((course) => {  // 
    return course.name === 'Javascript';
});
console.log(course2);

// if we have one parameter we can write like
const course3 = courses.find(course => {
    return course.name === 'Javascript';
});
console.log(course3);

// if we have one statement 
const course4 = courses.find(course => course.name === 'Javascript');
console.log(course4);

//Removing elments from an array

const arrayToRemove = [1, 2, 3, 4];

// Removing from th End 
arrayToRemove.pop();

// Removig from Beginning
arrayToRemove.shift();

// Removing in the middle  splice(start, delete, no.of element)
arrayToRemove.splice(2, 2);

console.log(arrayToRemove);

//Emptying an Array => make an array length 0
let arrayToEmpty = [3, 5, 6, 7]; // const draws an error
const another = arrayToEmpty;

//Solution 1
arrayToEmpty = []; // another array still contains data

//Solution 2
arrayToEmpty.length = 0;

//Solution 3
arrayToEmpty.splice(0, arrayToEmpty.length);

//Solution 4 
while (arrayToEmpty.length)
    arrayToEmpty.pop();

console.log(arrayToEmpty);
console.log(another);

//Combining and slicing Arrays
// if array object is combined or slice the comined or sliced array
// takes the object refrerence not value
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);

const sliced = combined.slice(2, 4)  // slice(start, end)

console.log(combined);
console.log(sliced);

//The spread operator

const first1 = [1, 2, 3];
const second1 = [4, 5, 6];

const combined1 = [...first1, 'Girmay', 'Mom', ...second1];

const copy = [...combined1]

console.log(copy);

//iterating an array
const arrayToIterate = [1, 2, 3];
// for in 
for (let number in arrayToIterate)
    console.log(arrayToIterate[number]);
// for of
for (let number of arrayToIterate)
    console.log(number);
// foreach
arrayToIterate.forEach((number, index) => console.log(index, number));

//Joining Arrays

const someArray = [6, 7, 8, 9, 10];

const joinedArray = someArray.join(',');

console.log(joinedArray);

const message = "This is my first message";
const parts = message.split(' ');
console.log(parts);

const partsCombined = parts.join('-');
console.log(partsCombined);

//Sorting Arrays

// sorting normal array

const arrayToBeSorted = [5, 2, 4];
arrayToBeSorted.sort();
arrayToBeSorted.reverse();
console.log(arrayToBeSorted);

// sorting objects
let subjects = [
    { id: 1, name: 'Physics' },
    { id: 2, name: 'english' },
    { id: 3, name: 'Maths' },
];

console.log(subjects.sort()); // not working

subjects.sort(function (a, b) {
    //a > b => 1
    // a < b => -1
    // a == b => 0
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA > nameB) return 1;
    if (nameA < nameB) return -1;
    return 0;
})
console.log(subjects);

// Testing the elements of an Array
const arrayToBeTested = [1, -2, 3, 4, 5];
//every
const allPositive = arrayToBeTested.every(value => value >= 0);
console.log(allPositive);
//some
const atLeastOnePositive = arrayToBeTested.some(value => value >= 0);
console.log(atLeastOnePositive);


//Filtering an Array

const arrayForFiltering = [1, -2, 3, 4, 5];

const filtered = arrayForFiltering.filter(f => f >= 0);
console.log(filtered);

//Mapping an Array
// const items = filtered.map(num => '<li>' + num + '</li>');
// const html = '<ul>' +  items.join('') + '</ul>';     
// console.log(html);

const items = filtered.map(n => ({ value: n }));
const items2 =
    arrayForFiltering.filter(n => n >= 0)
        .map(n => ({ value: n }))
        .filter(obj => obj.value > 2)
        .map(ob => ob.value);

console.log(items2);
//reducing array

const numbersToReduced = [1, -2, 3, 4, 5];

// regular way to sum the array

let sum = 0;
for (let number of numbersToReduced)
    sum += number;
console.log(sum);

//using reduce method 
// const total = numbersToReduced.reduce((accmulator, currentValue) =>{
//     return accmulator + currentValue;
// },0);
const total = numbersToReduced.reduce((accmulator, currentValue) => accmulator + currentValue);
console.log(total);

//Excercise
//1
function arrayFromRange(min, max) {
    const listofArray = [];
    for (let i = min; i <= max; i++)
        listofArray.push(i)
    return listofArray;
}


const numbers12 = arrayFromRange(-10, -4);
console.log(numbers12);

//2

const listOfArray = [1, 2, 3, 4, 5];

console.log(includes(listOfArray, 38));

function includes(array, searchElement) {
    for (let key of array)
        if (key === searchElement) return true;
    return false;
}

//3

function except(array, excluded) {
    const output = [];
    for (let element of array)
        if (!excluded.includes(element))
            output.push(element)
    return output;

}

const numbers233 = [1, 2, 3, 4, 1, 1];
const output = except(numbers233, [1]);
console.log(output);

// 4

function move(array, index, offset) {
    if (offset >= array.length)
        return console.error('Invalid Offset');

    let temp = array[index];
    array[index] = array[offset];
    array[offset] = temp
    return array;
}

const numbersMoving = [1, 2, 3, 4];
const outputM = move(numbersMoving, 0, 3);
console.log(outputM);
//5

function getOccurance(array, searchElement) {
    return array.reduce((accmulator, currentValue) => {
        const occurence = (currentValue === searchElement) ? 1 : 0;
        return accmulator + occurence;
    }, 0);
}

console.log(getOccurance([], 6));

function getMax(array) {
    if (array.length === 0) return;
    return array.reduce((acc, current) => (acc < current) ? current : acc)
}

console.log(getMax([5, 6, 2, 8, 9]));

const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 }
];

const filteredMovies =
    movies.filter(m => m.year === 2018 && m.rating >= 4)
        .sort((a, b) => a.rating - b.rating)
        .reverse()
        .map(obj => obj.title);

console.log(filteredMovies);




































