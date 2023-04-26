const Triangle = require('../lib/triangle');

describe('Triangle', () => {
    it('should return a string for triangle', () => {
      const shape = new Triangle;
      shape.setColor('red');

      expect(shape.render()).toEqual('<polygon points="150,20 230,180 70,180" fill="red"/>');
    });
  });