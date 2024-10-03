const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisble: true,
    draw: function () {
        console.log("draw");
    }
}

// Factory Function => let's make shorter the above object to resuse multiple times

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log("draw")
        }
    };
}

const circle1 = createCircle(2);
circle1.draw();

//Constructor Function 
//pascal notation OneTwoThree

function Circle(radius) {
    this.radius = radius,
        this.draw = function () {
            console.log('draw')
        }
}

const myCircle = new Circle(5);
console.log(myCircle.draw);
console.log(Circle.name)
console.log(Circle.length)
console.log(Circle.constructor)

// enumirating properties of and Object

const enumirateObject = {
    radius: 1,
    draw: () => {
        console.log("Draw");
    }
}

// using for in loop

for (let key in enumirateObject)
    console.log(key, enumirateObject[key]);


// for of loop
// for (const key of enumirateObject)  // this draws and error
//     console.log(key); 

for (let key of Object.keys(enumirateObject))
    console.log(key, enumirateObject[key])

// using entries

for (let entry of Object.entries(enumirateObject))
    console.log(entry)

//to check existance
if ('radius' in enumirateObject) console.log("Yes");

//cloning an object

// const another = {};
// for (let key in enumirateObject)
//     another[key] = enumirateObject[key]

// console.log(another);
// the aboove code is an old form of clonig an object

// we can pass aditional property in {} 
// const another = Object.assign({}, enumirateObject);
//     console.log(another);

// using a spread operator
const another = { ...enumirateObject };
console.log(another);


//Math ,String    

//template literal ``
const fullName = 'John';
const message1 = 'Hi ' + fullName + ',\n';
const message = `Hi ${fullName} ${2 + 5},
  Thank you for joining my mailing list.

  Regards,
  Girmay
  
  `;
console.log(message);

//Date
const now = new Date();
console.log(now.getHours());

//excercises

const address = {
    street: '123 Main St',
    city: 'New York',
    zipCode: '10001'
};

function showAddress(address) {
    // for(let key of Object.keys(address))
    //     console.log(key, address[key]);
    //OR
    for (let key in address)
        console.log(key, address[key]);
}
showAddress(address);

const post = {
    title: 'Ethiopias\'s Current situation',
    body: ' Ethiopia is in a state of civil war. The government is trying to suppress the Tigrayan people.',
    author: 'Girmay',
    views: 1000,
    comments: [
        { author: 'John', body: 'Great post' },
        { author: 'Mary', body: 'I disagree' }
    ],
    isLive: true
}
console.log(post);






