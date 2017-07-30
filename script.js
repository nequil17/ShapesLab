
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

let squareSide,
    field;

document.addEventListener('DOMContentLoaded', () => {
    squareSide = document.getElementById('square-side');
    field = document.getElementsByClassName('field')[0];
});

class Shape {
  constructor(type) {
        this.shape = document.createElement('div');
        this.shape.className = type;
  }

    draw() {
        field.appendChild(this.shape);
        console.log('im a: ' + this.shape.className);
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

