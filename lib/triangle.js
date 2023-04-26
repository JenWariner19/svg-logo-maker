const Shape = require("./shapes")

class Triangle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
        }
    render() {
        return `<polygon points="150,20 230,180 70,180" fill="${this.shapeColor}"/>`
    }
}

module.exports = Triangle;