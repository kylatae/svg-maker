const Shape = require('./shapes.js');

describe('Shape Test', () => {
  describe('Instantiate', () => {
    it('should be an instance of BlogPost class', () => {
      const shapes = new Shape();

      expect(shapes).toBeInstanceOf(Shape);
    });
  });


  describe('Initialize Shape Name', () => {
    it('Should define a shape', () => {
      const shape = 'circle';
      const shapes = new Shape(shape);

      expect(shapes.shape).toBe(shape);
    });
  });

  describe('Initialize Height', () => {
    it('Should define shape Height', () => {
      const height = '200';
      const shapes = new Shape('circle', height);

      expect(shapes.height).toBe(height);
    });
  });

    
  describe('Initialize Color', () => {
    it('Should define shape color', () => {
      const shapeColor = 'green';
      const shapes = new Shape('circle', '200', shapeColor);

      expect(shapes.shapeColor).toBe(shapeColor);
    });
  });


});


