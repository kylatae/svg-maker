const fs = require("fs")
const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js');
const colors = require('./lib/colors.js');

qPrompt = [
  {
    type: 'input',
    message: 'What 3 Characters do you want on your ',
    name: 'chars',
    validate: function(input){
      if (input.length > 0 && input.length < 4) return true
      else {
        console.log(`
        Please enter 1 to 3 characters for your logo`)
        return false
      }
    }
  },
  {
    type: 'input',
    message: 'What color would you like the text to be (Use Color Name or Hex (#AA0011) Default is Black)',
    name: 'charColor',
    validate: function(input){
      if (vColor(input)) return true
    }
  },
  {
    type: 'list',
    message: 'What shape would you like around your logo?',
    name: 'shape',
    choices: ['circle', 'square', 'triangle']
  },
  {
    type: 'input',
    message: 'What color would you like the shape to be (Use Color Name or Hex (#AA0011) Default is Black)',
    name: 'shapeColor',
    validate: function(input){
      if (vColor(input)) return true
    }
  },
  {
    type: 'input',
    message: 'Desired image height in pixels (Minimum 100, Maximum 750)',
    name: 'height',
    validate: function(input){
      if (input > 99 && input < 751) return true
      else{
        console.log(`
        Please input a value between 100 and 750`)
        return false
      }
    }
  }
]

function vColor(input){
  const regex = new RegExp((/^#([A-Fa-f0-9]{6})$/));
  input = input.toLowerCase()
  if (regex.test(input)) return true;
  else if (colors(input)) return true;
  else {
    console.log (`
    Please input a color name or hexidecimal value with the #`)
  }
  return false
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, shapes(data), (err) =>
  err ? console.error(err) : console.log('Generated logo.svg'))
}

function init() {

  inquirer.prompt(qPrompt)
    .then((data)=>{
      writeToFile(`./lib/img/logo.svg`, data)
    })
}

init();