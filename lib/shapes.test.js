const inquirer = require('inquirer')
const Shape = require('./shapes.js');

describe('Shape Construction Test', () => {
  describe('', () => {
    it('chars left blank should validate input false', () => {
      const chars = '';
      const inquire = new Inquire();
      expect(inquire.chars.validate(chars)).toEqual(false);
    });
  });
});
