const Shape = require("./shapes")

class Square extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
        }
    render() {
        return `<rect x="10" y="10" width="100%" height="100%" fill="${this.shapeColor}"/>`
    }
}

module.exports = Square;