'use strict';

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Teкст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

// const square = new Rectangle(10, 8);
// console.log(square.calcArea())

const div = new ColoredRectangleWithText(25, 8, 'Woow', 'red');
div.showMyProps();
console.log(div.calcArea());