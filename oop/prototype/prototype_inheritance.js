
function Shape() {

}
 
Shape.prototype.duplicate = function () {
    console.log('duplicate');
    
}


function Circle(radius){
  this.radius = radius;

}

 Circle.prototype = Object.create(Shape.prototype);


Circle.prototype.draw = function() {
    console.log('draw');
 
}

function Square(size){
    this.size = size;
}
const c1 = new Circle(10);
c1.draw();
c1.duplicate();
const s1 =  new Square(20);

function Mixin(target, ...source) {
    Object.assign(target, ...source);
}
const canEat = {
    eat: function(){
        this.hunger--;
        console.log('eating...');
    }
}

const canWalk = {
    walk: function () {
        console.log('walking...');
        
    }
}

const canSwim = {
    swim: function () {
        console.log('swimming...');

    }
}

function Person () {}

function GoldFish () {}

Object.assign(Person.prototype, canEat, canWalk);

const person = new Person();
console.log(person);

Object.assign(GoldFish.prototype, canEat, canSwim);
const goldFish = new GoldFish();
console.log(goldFish);



