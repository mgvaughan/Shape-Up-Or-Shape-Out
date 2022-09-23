const MAX = 600;
let canvas = document.getElementById('canvas');

class Shape {
    constructor(height, width) {
        // this.shapeName = shapeName;
        this.div = document.createElement('div');
        this.height = height;
        this.width = width;
        canvas.appendChild(this.div);
        this.updateColor();
        this.updateLocation();
    }
    shapeArea() {
        return this.height * this.width;
    }
    shapePerimeter() {
        return (this.height * 2) + (this.width * 2);
    }
    updateLocation() {
        let xVal = randomVal(0, MAX);
        let yVal = randomVal(0, MAX);
        this.div.style.left = `${xVal}px`;
        this.div.style.top = `${yVal}px`;
    }
    updateColor() {
        let randomColor = `rgb(${randomVal(0,255)}, ${randomVal(0,255)}, ${randomVal(0,255)})`
        this.div.style.backgroundColor = randomColor;
    }
}   

class Circle extends Shape {
    constructor(radius) {
        super(2*radius, 2*radius);
        this.name = "Circle";
        this.div.className = 'new-circle'
        this.div.style.height = `${radius}px`;
        this.div.style.width = `${radius}px`;  
        canvas.appendChild(this.div);      
    }
    shapeArea() {
        const radius = this.height / 2;
        return ((radius * radius) * Math.PI);
    }
    shapePerimeter() {
        const radius = this.height / 2;
        return ((radius * 2) * Math.PI);
    }
}

class Triangle extends Shape {
    constructor(height) {
        super(height, height);
        this.name = "Triangle";
        this.div.className = 'new-triangle' 
        this.div.style.borderBottom = `${height}px solid lightgoldenrodyellow`;
        this.div.style.borderRight = `${height}px solid transparent`;
        canvas.appendChild(this.div);
    }
    shapeArea() {
        return this.height * this.height * 0.5;
    }
    shapePerimeter() {
        const hyp = Math.sqrt(Math.pow(this.height, 2) + Math.pow(this.height, 2));
        return this.height + this.height + hyp;
    }
}

class Rectangle extends Shape {
    constructor (height, width) {
        super(height, width);
        this.name = "Rectangle";
        this.div.className = 'new-rectangle'
        this.div.style.height = `${height}px`;
        this.div.style.width = `${width}px`;
        canvas.appendChild(this.div);  
    }
}

class Square extends Shape {
    constructor (sideLength) {
        super(sideLength, sideLength);
        this.name = "Square";
        this.div.className = 'new-square'
        this.div.style.height = `${sideLength}px`;
        this.div.style.width = `${sideLength}px`;
        canvas.appendChild(this.div);  
    }
}

let triangle = document.getElementById('triangle');
triangle.addEventListener('click', function() {
    let height = document.getElementById('triangle-height').value
    new Triangle(height);
})

let rectangle = document.getElementById('rectangle');
rectangle.addEventListener('click', function() {
    let height = document.getElementById('rectangle-height').value
    let width = document.getElementById('rectangle-width').value
    new Rectangle(height, width);
})

let square = document.getElementById('square');
square.addEventListener('click', function() {
    let sideLength = document.getElementById('square-side-length').value
    new Square(sideLength);
})

let circle = document.getElementById('circle');
circle.addEventListener('click', function() {
    let radius = document.getElementById('circle-radius').value
    new Circle(radius);
})

function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}