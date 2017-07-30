let squareSide,
    recWidth,
    recHeight,
    cirRad,
    triSide,
    field;

document.addEventListener('DOMContentLoaded', () => {
    squareSide = document.getElementById('square-side');
    field = document.getElementsByClassName('field')[0];

    recWidth = document.getElementById('rectangle-width');
    recHeight = document.getElementById('rectangle-height');

    cirRad = document.getElementById('circle-radius');

    triSide = document.getElementById('triangle-side');
});

class Shape {
  constructor(type) {
        this.shape = document.createElement('div');
        this.shape.className = type;

        this.shape.addEventListener('dblclick', this.removeShape.bind(this));
  }

    draw() {
        field.appendChild(this.shape);
        console.log('im a: ' + this.shape.className);
        getRandomPosition(this.shape);
    }

    removeShape() {
    this.shape.remove();
}
}

class Square extends Shape {
    constructor() {
        super('square');
        this.shape.style.width = squareSide.value + 'px';
        this.shape.style.height = squareSide.value + 'px';
        this.draw();
    }
}

const makeSquare = () => {
    new Square();
}    

class Rectangle extends Shape {
    constructor() {
        super('rectangle');
        this.shape.style.width = recWidth.value + 'px';
        this.shape.style.height = recHeight.value + 'px';
        this.draw();
    }
}

const makeRectangle = () => {
    new Rectangle();
}

class Circle extends Shape {
    constructor() {
        super('circle');
        this.shape.style.height = cirRad.value + 'px';
        this.shape.style.width = cirRad.value + 'px';
        this.draw();
    }
}

const makeCircle = () => {
    new Circle();
}

class Triangle extends Shape {
    constructor() {
        super('triangle');
        this.shape.style.borderBottom = triSide.value + 'px solid yellow';
        this.shape.style.borderTop = triSide.value + 'px solid transparent';
        this.shape.style.borderRight = triSide.value + 'px solid transparent';
        this.draw();
    }
}

const makeTriangle = () => {
    new Triangle();
}

function getRandomPosition (elem) {
    var availW = field.offsetWidth  - 60;
    var availH = field.offsetHeight  - 60;
    var randomY = Math.round(Math.random() * availH) + 'px';
    var randomX = Math.round(Math.random() * availW) + 'px';
    elem.style.left = randomX;
    elem.style.top = randomY;
}


// document.addEventListener('DOMContentLoaded', function() {

//     class Shape {
//         constructor(height, width, sideLength, radius) {

//             this.height;
//             this.width;
//             this.sideLength;
//             this.radius;

//             this.shape = document.getElementById('div');
//             this.shape.className = name;
//         }

//         draw() {
//         field.appendChild(this.shape);
//         console.log('im a: ' + this.shape.className);
//         }
//     }

//     class Rectangle extends Shape {

//         constructor (height, width) {

//             super()
//             this.height = height;
//             this.width = width;
//             this.shape.style.width = width;
//             this.shape.style.height = height;

//         }
        

//         get area() {
//             return this.height * this.width;
//         }
//     }

//     class Square extends Shape {

//         constructor (sightLength, sightLength) {
            
//             super()
//             this.sideLength = sideLength;
//         }

//     }

//     class Circle extends Shape {

//         constructor (radius) {

//             super()
//             this.radis = radius;
//         }

//     }

//     class Triangle extends Shape {

//         constructor (height) {

//             super()
//             this.height = height;
//         }

//     }

// });

// function createRec() {

// };


// function createSqre() {

// };


// function createCir() {

// };


// function createTri() {

// };
