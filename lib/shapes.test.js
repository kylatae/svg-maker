const inquirer = require('inquirer')
const Inquire = require('../index.js');

describe('Inquire input test', () => {
  describe('chars', () => {
    it('chars left blank should validate input false', () => {
      const chars = '';
      console.log ('before inq')
      const inquire = new Inquire();
      console.log (inquire)
      expect(inquire.chars.validate(chars)).toEqual(false);
    });
  });
});
