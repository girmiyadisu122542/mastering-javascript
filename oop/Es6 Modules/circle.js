const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    draw() {
        console.log(`Circle with raduis ${_radius.get(this)}`); 
    }
}

module.exports = Circle;