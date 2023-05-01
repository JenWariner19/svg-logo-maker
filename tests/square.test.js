const Square = require('../lib/square');

describe('Square', () => {
    it('should return a string for square', () => {
      const shape = new Square;
      shape.setColor('green');

      expect(shape.render()).toEqual('<rect x="10" y="10" width="200" height="200" fill="green"/>');
    });
  });