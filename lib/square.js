const Shape = require("./shapes")

class Square extends Shape {
    createShape() {
        return `<rect x="10" y="10" width="30" height="30" fill="${this.color}"/>`
    }
}

module.exports = Square;