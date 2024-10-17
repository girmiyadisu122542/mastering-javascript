// Optional Chining (?.)

const person = {
    name: 'girmay',
    address: 'Addis Abeba'
}

let fullInfo = person?.name + person?.address + person?.lastName;

console.log(fullInfo);  //girmayA.Aundefined

//Nullish Coalescing (??)

console.log(person.lastName ?? 'Unknown');

