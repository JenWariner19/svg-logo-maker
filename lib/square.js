const Shape = require("./shapes")

class Square extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
        }
    render() {
        return `<rect x="10" y="10" width="200" height="200" fill="${this.shapeColor}"/>`
    }
}

module.exports = Square;