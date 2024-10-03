//Funciton Declaration
function walk() {
    console.log('walk');
}

//announmous funciton expression

const run = function () {
    console.log("run");
}
run();
//Hoisting is moving of all function declaration to the top of the file

//  Arguments
function sum() {
    let total = 0;               // Initialize total to 0
    for (let value of arguments)  // Loop through each argument
        total += value;            // Add each value to total
    return total;                 // Return the accumulated total
}
console.log(sum(1, 2, 3, 4, 5, 10));

//The Rest Operator

function restFunction(...args) {  //with one parameter
    return args.reduce((total, value) => total + value);
}

console.log(restFunction(1, 2, 3, 4, 5, 6, 7));

function discount(discount, ...prices) {  //with two parameters but the Rest operator should be at the end.
    const total = prices.reduce((sum, price) => sum + price);
    return total * (1 - discount);
}
console.log(discount(0.2, 20, 30));

//Default Parameters

function interest(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years
}

console.log(interest(10000));

//Getters and Setters and Error Handling

const person = {
    firstName: 'Girmay',
    lastName: 'Addisu',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        if(typeof(value) !== 'string')
            throw new Error('Value is not string');
        const parts = value.split(' ');
        if(parts.length !== 2)
            throw new Error('Enter a first and last name');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }

}
try {
    person.fullName = 'Samrawit Addisu';
 }
catch(e) {
    alert(e);
}
console.log(person.fullName);
// 
