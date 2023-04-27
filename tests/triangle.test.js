const Triangle = require('../lib/triangle');

describe('Triangle', () => {
    it('should return a string for triangle', () => {
      const shape = new Triangle;
      shape.setColor('red');

      expect(shape.render()).toEqual('<polygon points="0,200 300,200 150,0" fill="red"/>');
    });
  });