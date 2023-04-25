const Shape = require("./shapes")

class Triangle extends Shape {
    createShape() {
        return `<polygon points="50 0, 100 100, 0 100" fill="${this.color}"/>`
    }
}

module.exports = Triangle;