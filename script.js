let squareSide,
    recWidth,
    recHeight,
    cirRad,
    triSide,
    field;

document.addEventListener('DOMContentLoaded', () => {
    field = document.getElementsByClassName('field')[0];
    squareSide = document.getElementById('square-side');
    

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
        this.shape.addEventListener('click', this.describe.bind(this));
  }

    draw() {
        field.appendChild(this.shape);
        console.log('im a: ' + this.shape.className);
        getRandomPosition(this.shape);
    }

    removeShape() {
    this.shape.remove();
    $('#shape').text("Shape Name: ")
    $('#height').text("Height: ")
    $('#width').text("Width: " )
    $('#area').text("Area: ")
    $('#perimeter').text("Perimeter: ")
    $('#radius').text("Radius: ")

    }


}

class Square extends Shape {
    constructor() {
        super('square');
        this.shape.style.width = squareSide.value + 'px';
        this.shape.style.height = squareSide.value + 'px';
        this.draw();
    }
    get Radius() {

    }

    get Area() {

    }

    get Perimeter() {

    }

    get Height() {
    return squareSide.value
    }

    get Width() {
    return squareSide.value
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
get Radius() {

}

get Area() {

}

get Perimeter() {

}

get Height() {
    return recHeight.value
}

get Width() {
    return recWidth.value
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

    get Radius() {
        return cirRad.value
    }

    get Area() {

    }

    get Perimeter() {

    }

    get Height() {
    
    }

    get Width() {
    
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
    get Radius() {

    }

    get Area() {
        return triSide.value + triside.value
    }

    get Perimeter() {

    }

    get Height() {
    
    }

    get Width() {
    
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

Shape.prototype.describe = function() {
    $('#shape').text("Shape Name: " + this.shape.className)
    $('#height').text("Height: " + this.height)
    $('#width').text("Width: " + this.width)
    $('#area').text("Area: " + this.area)
    $('#perimeter').text("Perimeter: " + this.perimeter)
    $('#radius').text("Radius: " + this.radius)
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

