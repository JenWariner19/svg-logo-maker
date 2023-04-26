const Shape = require("./shapes")

class Circle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor)
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`
    }
}

module.exports = Circle;