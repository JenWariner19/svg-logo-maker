const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');

const selectShape = (data) => {
    const shape = data.shape;
    switch (shape) {
      case 'Circle':
        const createCircle = new Circle(data.text, data.textColor, data.shape, data.shapeColor);
        return createCircle.render();

      case 'Square':
        const createSquare = new Square(data.text, data.textColor, data.shape, data.shapeColor);
        return createSquare.render();

      case 'Triangle':
        const createTriangle = new Triangle(data.text, data.textColor, data.shape, data.shapeColor);
        return createTriangle.render();

        default:
          return `Something is not right!`;
    }
  };

  const generateSVG = (data) => {
    if (data.text.length > 3) {
      throw new Error('Text must be less than 3 characters long.');
    }
    return`
<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

${selectShape(data)}

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>

</svg>`
  }

module.exports = generateSVG;