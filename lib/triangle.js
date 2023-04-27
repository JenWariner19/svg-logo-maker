const Shape = require("./shapes")

class Triangle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
        }
    render() {
        return `<polygon points="0,200 300,200 150,0" fill="${this.shapeColor}"/>`
    }
}

module.exports = Triangle;