const MAX = 600;
let canvas = document.getElementById('canvas');

class Shape {
    constructor(height, width) {
        this.shapeName = 'Shape';
        this.div = document.createElement('div');
        this.height = height;
        this.width = width;
        canvas.appendChild(this.div);
        this.updateLocation();
        this.div.addEventListener('click', () => this.describe());
        this.div.addEventListener('dblclick', () => this.div.remove());
    }
    shapeArea() {
        return this.height * this.width;
    }
    shapePerimeter() {
        return (this.height * 2) + (this.width * 2);
    }
    updateLocation() {
        let xVal = randomVal(0, (MAX - this.width));
        let yVal = randomVal(0, (MAX - this.height));
        this.div.style.left = `${xVal}px`;
        this.div.style.top = `${yVal}px`;
    }   
    describe() {
        let shapeBox = document.getElementById('shape-box');
        shapeBox.innerHTML = '';
        shapeBox.append(this.shapeName);
        let widthBox = document.getElementById('width-box');
        widthBox.innerHTML = '';
        widthBox.append(this.width);
        let heightBox = document.getElementById('height-box');
        heightBox.innerHTML = '';
        heightBox.append(this.height);
        let radiusBox = document.getElementById('radius-box');
        radiusBox.innerHTML = '';
        radiusBox.append('N/A');
        let areaBox = document.getElementById('area-box');
        areaBox.innerHTML = '';
        areaBox.append(this.shapeArea());
        let perimeterBox = document.getElementById('perimeter-box');
        perimeterBox.innerHTML = '';
        perimeterBox.append(this.shapePerimeter());
    }
}   

class Circle extends Shape {
    constructor(radius) {
        super(2*radius, 2*radius);
        this.shapeName = "Circle";
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
    updateLocation() {
        const radiusy = this.height / 2;
        const radiusx = this.width / 2;
        let xVal = randomVal(0, (MAX - radiusx));
        let yVal = randomVal(0, (MAX - radiusy));
        this.div.style.left = `${xVal}px`;
        this.div.style.top = `${yVal}px`;
    }
    describe() {
        const radius = this.height / 2;
        let shapeBox = document.getElementById('shape-box');
        shapeBox.innerHTML = '';
        shapeBox.append(this.shapeName);
        let widthBox = document.getElementById('width-box');
        widthBox.innerHTML = '';
        widthBox.append('N/A');
        let heightBox = document.getElementById('height-box');
        heightBox.innerHTML = '';
        heightBox.append('N/A');
        let radiusBox = document.getElementById('radius-box');
        radiusBox.innerHTML = '';
        radiusBox.append(radius);
        let areaBox = document.getElementById('area-box');
        areaBox.innerHTML = '';
        areaBox.append(this.shapeArea());
        let perimeterBox = document.getElementById('perimeter-box');
        perimeterBox.innerHTML = '';
        perimeterBox.append(this.shapePerimeter());
    }
}

class Triangle extends Shape {
    constructor(height) {
        super(height, height);
        this.shapeName = "Triangle";
        this.div.className = 'new-triangle' 
        this.div.style.borderBottom = `${height}px solid yellow`;
        this.div.style.borderRight = `${height}px solid transparent`;
        canvas.appendChild(this.div);
    }
    shapeArea() {
        return this.height * this.height * 0.5;
    }
    shapePerimeter() {
        const hyp = Math.sqrt(Math.pow(this.height, 2) + Math.pow(this.height, 2));
        return Number(this.height) + Number(this.height) + hyp;
    }
    updateLocation() {
        const heighty = this.height;
        const heightx = this.width;
        let xVal = randomVal(0, (MAX - heightx));
        let yVal = randomVal(0, (MAX - heighty));
        this.div.style.left = `${xVal}px`;
        this.div.style.top = `${yVal}px`;
    }
}

class Rectangle extends Shape {
    constructor (height, width) {
        super(height, width);
        this.shapeName = "Rectangle";
        this.div.className = 'new-rectangle'
        this.div.style.height = `${height}px`;
        this.div.style.width = `${width}px`;
        canvas.appendChild(this.div);  
    }
}

class Square extends Shape {
    constructor (sideLength) {
        super(sideLength, sideLength);
        this.shapeName = "Square";
        this.div.className = 'new-square'
        this.div.style.height = `${sideLength}px`;
        this.div.style.width = `${sideLength}px`;
        canvas.appendChild(this.div);  
    }
    updateLocation() {
        const sideLengthy = this.height;
        const sideLengthx = this.width;
        let xVal = randomVal(0, (MAX - sideLengthx));
        let yVal = randomVal(0, (MAX - sideLengthy));
        this.div.style.left = `${xVal}px`;
        this.div.style.top = `${yVal}px`;
    }
    describe() {
        const sideLengthy = this.height;
        const sideLengthx = this.width;
        let shapeBox = document.getElementById('shape-box');
        shapeBox.innerHTML = '';
        shapeBox.append(this.shapeName);
        let widthBox = document.getElementById('width-box');
        widthBox.innerHTML = '';
        widthBox.append(sideLengthx);
        let heightBox = document.getElementById('height-box');
        heightBox.innerHTML = '';
        heightBox.append(sideLengthy);
        let radiusBox = document.getElementById('radius-box');
        radiusBox.innerHTML = '';
        radiusBox.append('N/A');
        let areaBox = document.getElementById('area-box');
        areaBox.innerHTML = '';
        areaBox.append(this.shapeArea());
        let perimeterBox = document.getElementById('perimeter-box');
        perimeterBox.innerHTML = '';
        perimeterBox.append(this.shapePerimeter());
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