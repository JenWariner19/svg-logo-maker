const Circle = require('../lib/circle');

describe('Circle', () => {
    it('should return a string for circle', () => {
      const shape = new Circle;
      shape.setColor('blue');

      expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue"/>');
    });
  });