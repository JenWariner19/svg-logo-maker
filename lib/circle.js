const Shape = require("./shapes")

class Circle extends Shape {
    createShape() {
        return `<circle cx="25" cy="75" r="20" fill="${this.color}"/>`
    }
}

module.exports = Circle;